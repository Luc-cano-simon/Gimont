<template>
    <section id="gymnase">
        <div class="fond-de-page">
            <div class="page-content">
                <FilArianne />
                <div class="contenu-page">
                    <div class="row display-flex">
                        <div class="col">
                            <h1>••• Gymnase </h1>
                            <p>
                                Le gymnase En Petre a été mis en service en 2005 .
                            </p>
                            <br>
                            <p>Il dispose :</p>
                            <ul>
                                <li>D’un sol en parquet et compte 1050 places en tribune ainsi qu’un Club House pour les
                                    repas d’après match </li>
                                <li>De places de parking ainsi qu’une accessibilité handicapée </li>
                            </ul>
                            <p>
                            <p>Activités</p>
                            <ul>
                                <li>
                                    Basket fille et garçon.
                                </li>
                                <li>Activité physique adaptée.</li>
                            </ul>
                            </p>
                        </div>
                        <div class="col pl-100 p-relative">
                            <p class="mb-3"> PARTIE PHOTOS <br>
                            <div class="gallery">
                                <a href="/img/pages/loisirs/sports-et-loisirs/Gymnase.jpg" class="image-link">
                                    <img src="/img/pages/loisirs/sports-et-loisirs/Gymnase.jpg"
                                        alt="Dominique FORNILI" />
                                </a>
                            </div>
                            </p>
                            <iframe width="100%" height="300px" frameborder="0" allowfullscreen src="//umap.openstreetmap.fr/fr/map/carte-sans-nom_918101?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"></iframe><p><a href="//umap.openstreetmap.fr/fr/map/carte-sans-nom_918101"></a></p>
                            <p class="adresse">
                                Chemin du Stade En Petre, 32200 Gimont
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
section#gymnase {
    /* padding-top: 200px; */
    position: relative;
    background-color: #F5CB38;
}

#gymnase h1 {
    margin: 2rem 0;
    color: #F5CB38;
}

#gymnase h2 {
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

    .Thegymnaseer {
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