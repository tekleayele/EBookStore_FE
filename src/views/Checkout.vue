<template>
    <div class="checkout-cart">
        <br>
        <!-- Title -->
        <div class="title">
            Checkout <br> <br>
        </div>
        <div class="summary" v-if="cart.empty  && this.checkoutStatus !== 'PENDING' ">

            <span></span>
            Your Cart is Empty! <br><br>Please add items to shopping cart.
            <br> <br>

            <router-link to="/">
                <button class="procceedButton">
                    Continue Shopping
                </button>
            </router-link>

        </div>
        <div v-if="!cart.empty ||  this.checkoutStatus === 'PENDING'">
            <form @submit.prevent="submitOrder" class="pure-form pure-form-aligned">
                <fieldset>
                    <legend>Payment Info</legend>
                    <!-- Name -->
                    <div class="pure-control-group">
                        <label for="name">Name</label>
                        <input
                                type="text"
                                size="20"
                                id="name"
                                name="name"
                                v-model.lazy="$v.name.$model"
                        />

                        <template v-if="$v.name.$error">
                            <span class="pure-form-message" v-if="!$v.name.required">Name is required</span>
                            <span class="pure-form-message" v-if="!$v.name.minLength">
            Name must have at least
            {{ $v.name.$params.minLength.min }} letters.
          </span>
                            <span class="pure-form-message" v-if="!$v.name.maxLength">
            Name can have at most
            {{ $v.name.$params.maxLength.max }} letters.
          </span>

                        </template>
                    </div>

                    <!-- Address -->
                    <div class="pure-control-group">
                        <label for="address">Address</label>
                        <input
                                type="text"
                                size="20"
                                id="address"
                                name="address"
                                v-model.lazy="$v.address.$model"
                        />

                        <template v-if="$v.address.$error">
                            <span class="pure-form-message" v-if="!$v.address.required">Address is required</span>
                            <span class="pure-form-message" v-if="!$v.address.minLength">
                                Address must have at least
                                {{ $v.address.$params.minLength.min }} letters.
                            </span>
                            <span class="pure-form-message" v-if="!$v.address.maxLength">
                                 Address can have at most
                                {{ $v.address.$params.maxLength.max }} letters.
                            </span>
                        </template>
                    </div>
                    <!-- Email -->
                    <div class="pure-control-group">
                        <label for="email">Email</label>
                        <input type="text" size="20" id="email" name="email"
                               v-model.lazy="$v.email.$model"
                        />

                        <template v-if="$v.email.$error">
                            <span class="pure-form-message" v-if="!$v.email.required">Email is required</span>
                            <span class="pure-form-message" v-if="!$v.email.email">
            Please enter a valid email address.</span>
                        </template>
                    </div>
                    <!--Phone -->
                    <div class="pure-control-group">
                        <label for="phone">Phone</label>
                        <input
                                class="textField"
                                type="tel"
                                size="20"
                                id="phone"
                                name="phone"
                                v-model.lazy="$v.phone.$model"  />

                        <template v-if="$v.phone.$error">
                            <span class="pure-form-message" v-if="!$v.phone.required">Phone is required</span>
                            <span class="pure-form-message" v-if="!$v.phone.phone && $v.phone.required">
                                Please enter a valid phone number.</span>
                        </template>
                    </div>
                    <!--CC Number -->
                    <div class="pure-control-group">
                        <label for="ccNumber">Credit Card Number</label>
                        <input type="text" size="20" id="ccNumber" name="ccNumber"
                               v-model.lazy="$v.ccNumber.$model"
                        />

                        <template v-if="$v.ccNumber.$error">
                            <span class="pure-form-message" v-if="!$v.ccNumber.required">Credit card is required</span>
                            <span class="pure-form-message" v-if="!$v.ccNumber.ccNumber && $v.ccNumber.required">
                             Please enter a valid Credit card number.</span>
                        </template>
                    </div>

                    <div class="pure-control-group">

                        <label for="ccExpiryMonth">Exp Month</label>
                        <select v-model="ccExpiryMonth" id="ccExpiryMonth" name="ccMonth">
                            <option
                                    v-for="(month, index) in months"
                                    :key="index"
                                    :value="index + 1">{{ month }} ({{ index + 1 }})
                            </option>
                        </select>
                        <label for="ccExpiryYear">Exp Year</label>
                        <select v-model="ccExpiryYear" id="ccExpiryYear" name="ccYear">
                            <option
                                    v-for="(year, index) in 15"
                                    :key="index"
                                    :value="yearFrom(index)"
                            >{{ yearFrom(index)}}
                            </option>
                        </select>
                    </div>
                    <br>
                    <input class="purchase"
                           type="submit"
                           name="submit"
                           :disabled="this.checkoutStatus === 'PENDING'"
                           value="Complete Purchase"
                    />
                    <br>
                    <br>
                    <br>
                    <span class="amount">
                    <strong>Your credit card will be charged :
                        <span class="dollar">{{this.$store.state.cart.subtotal + 500  | currency}}</span></strong>
                        <br> <br>
                         <span class="dollar">
                        ({{this.$store.state.cart.subtotal   | currency}} + {{ 500   | currency}} shipping)
                         </span>
                </span>
                </fieldset>
            </form>


            <section v-if="checkoutStatus != ''" class="checkoutStatusTextHolder">
                <template v-if="checkoutStatus == 'ERROR'">
                    <div class="checkoutStatusText checkoutStatusErrorText">
                        Please fix the problems above and try again.
                    </div>
                </template>

                <template v-if="checkoutStatus == 'PENDING'">
                    <div class="checkoutStatusText checkoutStatusPendingText">
                        Processing...
                    </div>
                </template>
                <template v-if="checkoutStatus == 'OK'">
                    <div class="checkoutStatusText checkoutStatusOKText">
                        Order placed...
                    </div>
                </template>
                <template v-if="checkoutStatus == 'SERVER_ERROR'">
                    <div class="checkoutStatusText checkoutStatusErrorText">
                        An unexpected error occurred, please try again.
                    </div>
                </template>
            </section>


        </div>
    </div>
