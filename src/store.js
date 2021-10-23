import ApiService from '@/services/ApiService.js'
import Vue from "vue";
import Vuex from 'vuex'
import {ShoppingCart} from "./models/ShoppingCart";

Vue.use(Vuex)

export const CART_STORAGE_KEY = "cart";
export const CONFIRMATION_STORAGE_KEY = "confirmation";
export default new Vuex.Store({
    state: {
        categories: [],
        selectedCategoryName: "",
        selectedCategoryBooks: [],
        homeCategories: [],
        cart: new ShoppingCart(),
        orderDetails: ""
    },
    mutations: {
        SET_CATEGORIES(state, newCategories) {
            state.categories = newCategories;
        },

        SELECT_CATEGORY(state, name) {
            state.selectedCategoryName = name;
        },
        SET_SELECTED_CATEGORY_BOOKS(state, books) {
            state.selectedCategoryBooks = books;
        },
        SET_HOME_CATEGORIES(state, categories) {
            state.homeCategories = categories;
        },
        SET_CART(state, shoppingCart) {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(shoppingCart));
            let newCart = new ShoppingCart();
            shoppingCart.items.forEach(item => {
                newCart.addItem(item.book, item.quantity);
            });
            state.cart = newCart;
        },
        ADD_TO_CART(state, book) {
            state.cart.addItem(book, 1);
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.state.cart));
        },

        CLEAR_CART(state) {
            state.cart.clear();
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.state.cart));
        },

        UPDATE_CART(state, {book, quantity}) {
            state.cart.update(book, quantity);
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.state.cart));

        },

        REMOVE_BOOK_FROM_CART(state, book) {
            state.cart.removeBook(book);
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.state.cart));
        },
        ORDER_DETAILS(state, newOrderDetails) {
            state.orderDetails = newOrderDetails;
            localStorage.setItem(CONFIRMATION_STORAGE_KEY, JSON.stringify(this.state.orderDetails));
        },
    },
    actions: {
        fetchCategories(context) {
            ApiService.fetchCategories()
                .then(categories => context.commit("SET_CATEGORIES", categories))
                .catch(reason => {
                    console.log("Error loading categories ", reason);
                });
        },
        selectCategory(context, name) {
            context.commit("SELECT_CATEGORY", name);
        },
        fetchSelectedCategoryBooks(context) {
            ApiService.fetchSelectedCategoryBooks(context.state.selectedCategoryName)
                .then(selectedCategoryBooks => context.commit("SET_SELECTED_CATEGORY_BOOKS", selectedCategoryBooks))
                .catch(reason => {
                    console.log("Error loading selected categories ", reason);
                });

        },
        fetchHomeCategories(context) {
            ApiService.fetchHomeCategories()
                .then(categories => context.commit("SET_HOME_CATEGORIES", categories))
                .catch(reason => {
                    console.log("Error loading categories ", reason);
                });
        },
        addToCart(context, book) {
            context.commit("ADD_TO_CART", book);
        },
        clearCart(context) {
            context.commit("CLEAR_CART")
        },
        updateCart(context, {book, quantity}) {
            context.commit("UPDATE_CART", {book, quantity});
        },
        removeBook(context, book) {
            context.commit("REMOVE_BOOK_FROM_CART", book);
        },
        placeOrder({ commit, state }, customerForm) {
            return ApiService.placeOrder({
                cart: state.cart,
                customerForm: customerForm
            }).then(orderdetails => commit("ORDER_DETAILS", orderdetails) , commit('CLEAR_CART'))
              .catch(reason => {
                  console.log("Error processing order ", reason);
              });

        }
    }
});
