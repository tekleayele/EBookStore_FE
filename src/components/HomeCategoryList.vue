<template>
  <div>
    <b-container>
      <b-row>
        <template v-for="category in $store.state.homeCategories">
          <b-col>
            <router-link
                    class="container"
                    :to="{ name: 'category', params: { name: category.name } }">
              <img :src="require('@/assets/images/categories/' + categoryImageFileName(category))"
                   :alt="category.name">
            </router-link>
          </b-col>
        </template>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HomeCategoryList",
    methods: {
        categoryImageFileName: function(category) {
            let name = category.name.toLowerCase()
            return `${name}.gif`
        }
    }

};
</script>

<style scoped>

 

</style>