</template>


<script>
    import {email, maxLength, minLength, required} from "vuelidate/lib/validators";

    import isCreditCard from "validator/lib/isCreditCard";
    import isMobilePhone from "validator/lib/isMobilePhone";

    const phone = value => isMobilePhone(value, "en-US");
    const creditCard = value => isCreditCard(value);

    export default {
        data() {
            return {
                name: "",
                address: "",
                phone: "",
                email: "",
                ccNumber: "",
                ccExpiryMonth: new Date().getMonth() + 1,
                ccExpiryYear: new Date().getFullYear(),
                checkoutStatus: ""
            };
        },
        validations: {
            name: {
                required,
                minLength: minLength(4),
                maxLength: maxLength(45)
            },
            address: {
                required,
                minLength: minLength(4),
                maxLength: maxLength(45)
            },
            phone: {
                phone: phone,
                required
            },
            email: {
                required,
                email: email
            },
            ccNumber: {
                required,
                ccNumber: creditCard
            }
        },

        computed: {
            cart() {
                return this.$store.state.cart;
            },
            months() {
                return [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ];
            }
        },

        methods: {
            submitOrder() {
                console.log("Submit order");
                this.$v.$touch();
                if (this.$v.$invalid) {
                    this.checkoutStatus = "ERROR";
                } else {
                    this.checkoutStatus = "PENDING";
                    this.$store
                        .dispatch('placeOrder', {
                            name: this.name,
                            address: this.address,
                            phone: this.phone,
                            email: this.email,
                            ccNumber: this.ccNumber.replace(/ /g,""),

                    ccExpiryMonth: this.ccExpiryMonth,
                            ccExpiryYear: this.ccExpiryYear
                        })
                        .then(() => {
                            this.checkoutStatus = 'OK'
                            this.$router.push({name: 'confirmation'})
                        })
                        .catch(reason => {
                            this.checkoutStatus = 'SERVER_ERROR'
                            console.log('Error placing order', reason)
                        })
                }
            },
            yearFrom(index) {
                return new Date().getFullYear() + index;
            }
        }
    };
</script>

<style scoped>
    .temporaryStyle {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-content: flex-start;
        margin: 100px;
    }

    .error {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-around;
        font-size: 16px;
        color: red;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .checkoutStatusTextHolder {
        margin: 30px;
        padding: 5px;
    }

    .checkoutStatusText {
        text-align: center;
    }

    .checkoutStatusErrorText {
        color: red;
    }

    .checkoutStatusPendingText {
        color: orange;
    }

    .checkoutStatusOKText {
        color: blue;
    }

    .checkout-cart {
        width: 100%;
        height: auto;
        margin: auto;
        background: #FFFFFF;
        box-shadow: gold;
        border-radius: 6px;

        display: flex;
        flex-direction: column;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-align-content: center;
        align-content: center;
    }

    .summary {
        border-bottom: 1px solid #E1E8EE;
        padding-bottom: 10px;
    }

    .procceedButton {
        border-radius: 25px;
        background: #73AD21;
        width: 200px;
        height: auto;
    }

    .purchase {
        border-radius: 25px;
        background: #ffb741;
        width: 200px;
        height: 50px;
        color: black;
    }

    .title {
        color: #5E6977;
        font-size: 30px;
    }

    .amount {
        color: black;

    }

    .dollar {
        color: green;
    }

    .pure-control-group {
        padding-bottom: 10px;
        padding-right: 80px;
    }

    .pure-control-group span {
        padding-left: 115px;
        color: red;
    }

    .pure-form-aligned .pure-control-group label {
        width: 5em;
    }
</style>
