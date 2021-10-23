<template>
    <div>
        <div>
            <b>Title :</b> {{ book.title }}
            <br>
        </div>
        <div>
        <span v-for="lineItem in $store.state.orderDetails.lineItems">
            <div v-if="book.bookId == lineItem.bookId">
                <b>Quantity:</b> {{lineItem.quantity}}
            </div>
        </span>
        </div>
        <div id="price">
            <b>Price:</b>  {{ total | currency }}<br>
        </div>
        <br>
    </div>
</template>

<script>
    import Vue from 'vue'
    import BootstrapVue from 'bootstrap-vue'

    Vue.use(BootstrapVue)
    export default {
        name: "orderBookListItem",
        props: {
            book: {
                type: Object,
                required: true
            }
        },
        computed: {
            total() {
                var totalPrice = this.book.price;
                for (let i = 0; i < this.$store.state.orderDetails.lineItems.length; i++) {
                    if (this.book.bookId === this.$store.state.orderDetails.lineItems[i].bookId) {
                        totalPrice = totalPrice * this.$store.state.orderDetails.lineItems[i].quantity;
                    }
                }
                return totalPrice;
            }
        }
    };
</script>
<style scoped>

    b-col {
        position: relative;
    }

    #author {
        font-size: 13px;
    }

    b {
         color: #004c00;
        font-weight: bold;
    }

</style>
