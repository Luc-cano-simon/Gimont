<template>
    <section id="cinema">
        <div class="fond-de-page">
            <div class="page-content">
                <FilArianne />
                <div class="contenu-page">
                    <div class="row display-flex">
                        <div class="col">
                            <h1>••• CINEMA 3 CAG </h1>
                            <h2 class="mt-3 mb-3">Infos pratiques: </h2>
                            <p>
                                Séance Le
                            <ul>
                                <li>Mardi à 21H </li>
                                <li>Le Vendredi à 21H </li>
                                <li>Le Samedi à 18H30 / 21 H </li>
                            </ul>
                            </p>
                            <br>
                            <p>
                                Ciné Débat sur les thèmes en lien avec l’environnement et la transition écologique : Tous
                                les 2ème Jeudi du mois de manière bimestrielle
                                <br>

                                Prix unique pour ces séances de <span class="couleur-page">4 Euros</span>
                            </p>
                            <br>
                            <p>
                                Les tarifs :
                            <ul>
                                <li>Plein : 6 Euros </li>
                                <li>Réduit : 5 Euros (Pour les moins de 18 ans, demandeurs d’emplois, étudiants, Pass
                                    Culturel) </li>
                                <li>Moins de 14 ans : 4 Euros</li>
                            </ul>
                            </p>
                            <br>
                            <p>
                                Pour découvrir le programme des films :
                            <ul>
                                <li>
                                    <a href="https://www.3cag.fr/cinema-3cag.html" title="Cinéma 3cag Gimont"
                                        target="_blank">Site 3CAG</a>
                                </li>
                                <li>
                                    <a href="https://www.cine32gers.com/gimont/" title="Ciné 32" target="_blank">Site Ciné
                                        32</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/cinema3CAG  " title="Facebook de Ciné 32" target="_blank">
                                        Facebook
                                    </a>
                                </li>
                            </ul>
                            </p>
                            <p class="d-flex align-items-center">
                                <i style="font-size:25px;" class="fa-solid fa-wheelchair"></i> <span>La salle est accessible aux personnes à mobilité réduite.</span>
                            </p>
                        </div>
                        <div class="col pl-100 p-relative">
                            <div class="gallery">
                                <a href="/img/pages/loisirs/culture/Le cinema.jpg" class="image-link">
                                    <img src="/img/pages/loisirs/culture/Le cinema.jpg" alt="Cinema" />
                                </a>
                            </div>
                            <h2 class="mt-3 mb-3">Les contacter: </h2>
                            <a href="tel:0562679355" title="Appelez-nous" >Par téléphone</a> <br>
                            <a href="mail:cinema@3cag.fr" title="Écrivez-nous" >Par E-mail</a>
                            <h2 class="mt-3 mb-3">Les Trouver: </h2>
                            
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.0376986508377!2d0.8787043999999999!3d43.62657430000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a968705a4d6795%3A0x19793d44f495c896!2s53%20Bd%20du%20N%2C%2032200%20Gimont!5e0!3m2!1sfr!2sfr!4v1676905355665!5m2!1sfr!2sfr" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                            <p class="adresse">
                                53  Bd du Nord 32200  Gimont  
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
    name: "Le cinéma",
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
section#cinema {
    /* padding-top: 200px; */
    position: relative;
    background-color: #F5CB38;
}

#cinema h1 {
    margin: 2rem 0;
    color: #F5CB38;
}

#cinema h2 {
    font-size: 1.5rem;
}

.img-texte {
    display: flex;
    grid-gap: 15px;
    gap: 25px;
    font-weight: bold;
    align-items: center;
}

.couleur-page {
    color: #F5CB38;
    font-weight: 600;
}

.lien,
a {
    color: #F5CB38;
    transition: all 0.7s;
}

.lien:hover,
a:hover {
    padding-left: 2%;
    text-decoration: none;
}

.arianne {
    text-transform: uppercase;
    font-size: 0.8em;
    margin-left: 3vw;
    margin-bottom: 0;
}


.fond-de-page {
    height: 150vh;
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
}
</style>