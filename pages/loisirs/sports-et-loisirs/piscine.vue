<template>
    <section id="piscine">
        <div class="fond-de-page">
            <div class="page-content">
                <FilArianne />
                <div class="contenu-page">
                    <div class="row display-flex">
                        <div class="col">
                            <h1>••• La Piscine </h1>
                            <p>
                                La piscine de Gimont est une piscine de plein air ouverte pendant la saison estivale de Juin
                                à début Septembre. Vous pourrez profiter de sa belle pelouse, des tables de pique-nique et
                                d’espaces ombragés pour vous reposer
                            </p>
                            <br>
                            <p>
                                Elle est équipée de 3 bassins :
                            <ul>
                                <li>1 grand bassin avec un plongeoir </li>
                                <li>1 un petit bassin </li>
                                <li>1 pataugeoire pour les plus petits</li>
                            </ul>
                            </p>
                            <p>
                                Cette piscine est parfaite pour y faire des longueurs, pour améliorer ses techniques de nage
                                et pour s’y amuser en famille ou entre amis
                                Une buvette est à votre disposition.
                            </p>
                            <!-- <p class="mt-5">
                                <a class="color-orange" href="/pdf/sport-et-loisirs/TarifsPisicine 2022.pdf" target="_blank">
                                    Consulter les tarifs
                                </a>
                            </p> -->
                        </div>
                        <div class="col pl-100 p-relative">
                            <p class="mb-3"> PARTIE PHOTOS <br>
                            <div class="gallery">
                                <a href="/img/pages/loisirs/sports-et-loisirs/08-Dominique FORNILI.jpg" class="image-link">
                                    <img src="/img/pages/loisirs/sports-et-loisirs/08-Dominique FORNILI.jpg"
                                        alt="Dominique FORNILI" />
                                </a>
                                <a href="/img/pages/loisirs/sports-et-loisirs/IMG_3585.jpg" class="image-link">
                                    <img src="/img/pages/loisirs/sports-et-loisirs/IMG_3585.jpg"
                                        alt="Photo piscine" />
                                </a>
                                <a href="/img/pages/loisirs/sports-et-loisirs/IMG_3589.jpg" class="image-link">
                                    <img src="/img/pages/loisirs/sports-et-loisirs/IMG_3589.jpg"
                                        alt="Photo piscine" />
                                </a>
                            </div>
                            </p>
                            <h2 class="mt-3 mb-3">Infos pratiques: </h2>
                            <p class="mt-3 mb-3">
                                <a class="color-orange" href="/pdf/sport-et-loisirs/Tarifs piscine 2023.pdf"
                                    target="_blank">
                                    Consulter les tarifs
                                </a>
                            </p>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.8887027799965!2d0.8699785512373372!3d43.629675361866816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a9687a2da8a75b%3A0x756b04eb125cf73c!2sPiscine%20de%20Gimont!5e0!3m2!1sfr!2sfr!4v1676892000855!5m2!1sfr!2sfr"
                                width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                            <p class="adresse">
                                32200 Bd du N, 32200 Gimont
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import FilArianne from '~/components/FilArianne.vue';

export default {
    name: "Piscine",
    transition: "fade_page",
    data() {
        return {};
    },
    created() { },
    mounted() {
        $('.image-link').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom', // this class is for CSS animation below
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
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
section#piscine {
    /* padding-top: 200px; */
    position: relative;
    background-color: #F5CB38;
}

#piscine h1 {
    margin: 2rem 0;
    color: #F5CB38;
}

#piscine h2 {
    font-size: 1.5rem;
}

.img-texte {
    display: flex;
    grid-gap: 15px;
    gap: 25px;
    font-weight: bold;
    align-items: center;
}

.color-orange {
    color: #CC9A55;
    transition: all 0.7s;
}

.color-orange:hover {
    padding-left: 10px;
    text-decoration: none;
}

.arianne {
    text-transform: uppercase;
    font-size: 0.8em;
    margin-left: 3vw;
    margin-bottom: 0;
}


.fond-de-page {
    height: 120vh;
    margin-bottom: -60px;
    position: relative;
}

.page-content {
    position: absolute;
    left: 5%;
    top: 5%;
    background-color: white;
    width: 90%;
    padding: 60px 0;
}


.display-flex {
    display: flex;
}

.pl-100 {
    padding-left: 100px;
}

#fb-share-button {
    background: #3b5998;
    color: white;
    border-radius: 3px;
    font-weight: 600;
    padding: 2px 8px;
    display: inline-block;
    position: static;
}

#fb-share-button:hover {
    cursor: pointer;
    background: #213A6F
}

#fb-share-button svg {
    width: 18px;
    fill: white;
}


.fa-print {
    font-size: 30px;
}

.adresse {
    font-weight: bold;
    /* margin: 2rem 0; */
}

.liens-utile {
    color: #137C89;
}

.liens-utile a {
    color: #137C89;
    transition: all .7s;
    text-decoration: none;
}

.liens-utile a:hover {
    padding-left: 10px;
}

.galerie-images {
    display: flex;
    gap: 20px;
    margin: 2rem 0;
}

.galerie-images img {
    max-width: 145px;
}

.gallery img {
    width: 145px;
    height: 105px;
}

@media (max-width: 1550px) {
    .fond-de-page {
        height: 160vh;
    }
}

@media (max-width: 1200px) {
    .display-flex {
        display: flex;
        flex-direction: column;
    }

    .page-content {
        position: initial;
        width: 100%;
    }

    .fond-de-page {
        height: auto;
    }

    .TheFooter {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%) !important;
        /* background-color: #85735d94; */
        background-color: rgb(203 190 175);
        /* padding: 11rem; */
        /* position: relative; */
    }

    .pl-100 {
        padding: 0;
    }
}

@media (max-width: 600px) {
    .galerie-images {
        flex-wrap: wrap;
        justify-content: center;
    }
}

@media print {

    .btn-print-share,
    .liens-utile,
    .galerie-images {
        display: none;
    }

    h1 {
        text-align: center;
    }

    .carte {
        width: 100%;
        margin: 0 auto;
    }

    .adresse,
    .img-texte {
        text-align: center;
    }
}</style>