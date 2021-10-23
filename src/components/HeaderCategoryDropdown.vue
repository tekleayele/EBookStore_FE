<template>

  <div id="categoryDropdown">
      <br>
    <button>Categories</button>
    <ul>
      <template v-for="category in $store.state.categories">
        <router-link  :to="{ name: 'category', params: { name: category.name } }">
          <li>
          {{ category.name | capitalize}}
          </li>
        </router-link>
      </template>
    </ul>
  </div>
</template>

<script>

    export default {
        name: "HeaderCategoryDropdown"
    };
</script>

<style scoped>
#categoryDropdown {
  position: relative;
}

button {
  background: #ffb741;
  border: 0px;
  color:  #262F3E;
  height: 50px;
}

ul {
  background:  #262F3E;
  color: white;
  display: none;
}

li {
  padding: 5px;
}

li a {
  color: white;
}

li:hover {
  background: #ffb741;
}

#categoryDropdown:hover ul {
  display: block;
  position: absolute;
  width: 120px;
  z-index: 1;
}
</style>
