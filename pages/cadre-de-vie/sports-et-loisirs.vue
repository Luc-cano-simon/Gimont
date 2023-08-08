<template>
    <section id="sports-et-loisirs">
        <div class="arianne">
            <FilArianne />
        </div>
        <div class="titre-page">
            <h1>••• <span class="titre-seconde-couleur"> SPORTS </span> ET <span
                    class="titre-seconde-couleur">
                    LOISIRS </span> </h1>
        </div>
        <div class="contenu-page">
            <div class="shopList">
                <div class="shopLocation">
                    <div class="shopCard">
                        <h2>ATHLETICA</h2>
                        <p class="yellowPara">Salle de sport</p>
                        <p class="services">Salle de gym</p>
                        <p class="boldPara"><!----> </p>
                        <p> ZA Lafourcade <br> GIMONT </p>
                        <p class="boldPara"> Tél: 05 62 66 02 25 </p>
                        <div class="communications">
                            <a href="tel:0562660225" title="0562660225"><i class="fal fa-phone-alt"></i></a>
                            <a href="mailto:athleticaclub32@gmail.com" title="athleticaclub32@gmail.com"><i class="fal fa-envelope"></i></a>
                        </div>

                    </div>
                </div>
                <div class="shopLocation">
                    <div class="shopCard">
                        <h2>Étoile Sportive Gimontoise Football</h2>
                        <p class="yellowPara">Club de football</p>
                        <p> Rte de Saramon <br> GIMONT </p>
                        <p class="boldPara"> Tél: 09 71 45 49 13 </p>
                        <div class="communications">
                            <a href="tel:0971454913" title="0971454913">
                                <i class="fal fa-phone-alt"></i>
                            </a>
                            <!-- <a href="mailto:athleticaclub32@gmail.com" title="athleticaclub32@gmail.com">
                                <i class="fal fa-envelope"></i>
                            </a> -->
                        </div>
                    </div>
                </div>
                <div class="shopLocation">
                    <div class="shopCard">
                        <h2>Stade de Rugby</h2>
                        <p class="yellowPara">Stade de rugby Gimont</p>
                        <p> Rte de Saramon <br> GIMONT </p>
                        <p class="boldPara"> Tél: 05 62 67 81 23 </p>
                        <div class="communications">
                            <a href="tel:0562678123" title="0562678123">
                                <i class="fal fa-phone-alt"></i>
                            </a>
                            <!-- <a href="mailto:athleticaclub32@gmail.com" title="athleticaclub32@gmail.com">
                                <i class="fal fa-envelope"></i>
                            </a> -->
                        </div>
                    </div>
                </div>
                <div class="shopLocation">
                    <div class="shopCard">
                        <h2>Boxing Shaolin</h2>
                        <p class="yellowPara">Club de kick-boxing</p>
                        <p> 6 Chemin D'enducasse <br> GIMONT </p>
                        <p class="boldPara"> Tél:0630953821</p>
                        <div class="communications">
                            <a href="tel:0630953821" title="0630953821">
                                <i class="fal fa-phone-alt"></i>
                            </a>
                            <a href="mailto:BoxingShaolin2018@gmail.com" title="BoxingShaolin2018@gmail.com">
                                <i class="fal fa-envelope"></i>
                            </a>
                            <a href="https://boxingshaolin2018.wixsite.com/boxing" title="https://boxingshaolin2018.wixsite.com/boxing" target="_blank" rel="noopener"><i class="fal fa-globe"></i></a>
                        </div>
                    </div>
                </div>
                <div class="shopLocation">
                    <div class="shopCard">
                        <h2>Ecuries de Charlas</h2>
                        <p class="yellowPara">Centre équestre</p>
                        <p> Rte de Samatan <br> GIMONT </p>
                        <p class="boldPara"> Tél:0783172378</p>
                        <div class="communications">
                            <a href="tel:0783172378" title="0783172378">
                                <i class="fal fa-phone-alt"></i>
                            </a>
                            <a href="mailto:ecuriesdecharlas@gmail.com" title="ecuriesdecharlas@gmail.com">
                                <i class="fal fa-envelope"></i>
                            </a>
                        </div>
                        <!-- <nuxt-link :to="{ name: 'details-sports-loisirs', params: { id: news.id } }">{{ news.title }}</nuxt-link> -->
                    </div>
                </div>
                <div class="shopLocation">
                    <div class="shopCard">
                        <h2>Basket E.S.G Etoile Sportive Gimontoise</h2>
                        <p class="yellowPara">Club de basket-ball</p>
                        <p> En Pètre <br> GIMONT </p>
                        <p class="boldPara"> Tél:0783172378</p>
                        <!-- <div class="communications">
                            <a href="tel:0783172378" title="0783172378">
                                <i class="fal fa-phone-alt"></i>
                            </a>
                            <a href="mailto:ecuriesdecharlas@gmail.com" title="ecuriesdecharlas@gmail.com">
                                <i class="fal fa-envelope"></i>
                            </a>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import FilArianne from '~/components/FilArianne.vue';
// import AOS from 'aos';
// import 'assets/module/aos/dist/aos.css';
export default {
    transition: "fade_page",
    data() {
        return {};
    },

    created() { },
    mounted() {
        // $('a[href^="#"]').on('click', function (e) {
        //     e.preventDefault();
        //     var href = $(this).attr('href');
        //     var elem = $(href);
        //     if (elem.length) {
        //         var elemTop = elem.first().offset().top - 300;
        //         $('html,body').animate({
        //             scrollTop: elemTop
        //         }, 1000);
        //     }
        // });
        // FIXED ON SCROLL
        // $(window).scroll(function () {
        //     var scrollPosition = $(window).scrollTop();
        //     console.log(scrollPosition);
        //     if (scrollPosition > 100) {
        //         $(".summary").addClass("scrolled");
        //     } else {
        //         $(".summary").removeClass("scrolled");
        //     }
        // });
    },
    beforeMount() { },
    beforeDestroy() { },
    watch: {},
    computed: {},
    methods: {},
    head() {
        return this.$seo({});
    },
    components: { FilArianne },
};
</script>

<style scoped>

.titre-page {
    text-transform: uppercase;
}

.titre-seconde-couleur,
.yellowPara {
    color: #b47b6c;
}

.shopList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1em;
}

.shopLocation {
    border: 1px solid #b47b6c;
    position: relative;
    padding: 0.5rem;
    margin: 0 0.4rem 1rem 0;
    padding-bottom: 3rem;
}

.shopLocation h2 {
    text-transform: uppercase;
    font-size: 1.2rem;
    text-align: left;
}

.shopLocation p {
    margin: 0;
    padding: 0;
}

.services {
    display: none;
}

.boldPara {
    font-weight: 700;
}

.communications {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;
    font-size: 1.4rem;
}

</style>