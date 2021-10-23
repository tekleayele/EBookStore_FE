<template>
  <div>
      <b-container>
          <br> <br>
          <b-row>
              <category-book-list-item
                      v-for="book in $store.state.selectedCategoryBooks"
                      :key="book.bookId"
                      :book="book"
              />

          </b-row>
          <br> <br>
      </b-container>
  </div>
</template>

<script>
import CategoryBookListItem from "./CategoryBookListItem";


export default {
  name: "CategoryBookList",
  components: {
    CategoryBookListItem
  },
    mounted: function () {
        this.$store.dispatch("selectCategory", this.$route.params.name);
        this.$store.dispatch("fetchSelectedCategoryBooks");
    }
};
</script>

<style scoped>
</style>
