<template>
    <div id="categoryNavLink">
        <ul id="categoryNavLinkList">
            <template v-for="category in $store.state.categories">
                <li
                        :key="category.categoryId"
                        v-if="$store.state.selectedCategoryName === category.name"
                        id="selected">
                    <span> {{ category.name | capitalize}}</span>
                </li>
                <li
                        :key="category.categoryId"
                        v-else>
                    <router-link
                            class="container"
                            :to="{ name: 'category', params: { name: category.name } }">
                        <span> {{ category.name | capitalize}}</span>
                    </router-link>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "CategoryNav"
    };
</script>

<style scoped>

    #categoryNavLink {
        position: relative;
        padding:10px 0;
        width: 100%;
        background: #ffc107;
        text-align: center;
        font-size: 18px;
    }

    #categoryNavLink a {
        color: black;
    }

    #categoryNavLinkList {
        width: auto;
        margin: 0px auto 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    #selected {
        background: #262F3E;
        color: white;
    }
</style>