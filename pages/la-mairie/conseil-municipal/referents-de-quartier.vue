<template>
    <section id="referents-quartier">
        <div class="arianne">
            <FilArianne />
        </div>
        <div class="titre-page">
            <h1>••• LES <span class="titre-seconde-couleur"> referents </span> DE <span class="titre-seconde-couleur">
                    quartier </span> </h1>
        </div>
        <ul class="summary">
            <li class="summary-item sommaire">
                <p>SOMMAIRE</p>
            </li>
            <li class="summary-item">
                <a class="slide-up" href="#referent-quartier-nord">Quartier nord</a>
            </li>
            <li class="summary-item">
                <a class="slide-up" href="#referent-quartier-sud">Quartier sud</a>
            </li>
            <li class="summary-item">
                <a class="slide-up" href="#referent-quartier-centre">Quartier centre</a>
            </li>
            <li class="summary-item">
                <a class="slide-up" href="#referent-quartier-est">Quartier est</a>
            </li>
            <li class="summary-item">
                <a class="slide-up" href="#referent-quartier-ouest">Quartier ouest</a>
            </li>
        </ul>
        <div class="contenu-page">
            <div id="referent-quartier-nord">
               <p> Quartier <span class="couleur-page"> nord </span> </p> 
                <img class="img-fluid" src="/img/pages/la-mairie/referents-de-quartier/Quartier_nord.png" alt="plan quartier nord" data-aos="fade-right" data-aos-duration="2000">
            </div>
            <div id="referent-quartier-sud">
                <p>Quartier <span class="couleur-page"> sud </span></p>
                <img class="img-fluid" src="/img/pages/la-mairie/referents-de-quartier/Quartier_sud.png" alt="plan quartier sud" data-aos="fade-right" data-aos-duration="2000">
            </div>
            <div id="referent-quartier-centre">
                <p>Quartier <span class="couleur-page"> centre </span></p>
                <img class="img-fluid" src="/img/pages/la-mairie/referents-de-quartier/Quartier_centre.png" alt="plan quartier centre" data-aos="fade-right" data-aos-duration="2000">
            </div>
            <div id="referent-quartier-est">
                <p>Quartier <span class="couleur-page"> est </span></p>
                <img class="img-fluid" src="/img/pages/la-mairie/referents-de-quartier/Quartier_est.jpg" alt="plan quartier est" data-aos="fade-right" data-aos-duration="2000">
            </div>
            <div id="referent-quartier-ouest">
                <p>Quartier <span class="couleur-page"> ouest </span></p>
                <img class="img-fluid" src="/img/pages/la-mairie/referents-de-quartier/Quartier_ouest.png" alt="plan quartier ouest" data-aos="fade-right" data-aos-duration="2000">
            </div>
            <div class="boutons-savoir-plus">
                <a  href="/img/pages/la-mairie/referents-de-quartier/ref_de_proximité.pdf" target="_blank">Voir la carte entière</a> 
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
        $(document).ready(function () {
            var navHeight = 300; // Récupérer la hauteur de la barre de navigation + du sommaire environ 280px

            $('a[href*="#"]').on('click', function (e) {
                e.preventDefault();
                var target = $(this.hash);
                $('html, body').animate({
                    scrollTop: target.offset().top - navHeight // soustraire la hauteur de la navbar + sommaire
                }, 1000);
            });
        });
        // FIXED ON SCROLL
        $(window).scroll(function () {
            var scrollPosition = $(window).scrollTop();
            // console.log(scrollPosition);
            if (scrollPosition > 100) {
                $(".summary").addClass("scrolled");
            } else {
                $(".summary").removeClass("scrolled");
            }
        });
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
/* Commun aux pages  */
section#referents-quartier {
    position: relative;
}

.titre-page {
    text-transform: uppercase;
}

.titre-seconde-couleur {
    color: #D7AA7A;
}

/* SOMMAIRE  */

.summary {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    margin: 0rem 7.9vw;
    text-align: center;
}

/* Style des éléments du sommaire */
.summary-item {
    background-color: #D7AA7A;
    box-sizing: border-box;
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    /* width: 16.5%; */
    flex:1;
    transition: all 0.7s;
}

.summary-item a {

    color: #000;
    text-decoration: none;
    transition: ease 0.7s;
}

.summary-item:hover a {
    color: white;
}

.sommaire {
    color: white;
}

.summary.scrolled {
    position: fixed;
    top: 155px;
    left: 0;
    right: 0;
    height: 50px;
    z-index: 1;

}

.contenu-page span.couleur-page {
    color: #D7AA7A;
}

#referent-quartier-nord {
    margin: 2rem 0;
}

.contenu-page p{
    margin:2rem 0;
}

.boutons-savoir-plus{
    margin:5rem 0;
    display: flex;
    justify-content: center;
}

.boutons-savoir-plus a{
    background-color: #D7AA7A;
    padding: 20px;
    border-radius: 30px;
    border: 1px solid transparent;
}

.boutons-savoir-plus a:hover{
    background-color: white;
    color:#D7AA7A;
    padding: 20px;
    border-radius: 30px;
    border: 1px solid #D7AA7A;
    text-decoration: none;
}

/* .contenu-page img{
    display:block;
    margin:auto;
} */

</style>