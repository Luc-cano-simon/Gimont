<template>
    <section id="services-animations-ecole">
        <div class="fond-de-page">
            <div class="page-content">
                <FilArianne />
                <div class="contenu-page">
                    <div class="row display-flex">
                        <!-- <div class="btn-print-share">
                            <a onclick="window.print();"><i class="fa-solid fa-print"></i></a>
                            <div id="fb-share-button">
                                <svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid meet">
                                    <path class="svg-icon-path"
                                        d="M9.1,0.1V2H8C7.6,2,7.3,2.1,7.1,2.3C7,2.4,6.9,2.7,6.9,3v1.4H9L8.8,6.5H6.9V12H4.7V6.5H2.9V4.4h1.8V2.8 c0-0.9,0.3-1.6,0.7-2.1C6,0.2,6.6,0,7.5,0C8.2,0,8.7,0,9.1,0.1z">
                                    </path>
                                </svg>
                                <span>Partager</span>
                            </div>
                        </div> -->
                        <div class="col">
                            <h1>••• <span> SERVICE ÉCOLE </span></h1>
                            <div class="img-texte">
                                <img class="img-fluid d-block"
                                    src="/img/pages/la-mairie/organigramme/service-technique/fakephoto.png"
                                    alt="Julien PIEDFERRE">
                                <p> Chef de Service : Florian CHAMPEIL </p>
                            </div>
                            <h2 class="mt-5 mb-5">Missions ATSEM (Agent territorial spécialisé des écoles maternelles) 
                            </h2>
                            <ul>
                                <li>
                                    Assister le personnel enseignant pour l’accueil, l’animation et l’hygiène des enfants ;
                                </li>
                                <br>
                                <li>
                                    Préparer et mettre en état de propreté les locaux et le matériel utilisés directement
                                    par les enfants ;
                                </li>
                                <br>
                                <li>
                                    Participer à la communauté éducative et aux évènements de l’année scolaire ;
                                </li>
                                <br>
                                <li>
                                    Participer à la surveillance et à l’accompagnement des temps cantine.
                                </li>
                            </ul>
                        </div>
                        <div class="col pl-100 p-relative carte">
                            <div class="gallery">
                                <a href="/img/pages/la-mairie/organigramme/service-administratifs/fake1.jpg"
                                    class="image-link">
                                    <img src="/img/pages/la-mairie/organigramme/service-administratifs/fake1.jpg"
                                        alt="Fake 1" />
                                </a>
                                <!-- <a href="/img/pages/la-mairie/organigramme/service-technique/image_2.png" class="image-link">
                                    <img src="/img/pages/la-mairie/organigramme/service-technique/image_2.png" alt="Marche de Gimont" />
                                </a> -->
                                <a href="/img/pages/la-mairie/organigramme/service-administratifs/fake2.jpg"
                                    class="image-link">
                                    <img src="/img/pages/la-mairie/organigramme/service-administratifs/fake2.jpg"
                                        alt="Fake 2" />
                                </a>
                                <a href="/img/pages/la-mairie/organigramme/service-administratifs/fake3.jpg"
                                    class="image-link">
                                    <img src="/img/pages/la-mairie/organigramme/service-administratifs/fake3.jpg"
                                        alt="Fake 3" />
                                </a>
                            </div>

                            <div class="liens-utile mb-3">
                                <h3><u> LIENS UTILES </u></h3>
                                <a href="/vie-pratique/grandir-et-etudier/">Grandir et étudier</a> <br>
                            </div>

                            <iframe width="100%" height="450px" frameborder="0" allowfullscreen
                                src="//umap.openstreetmap.fr/fr/map/carte-sans-nom_867020?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false#16/43.6288/0.8655"></iframe>
                            <p><a href="//umap.openstreetmap.fr/fr/map/carte-sans-nom_867020"></a></p>
                            <p class="adresse">
                                Mairie de Gimont – Service école <br>
                                85 rue nationale – 32200 GIMONT 
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
    // name: "Service Technique",
    transition: "fade_page",
    data() {
        return {};
    },
    created() { },
    mounted() { },
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
section#services-animations-ecole {
    /* padding-top: 200px; */
    position: relative;
    background-color: #AEA294;
}

#services-animations-ecole h1 {
    margin: 2rem 0;
}

#services-animations-ecole h2 {
    font-size: 1.5rem;
    text-transform: uppercase;
}

.img-texte {
    display: flex;
    grid-gap: 15px;
    gap: 25px;
    font-weight: bold;
    align-items: center;
}

.arianne {
    text-transform: uppercase;
    font-size: 0.8em;
    margin-left: 3vw;
    margin-bottom: 0;
}

#services-animations-ecole h1 {
    color: #827460;
}

.fond-de-page {
    height: 130vh;
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
    margin: 2rem 0;
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