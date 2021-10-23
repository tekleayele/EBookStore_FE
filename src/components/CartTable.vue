<template>

    <div class="shopping-cart">
        <br>
        <!-- Title -->
        <div class="title">
            Shopping Cart <br>
        </div>
        <div class="summary">
            <br>
            <span v-if="!this.$store.state.cart.empty">
                <span v-if="this.$store.state.cart.numberOfItems > 1">Subtotal ({{this.$store.state.cart.numberOfItems}} items) :</span>
                <span v-else>
                    Subtotal ({{this.$store.state.cart.numberOfItems}} item) :
                </span>
                <span class="amount">
                    <strong>&nbsp{{this.$store.state.cart.subtotal | currency }}</strong>
                </span>
            </span>

            <span v-if="!this.$store.state.cart.empty">
                <router-link to="/checkout">
                    <button class="procceedButton ml-3">
                        Procceed to checkout
                    </button>
                </router-link>
            </span>

            <span v-if="this.$store.state.selectedCategoryName">
                 <router-link :to="'/category/' + this.$store.state.selectedCategoryName">
                    <button class="procceedButton ml-3">
                        Continue Shopping
                    </button>
                </router-link>
            </span>
            <span v-else>
                 <router-link :to="'/category'">
                    <button class="procceedButton ml-3">
                        Continue Shopping
                    </button>
                </router-link>
            </span>


            <span v-if="!this.$store.state.cart.empty">
                <button class="clearCart ml-3" @click="clear()">Clear Cart</button>
            </span>
        </div>
        <div v-if="this.$store.state.cart.empty">
            <br>Your cart is Empty.
        </div>
        <div v-else>
            <div v-for="cartItem in this.$store.state.cart.items"
                 :key="cartItem.book.bookId">
                <!-- Books In Shopping Cart-->
                <div class="item">

                    <div class="image">
                        <img width="125" height="150"
                             :src="require('@/assets/images/books/' + bookImageFileName(cartItem.book))"
                             :alt="cartItem.book.title">
                    </div>

                    <div class="description">
                        <span>{{cartItem.book.title}}</span>
                        <span>{{cartItem.book.author}}</span>
                        <span><b>{{cartItem.book.price | currency }}</b></span>
                    </div>

                    <div class="quantity">
                        <button class="plus-btn ml-6" type="button" name="button" @click="update(cartItem.book, cartItem.quantity+1)">
                            +
                        </button>
                        <span class="ml-3">{{cartItem.quantity}}</span>
                        <button class="minus-btn ml-3" type="button" name="button" @click="update(cartItem.book, cartItem.quantity-1)">
                            -
                        </button>
                    </div>

                    <div class="spacing"></div>

                    <div class="delete">
                        <span>
                            <button class="clearCart" type="button" name="button" @click="remove(cartItem.book)">
                                Remove
                            </button>
                        </span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "CartTable",
        methods: {
            bookImageFileName: function (book) {
                let name = book.title.toLowerCase()
                name = name.replace(/ /g, '-')
                console.log(`${name}.gif`)
                return `${name}.gif`
            },
            update(book, quantity) {
                this.$store.dispatch('updateCart', {book, quantity});
            },
            remove(book) {
                this.$store.dispatch('removeBook', book);
            },
            clear() {
                this.$store.dispatch('clearCart');
            }
        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }

    .shopping-cart {
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

    .title {
        color: #5E6977;
        font-size: 30px;
    }

    .item {
        padding: 20px 30px;
        height: auto;
        display: flex;
        border-bottom: 1px solid #E1E8EE;
    }

    .item:nth-child(3) {
        border-top: 1px solid #E1E8EE;
        border-bottom: 1px solid #E1E8EE;
    }

    .image {
        margin-right: 50px;
    }

    .description {
        margin-right: 60px;
        width: 200px;

    }

    .description span {
        display: block;
        width: 200px;
        padding-right: 60px;
        font-size: 14px;
        color: #43484D;
        font-weight: 400;
    }

    .description span:first-child {
        font-size: 18px;
        margin-bottom: 5px;
    }

    .description span:last-child {
        font-weight: 300;
        margin-top: 8px;
        font-size: 18px;
        color: #A0A0A0;
    }

    .plus-btn {
        width: 30px;
        height: 35px;
        background-color: #ffb741;
        border-radius: 6px;
        border: none;
        cursor: pointer;
    }

    .minus-btn {
        width: 30px;
        height: 35px;
        background-color: #262F3E;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        color: white;
    }

    .rmv-btn {
        width: auto;
        height: 35px;
        background-color: red;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        color: white;
    }

    .delete {
        margin-right: 60px;
        width: 115px;
    }

    .spacing {
        width: 100px;
        text-align: center;
        font-size: 16px;
        color: #43484D;
        font-weight: 300;
    }

    .procceedButton {
        border-radius: 25px;
        background: #73AD21;
        width: 200px;
        height: 50px;
    }

    .clearCart {
        border-radius: 25px;
        background: #43484D;
        width: 100px;
        height: auto;
        color: white;
    }

    .amount {
        color: green;
        padding-right: 140px;

    }

</style>