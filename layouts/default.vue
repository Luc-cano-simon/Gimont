<template>
    <div>
        <div id="app">
            <header class="headerNav" :class="$store.state.scrollY > 0 ? 'shrinkedhead' : null">
                <Navbar />
            </header>

            <MobileMenu />


            <div> <!-- style="min-height: 100vh" -->
                <Nuxt keep-alive :keep-alive-props="{ max: 10 }" />
            </div>

            <TheFooter />

            <TheScrollUp></TheScrollUp>

            <Cookies color_one="var(--color-identity)" color_two="white"></Cookies>

            <MessageToUser></MessageToUser>

            <!-- <the-burger-menu-btn v-show="$store.state.window_width < 1000" /> -->
        </div>
    </div>
</template>

<script>
import Navbar from '~/components/navbar.vue';
import TheFooter from '~/components/TheFooter.vue';



export default {
    scrollToTop: true,
    name: "default",
    watch: {
        "$store.state.showMenu": function () {
            this.lock_unlockBG();
        },
    },
    mounted() {
        this.$nextTick(() => {
            if (process.client) {
                this.lookForPhoneSize();
                window.addEventListener("resize", this.lookForPhoneSize);
                window.addEventListener("scroll", this.handleScroll);
                if (document
                    .getElementsByTagName("body")[0]
                    .classList.contains("noOverflow")) {
                    this.lock_unlockBG();
                }
                document.getElementsByTagName("body")[0].className =
                    this.$route.path.split("/").join("-");
            }
        });
        this.$router.afterEach((to, from) => {
            if (process.client) {
                document.getElementsByTagName("body")[0].className =
                    this.$route.path.split("/").join("-");
                // document.getElementsByTagName("body").classList.add(router. )
            }
            // to and from are both route objects.
        });
        AOS.init({})
    },
    methods: {
        getLinksByLevel() {
            switch (this.menumobile.deep) {
                // case 0:
                // 	return this.nav;
                // 	break;
                case 1:
                    return [...this.nav].filter((el) => el.title === this.menumobile.title)[0].sub;
                    break;
                case 2:
                    const level1 = [...this.nav].filter((el) => el.title === this.menumobile.title)[0].sub;
                    const level2 = level1.filter((ela) => ela.title === this.menumobile.title2)[0].sub;
                    return level2;
                    break;
                default:
                    return this.nav;
                    break;
            }
        },
        lookForPhoneSize(e) {
            this.$store.commit("setWindowWidth", window.innerWidth);
        },
        lock_unlockBG() {
            document
                .getElementsByTagName("body")[0]
                .classList.toggle("noOverflow");
            document
                .getElementsByTagName("html")[0]
                .classList.toggle("noOverflow");
        },
        handleScroll(e) {
            this.$store.commit("setWindowScrollPosition", window.scrollY);
        },
        getDeepUrl(lien_base, lien_sec, item) {
            // determine si le lien à générer contient une ancre ou une sous page
            if (!item.is_link) {
                return `${lien_base}/${this.$utils.stringForUrl(lien_sec)}#${this.$utils.stringForUrl(item.title)}`;
            }
            else {
                return `${lien_base}/${this.$utils.stringForUrl(lien_sec)}/${this.$utils.stringForUrl(item.title)}`;
            }
        },

    },
    components: { Navbar, TheFooter }
};
</script>

<style>
#MobileMenu {
    display: none;
}

@media (max-width: 768px) {
    #MobileMenu {
        display: block;
        z-index: 99999999;
        position: relative;
    }
}
</style>