<template>
    <b-col>
        <img width="250" height="300" :src="require('@/assets/images/books/' + bookImageFileName(book))"
             :alt="book.title">
        <br> <br>
        <div>
            {{ book.title }}
            <br>
        </div>
        <div id="author">
            {{ book.author }}
            <br>
        </div>
        <div id="price">
            <b>{{ book.price | currency }}</b>
        </div>
        <div>
            <br>
            <button id="addToCartButton" @click="addToCart(book)">Add to Cart</button>
            <div v-if="book.public">
                <br>
                <button id="readNowButton">Read Now</button>
                <br><br>
            </div>
        </div>
    </b-col>
</template>

<script>
    import Vue from 'vue'
    import BootstrapVue from 'bootstrap-vue'

    Vue.use(BootstrapVue)
    export default {
        name: "categoryBookListItem",
        props: {
            book: {
                type: Object,
                required: true
            }
        },

        methods: {
            bookImageFileName: function (book) {
                let name = book.title.toLowerCase()
                name = name.replace(/ /g, '-')
                console.log(`${name}.gif`)
                return `${name}.gif`
            },
            addToCart(book) {
                this.$store.dispatch('addToCart', book);
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

    #price {
        color: 	#A0A0A0;
    }

    #addToCartButton {
        background-color: orange;
    }

    #readNowButton {
        background-color:  #262F3E;
        color: white;
    }
</style>
