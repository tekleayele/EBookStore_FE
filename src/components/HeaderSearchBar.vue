<template>
  <form id="searchForm" action="#">
    <div id='searchWrapper'>
      <input id="searchBox" type="text" name="category" placeholder="Search by Title, Author, or ISBN...">
      <button type="submit"><i class="fa fa-search"></i></button>
    </div>
  </form>
</template>

<script>
export default {
  name: "HeaderSearchBar"
};
</script>

<style scoped>

  #searchBox {
    padding: 9px;
    float: left;
    width: 80%;
    background: #f1f1f1;
    margin-right: 0;
    border-radius: 0.6em 0 0 0.6em;
  }

  #searchWrapper {
    vertical-align: middle;
  }

  button {
    float: right;
    width: 20%;
    font-size: 14px;
    padding: 9px;
    background: #ffc107;
    color: white;
    border: 1px solid grey;
    border-left: none;
    cursor: pointer;
    border-radius: 0 0.6em 0.6em 0;
    margin-left: 0;
  }


</style>
