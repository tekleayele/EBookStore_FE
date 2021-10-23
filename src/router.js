import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Category from "./views/Category.vue"
import Cart from "./views/Cart.vue"
import Checkout from "./views/Checkout.vue"
import Confirmation from "./views/Confirmation.vue"
import NotFound from './components/404.vue';


Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/home",
            component: Home
        },
        {
            path: "/index.html",
            component: Home
        },
        {
            path: "/index",
            component: Home
        },
        {
            path: "/category/:name",
            name: "category",
            component: Category,
            props: true
        },
        {
            path: "/cart",
            name: "cart",
            component: Cart
        },
        {
            path: "/checkout",
            name: "checkout",
            component: Checkout
        },
        {
            path: "/confirmation",
            name: "confirmation",
            component: Confirmation
        },
        { path: '*', component: NotFound }
    ]
});
