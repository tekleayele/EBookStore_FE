<template>
    <footer>
        <div id="footerLinks">
            <ul id="footerLinksList">
                <li class="footerLInksItem">
                    <a href="#">FAQ</a>
                </li>
                <li class="footerLInksItem">
                    |
                </li>
                <li class="footerLInksItem">
                    <a href="#">Returns</a>
                </li>
                <li class="footerLInksItem">
                    |
                </li>
                <li class="footerLInksItem">
                    <a href="#">Shipping</a>
                </li>
                <li class="footerLInksItem">
                    |
                </li>
                <li class="footerLInksItem">
                    <a href="#">Sitemap</a>
                </li>
                <li class="footerLInksItem">
                    |
                </li>
                <li class="footerLInksItem">
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
        <div id="backdrop">
            <ul id="footerIconList">
                <li class="footerIconListItem">
                    <a href="#">
                        <div class="footerIcon">
                            <img src="../assets/images/icons/facebook.png" alt="Your Bookstore Logo"/>
                        </div>
                    </a>
                </li>
                <li class="footerIconListItem">
                    <a href="#">
                        <div class="footerIcon">
                            <img src="../assets/images/icons/instagram.png" alt="Your Bookstore Logo"/>
                        </div>
                    </a>
                </li>
                <li class="footerIconListItem">
                    <a href="#">
                        <div class="footerIcon">
                            <img src="../assets/images/icons/twitter.png" alt="Your Bookstore Logo"/>
                        </div>
                    </a>
                </li>
            </ul>
            <div id="copyRight">
      <span>
        Copyright © 2019
      </span>
            </div>
        </div>

    </footer>
</template>

<script>
    export default {
        name: "AppFooter"
    };
</script>

<style scoped>

    footer {
        position: inherit;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 200px;
        background: #262F3E;
        color: white;
        text-align: center;

    }

    #footerIconList {
        width: 450px;
        height: 100px;
        margin: 0px auto 0px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .footerIconListItem {
        margin: 20px;
    }

    /* resize images */
    .footerIcon img {
        width: auto;
        height: 38px;
    }

    #footerLinksList {
        width: auto;
        margin: 0px auto 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .footerLInksItem {
        margin: 10px;
    }

</style>
