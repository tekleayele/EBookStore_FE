<template>
   <div class="cart">
      <cart-item-summary></cart-item-summary>
   </div>

</template>

<script>
    import CartItemSummary from "../components/CartItemSummary";
    export default {
        name: "cart",
        components: {CartItemSummary}
    }
</script>

<style scoped>
.cart {
   margin: 0 auto;
   width: 1100px;
}
</style>