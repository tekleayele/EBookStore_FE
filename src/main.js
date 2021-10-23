import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store, {CART_STORAGE_KEY, CONFIRMATION_STORAGE_KEY} from "./store";
import "@/assets/css/normalize-and-reset.css";
import "@/assets/css/global.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'purecss/build/base-min.css'
import 'purecss/build/forms-min.css'
import "./filters"
import Vuelidate from 'vuelidate'
import TreeView from 'vue-json-tree-view'
import moment from 'moment'

Vue.config.productionTip = false;


Vue.use(Vuelidate)
Vue.use(TreeView)
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

Vue.filter('currency', function (value) {
    if (typeof value !== "number") {
        return value;
    }
    return formatter.format(value / 100);
});

Vue.filter('formatOrderDate', function(value) {
    if (value) {
        var orderDate = JSON.parse(JSON.stringify(value));
        console.log(orderDate);

        return moment(new Date(
            orderDate.year,
            orderDate.monthValue -1,
            orderDate.dayOfMonth,
            orderDate.hour,
            orderDate.minute,
            orderDate.second,
            orderDate.nano
        )).format('MM/DD/YYYY hh:mm');
    }
});


Vue.filter('formatCcExpDateDate', function(value) {
    if (value) {
        var ccExpDate = JSON.parse(JSON.stringify(value));
        return moment(new Date(
            ccExpDate.year,
            ccExpDate.monthValue -1
        )).format('MM/YYYY');
    }
});

Vue.filter('lastFourDigitccNumber', function (value) {
    if (value) {
        return value.substring(value.length-4);
    }
})

new Vue({
    router,
    store,  // every component will reference the Vuex.Store now
    render: function(h) {
        return h(App);
    },
    created() {
        const cartString = localStorage.getItem(CART_STORAGE_KEY);
        if (cartString) {
            const shoppingCart = JSON.parse(cartString);
            this.$store.commit("SET_CART", shoppingCart);
        }

        const orderDetailString = localStorage.getItem(CONFIRMATION_STORAGE_KEY);
        if (orderDetailString) {
            const orderDetail = JSON.parse(orderDetailString);
            this.$store.commit("ORDER_DETAILS", orderDetail);
        }
    }
}).$mount("#app");