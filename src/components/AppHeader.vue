<template>
  <header>
    <div id="logo">
      <router-link to="/">
        <img width="100" height="90"
             src="../assets/images/site/bookstore-logo.png"
                alt="Teklebirhan Bookstore Logo"
        />
      </router-link>
    </div>
    <div id="search">
      <h1>
        <router-link to="/">
          <img src="../assets/images/site/text-logo.png" alt="Tekle A Store BookStore" />
        </router-link>
      </h1>
      <header-search-bar></header-search-bar>
    </div>
    <div id="dropdown">
      <header-category-dropdown></header-category-dropdown>
    </div>
    <div id="cart">
      <router-link to="/cart">
        <img id="cartLogo" src="../assets/images/icons/cart.png" alt="Cart Icon" />
        <div id="cartCounter">{{$store.state.cart.numberOfItems}}</div>
      </router-link>
    </div>
    <div id="login">
      <router-link to="/login">
      <img id="loginLogo" src="../assets/images/icons/person.png" alt="Login" />
        <div id="loginAction"><a href="#">Login</a></div>
      </router-link>
    </div>
  </header>
</template>

<script>
import HeaderSearchBar from "@/components/HeaderSearchBar";
import HeaderCategoryDropdown from "@/components/HeaderCategoryDropdown";
export default {
  name: "AppHeader",
  components: { HeaderSearchBar, HeaderCategoryDropdown },
  component: {
    HeaderSearchBar,
    HeaderCategoryDropdown
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Proza+Libre");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
header {
  background: #262F3E;
  background-repeat: repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height:200px;
  width:100%;
}

h1 {
  font-family: "Proza Libre", sans-serif;
  font-size: x-large;
}

h1 a {
  color: black;
}

#logo {
  padding: 50px 130px 10px 300px
}

#search {
  background: #262F3E;
  padding: 0px 130px 10px 50px;
}

#dropdown {
  background: #262F3E;
  flex-direction: column;
  padding: 65px 30px 10px 50px;
}

#cart {
  background: #262F3E;
  padding: 110px 30px 10px 50px;
  height:200px;

}
#login {
  background: #262F3E;
  padding: 110px 30px 10px 50px;
  height:200px;
}
</style>
