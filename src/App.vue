<template>
  <main>
    <app-header></app-header>
    <router-view :key="$route.fullPath"></router-view>
    <div class="clear"></div>
    <div id="footer">
    <app-footer></app-footer>
    </div>
  </main>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
    name: "App",
    components: {
        AppHeader,
        AppFooter
    },
    mounted: function () {
        this.$store.dispatch("fetchHomeCategories");
        this.$store.dispatch("fetchCategories");
    }
};
</script>

<style>

  .clear { clear: both; height: 60px; }

  body {
    font: 1em normal Verdana, Tahoma, sans-serif;
    color: #262F3E;
    font-size: 20px;
    text-align: center;
  }

  main {
    background:	white;
    /* stack header-section-footer on all pages */
    display: flex;
    flex-direction: column;
    vertical-align: middle;
    text-align: center;
  }

  input[type=submit] {
    /* do NOT use blue for this; change the color to fit your theme */
    color: white;
  }

  input[type=submit]:hover,
  ul.buttons a:hover{
     /* do NOT use purple for this; change the color to fit your theme */
     color: white;
   }
  .buttons a:active{
    /* do NOT use purple for this; change the color to fit your theme */
    color: white;
  }
  ul.buttons a:visited{
    /* do NOT use purple for this; change the color to fit your theme */
    color: gold;
  }

  a:visited {
    color: white;
  }

  a:link {
    color: white;
  }

  a:hover {
    color: gold;
  }
</style>
