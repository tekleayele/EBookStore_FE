<template>
    <div>
        <category-nav :selectedCategory="$store.state.selectedCategoryName"></category-nav>

        <category-book-list :books="$store.state.selectedCategoryBooks"></category-book-list>
    </div>
</template>

<script>
    import CategoryNav from "@/components/CategoryNav";
    import CategoryBookList from "@/components/CategoryBookList";
    import {simple_store} from "../store";

    export default {
        name: "category",
        components: {
            CategoryNav,
            CategoryBookList
        }
    };
</script>

<style scoped>
    #selected {
        color: yellow;
    }
</style>
