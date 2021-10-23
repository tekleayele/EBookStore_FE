<template>
    <div>
        <div class="title">
            <br>
            Confirmation
            <hr>
        </div>

        <div id="OrderSummary">
            <fieldset id="trackingInfoFieldset">
                <legend id="trackingInfo"><b>Tracking Info</b></legend><br>
                <div align="left">
                    <b>Confirmation Number :</b> {{this.$store.state.orderDetails.order.confirmationNumber}}<br><br>
                    <b>Order Date:</b> {{$store.state.orderDetails.order.dateCreated | formatOrderDate }}

                </div>
            </fieldset>
            <br><br>
            <fieldset id="customerInfoFieldset">
                <legend id="customerInfo"><b>Customer Info</b></legend><br>
                <div align="left">
                    <b>Full Name :</b> {{this.$store.state.orderDetails.customer.customerName}}<br><br>
                    <b>Email :</b> {{this.$store.state.orderDetails.customer.email}} <br><br>
                    <b>Address :</b> {{this.$store.state.orderDetails.customer.address}} <br><br>
                    <b>Credit Card Last 4 Digit :</b> {{this.$store.state.orderDetails.customer.ccNumber | lastFourDigitccNumber}}<br><br>
                    <b>Credit Card Expiration Date :</b> {{this.$store.state.orderDetails.customer.ccExpDate | formatCcExpDateDate}}
                </div>
            </fieldset>
            <br><br>
            <fieldset id="cartInfoFieldset">
                <legend id="cartInfo"><b>Cart Info</b></legend><br>
                <div align="left">
                    <order-book-list-item
                            v-for="book in this.$store.state.orderDetails.books"
                            :book="book"
                            />
                    <hr>
                    <span>
                        <b>Surcharge:</b> {{ 500 | currency }}<br>
                        <b>Total:</b> {{total + 500 | currency}}
                    </span>
                </div>
            </fieldset>
        </div>
    </div>


</template>

<script>
    import OrderBookListItem from "../components/OrderBookListItem";

    export default {
        name: "confirmation",
        components: {
            OrderBookListItem
        },
        computed: {
            total() {
                var totalPrice = 0;
                var moreThanOneQuantity = Array();
                for (let i = 0; i < this.$store.state.orderDetails.books.length; i++) {
                    for (let j = 0; j < this.$store.state.orderDetails.lineItems.length; j++) {
                        if(this.$store.state.orderDetails.books[i].bookId === this.$store.state.orderDetails.lineItems[j].bookId) {
                            totalPrice = totalPrice + ( this.$store.state.orderDetails.books[i].price * this.$store.state.orderDetails.lineItems[j].quantity);
                            moreThanOneQuantity.push(this.$store.state.orderDetails.lineItems[j].bookId);
                        }
                    }

                    if(!moreThanOneQuantity.includes(this.$store.state.orderDetails.books[i].bookId)) {
                        totalPrice = totalPrice +  this.$store.state.orderDetails.books[i].price;
                    }


                }

                return totalPrice;
            }
        }
    }
</script>

<style scoped>
    .title {
        margin: 0 auto;
        width: 1100px;
        color: #5E6977;
        font-size: 30px;
    }

    #OrderSummary {
        background-color: #fff;
        border-radius: 3px;
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


    #OrderSummary fieldset {
        border-radius: 3px;
        width: 30%;

    }

    #OrderSummary fieldset {
        border: 0px groove threedface;
        border-top: none;
        padding: 0.5em;
        margin: 1em 2px;
    }

    #OrderSummary fieldset b {
        font-weight: bold;
    }


    #trackingInfo {
        background: #262F3E;
        color: gold;
        height: 25px;
        font-size: 25px;
    }
    #trackingInfoFieldset div {
        color: #5c5c5c;
    }
    #trackingInfoFieldset div b {
        color: black;
    }


    #customerInfo {
        background: #ffc107;
        color: #262F3E;
        height: 25px;
        font-size: 25px;
    }
    #customerInfoFieldset div {
        color: #5c5c5c;;
    }
    #customerInfoFieldset div b {
        color: #7a5f00;
    }


    #cartInfo {
        background: green;
        color: white;
        height: 25px;
        font-size: 25px;
    }
    #cartInfoFieldset div {
        color: #5c5c5c;
    }
    #cartInfoFieldset div span b {
        color: black;
        font-size: 18px;
    }

</style>