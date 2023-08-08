<template>
    <section id="lac">
        <div class="fond-de-page">
            <div class="page-content">
                <FilArianne />
                <div class="contenu-page">
                    <div class="row display-flex">
                        <div class="col">
                            <h1>••• Le lac </h1>
                            <p>
                                Le lac de Gimont est proche du centre-ville et facilement accessible. Il est équipé d’une aire de pèche pour les personnes à mobilité réduite.
                            </p>
                            <br>
                            <p>
                                Le tour est possible en balades, accessible aux personnes à mobilités réduites ainsi qu’aux poussettes.
                            </p>
                            <br>
                            <p>
                                Dans ce lac les poissons sont nombreux : Vous trouverez des poissons blancs, des carnassiers ainsi que des carpes.
                            </p>
                            <br>
                            <p><u>Informations générales :</u></p>
                            <ul>
                                <li>Pèche pratiquée : pèche 2 ème catégorie  </li>
                                <li>Carte de pêche obligatoire </li>
                                <li>Superficie : 2 hectares </li>
                                <li>Profondeur : 2 Mètres  </li>
                                <li>Pêche limitée à deux cannes  </li>
                                <li>Navigation interdite  </li>
                                <li>Pèche de nuit interdite  </li>
                            </ul>
                            <br>
                            <hr>
                            <p>
                                Gimont bénéficie d’un deuxième lac plus petit mais qui ressemble au lac principal en terme de population piscicole 
                            </p>
                            <br>
                            <p><u>Informations générales :</u></p>
                            <ul>
                                <li>pêche pratiquée : pêche 2ème catégorie  </li>
                                <li>carte de pêche obligatoire</li>
                                <li>Superficie 0,8 hectares </li>
                                <li>Profondeur : 2 Mètres  </li>
                                <li>Navigation interdite  </li>
                                <li>Pèche de nuit interdite  </li>
                            </ul>
                            <br>
                        </div>
                        <div class="col pl-100 p-relative">
                            <p class="mb-3"> PARTIE PHOTOS <br>
                            <div class="gallery">
                                <a href="/img/pages/loisirs/sports-et-loisirs/le lac.jpg" class="image-link">
                                    <img src="/img/pages/loisirs/sports-et-loisirs/le lac.jpg"
                                        alt="Lac" />
                                </a>
                                <a href="/img/pages/loisirs/sports-et-loisirs/le lac 2.jpg" class="image-link">
                                    <img src="/img/pages/loisirs/sports-et-loisirs/le lac 2.jpg"
                                    alt="Lac" />
                                </a>
                                <a href="/img/pages/loisirs/sports-et-loisirs/LAC 3.jpg" class="image-link">
                                    <img src="/img/pages/loisirs/sports-et-loisirs/LAC 3.jpg"
                                    alt="Lac" />
                                </a>
                                <a href="/img/pages/loisirs/sports-et-loisirs/LE LAC 4(1).jpg" class="image-link">
                                    <img src="/img/pages/loisirs/sports-et-loisirs/LE LAC 4(1).jpg"
                                    alt="Lac" />
                                </a>
                            </div>
                            </p>
                            <iframe width="100%" height="300px" frameborder="0" allowfullscreen src="//umap.openstreetmap.fr/fr/map/carte-sans-nom_918115?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"></iframe><p><a href="//umap.openstreetmap.fr/fr/map/carte-sans-nom_918115"></a></p>
                           
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
section#lac {
    /* padding-top: 200px; */
    position: relative;
    background-color: #F5CB38;
}

#lac h1 {
    margin: 2rem 0;
    color: #F5CB38;
}

#lac h2 {
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
    height: 140vh;
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

    .Thelacer {
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