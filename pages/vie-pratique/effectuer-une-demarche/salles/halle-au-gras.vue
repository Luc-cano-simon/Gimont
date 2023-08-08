<template>
    <section id="gras">
        <div class="fond-de-page">
            <div class="page-content">
                <FilArianne />
                <div class="contenu-page">
                    <div class="row display-flex">
                        <div class="col">
                            <h1>••• LA HALLE AU GRAS  </h1>
                            <p>
                            <ul>
                                <li>Capacité : 712 personnes  </li>
                                <li>Superficie : 2 135 m² 
                                    <ul> 
                                        <li>salle arrière (côté Banque Populaire) : 246 m² </li>
                                        <li>Salle avant (côté boulangerie/pharmacie) : 1 000 m² </li>
                                        <li>Aile Sud (côté boulevard du Nord) : 250 m²</li>
                                        <li>Aile Nord (côté halle à la volaille) : 268 m² </li>
                                        <li>Salle intérieure (salle climatisée) : 371 m² </li>
                                    </ul>
                                </li>
                                <li>Cuisine : Non (seulement un évier) </li>
                                <li>Accès PMR : oui </li>
                                <li>Accès WIFI :  non  </li>

                            </ul>
                            </p>
                            <br>
                            <p> La période estivale s’établit du 16 avril au 31 octobre et la période hivernale
                                s’établit du 1er novembre au 15 avril. </p>
                            <br>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Dénominations</th>
                                        <th scope="col">Tarif Hiver </th>
                                        <th scope="col">Tarif Été </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Associations / entreprises gimontoises  </th>
                                        <td>200€</td>
                                        <td>160€</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Associations/ entreprises extérieures </th>
                                        <td>200€</td>
                                        <td>160€</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>*Le tarif hiver ne comprend que la salle côté ouest </p>
                            <p>*Impossibilité de louer la salle en tant que particulier </p>
                        </div>
                        <div class="col pl-100 p-relative">
                            <div class="liens-utile ">
                                <h3 class="mt-3 mb-3"><u> Halle au gras en image </u></h3>
                                <div class="gallery">
                                    <a href="/img/pages/vie-pratique/demarche/salles/halle_au_gras.jpg" class="image-link">
                                        <img src="/img/pages/vie-pratique/demarche/salles/halle_au_gras.jpg"
                                            alt="Salle Halle au gras" />
                                    </a>

                                </div>
                            </div>
                            <h2 class="mt-3">Infos pratiques: </h2>
                            adresse : Halle au gras - Boulevard du nord - 32200 Gimont 
                            <br> 
                            <br> 
                            <iframe width="100%" height="300px" frameborder="0" allowfullscreen allow="geolocation" src="//umap.openstreetmap.fr/fr/map/halle-au-gras_943630?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true"></iframe><p><a href="//umap.openstreetmap.fr/fr/map/halle-au-gras_943630?scaleControl=false&miniMap=false&scrollWheelZoom=true&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false&captionMenus=true">Voir en plein écran</a></p>>

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
    name: "marches",
    transition: "fade_page",
    data() {
        return {};
    },
    created() { },
    mounted() {
        // Initialize popup as usual
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
b {
    color: #85735D;
}

section#gras {
    /* padding-top: 200px; */
    position: relative;
    background-color: #85735D;
}

#gras h1 {
    margin: 2rem 0;
    text-transform: uppercase;
    color: #85735D;
    display: flex;
    align-items: center;
    gap: 10px;
}

#gras h3 {
    color: #85735D;
}

.arianne {
    text-transform: uppercase;
    font-size: 0.8em;
    margin-left: 3vw;
    margin-bottom: 0;
}


.fond-de-page {
    height: 125vh;
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


.liens-utile {
    color: #137C89;
}

.liens-utile a {
    color: #137C89;
    transition: all .7s;
    text-decoration: none;
}

.infos-pratiques ul li {
    margin: 2rem 0;
}

.galerie-images {
    display: flex;
    gap: 20px;
    margin: 2rem 0;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.gallery img {
    width: 145px;
    height: 105px;
}

.table thead th {
    vertical-align: middle;
}

@media (max-width: 1600px) {
    .fond-de-page {
        height: 245vh;
    }

}

@media (max-width: 1350px) {
    #marches .col {
        flex-basis: 100%;
    }

    .page-content {
        position: initial;
        width: 100%;
    }

    .fond-de-page {
        height: auto;
    }

    .TheFooter {
        /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%) !important; */
        /* background-color: #85735d94; */
        background-color: rgb(203 190 175);
        /* padding: 11rem; */
        /* position: relative; */
    }

    .contenu-page {
        margin: 2rem 7.9vw;
    }
}

@media (max-width: 1200px) {
    .display-flex {
        display: flex;
        flex-direction: column;
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