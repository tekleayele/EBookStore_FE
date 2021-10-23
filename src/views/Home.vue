<template>
  <section>
    <br>
    <div class="homePageFirstText">Welcome to Tekle's Online Bookstore!</div>
    <br>
    <home-category-list></home-category-list>
    <br>
  </section>
</template>

<script>
import HomeCategoryList from "@/components/HomeCategoryList";
export default {
  name: "Home",
  components: {
    HomeCategoryList
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Proza+Libre");
p {
    margin: 10px;
}

hr {
    width: 100%;
    border: black solid 1px;
    margin-top: 10px;
    margin-bottom: 10px;
}

div.homePageFirstText {
  font-size: 30px;
}
</style>
