<template>
    <section id="transport">
        <FilArianne />
        <div class="contenu-page">
            <div id="sommaire" class="mb-3">
                <ul class="summary">
                    <li class="summary-item sommaire-white">
                        <p>SOMMAIRE</p>
                    </li>
                    <li class="summary-item">
                        <a href="#parking">Zone bleue et parkings </a>
                    </li>
                    <li class="summary-item">
                        <a href="#transportEnCommun">Transports en commun </a>
                    </li>
                    <li class="summary-item">
                        <a href="#DomainePublic">Occupation du domaine public </a>
                    </li>
                </ul>
            </div>

            <div id="parking" class="box-sous-cat ancre">
                <h2>Zone bleue et parkings </h2>
                <p> Présentation des parkings à votre disposition ainsi que des zones bleues </p>
                <div class="gallery">
                    <a href="/img/pages//vie-pratique/se-deplacer/carte-stationnement.jpg" class="image-link">
                        <img src="/img/pages//vie-pratique/se-deplacer/carte-stationnement.jpg" alt="Carte de stationnement" />
                    </a>
                </div>
                <br>
                <div class="docu-telechargement">
                    <p>
                        <button class="btn-pdf" type="button" data-toggle="collapse"
                            data-target="#Deplacement-Stationnement" aria-expanded="false" aria-controls="collapseExample">
                            Documents téléchargeables
                        </button>
                    </p>
                    <div class="collapse" id="Deplacement-Stationnement">
                        <div class="card card-body">
                            <a class="color-orange" href="/pdf/vie-pratique/deplacement-stationnement/Disque_bleu_V6.pdf"
                                download>
                                Disque bleu
                            </a>
                            <a class="color-orange" href="/pdf/vie-pratique/deplacement-stationnement/Zone_bleue.pdf" download>
                                Zone bleue
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div id="transportEnCommun" class="box-sous-cat electorale">
                <h2>Transports en commun</h2>
                <p>Le réseau de transport intercité est une compétence Régionale comme le transport des écoliers</p>
                <br>
                <div class="scolaire">
                    <h3>Transport Scolaire</h3>
                    <p>Les transports scolaires sont gérés par la Région.  Site internet : <br> <a class="lien-animations"
                            href="https://lio.laregion.fr/" target="_blank">Transport de la région</a> </p>
                    <br>
                    <p>
                        Les agents des services de transports vous accueillent au sein de la Maison de Région de Auch. Vous
                        pouvez les contacter par téléphone pour toute question relative à l’inscription aux transports
                        scolaires, aux horaires, aux tarifs, etc.
                    </p>
                    <br>
                    <p><b>Maison de la Région</b></p>
                    <p><b> Service régional des Mobilités du Gers</b></p>
                    <p><b>Place Jean David</b></p>
                    <p><b>32004 Auch</b></p>
                    <p><b> <a class="lien-animations" href="tel:0806800350">0806 800 350 </a> </b> (service gratuit + coût
                        d’un appel local)</p>
                    <br>
                    <p>
                        Horaires d’ouvertures du service de transports : <br>
                        Du lundi au vendredi de 9h à 12h et de 14h à 17h
                    </p>
                    <br>
                    <ul>
                        <li>Bus et trains : <a class="lien-animations"
                                href="https://www.ter.sncf.com/occitanie/se-deplacer/gares/gimont-cahuzac-87611772"
                                target="_blank">https://www.ter.sncf.com/occitanie/se-deplacer/gares/gimont-cahuzac-87611772
                            </a> </li>
                    </ul>
                </div>
            </div>
            <hr>
            <div id="DomainePublic" class="box-sous-cat electorale">
                <h2>Occupation du domaine public </h2>
                <p>
                    Démarches à réaliser en cas de stationnement exceptionnels (déménagement, travaux, ouvrage…)
                </p>
                <br>
                <ul>
                    <li>
                        <a class="lien-animations"
                            href="https://entreprendre.service-public.fr/vosdroits/F23509" target="_blank">Stationnement sur voirie en raison de travaux  
                        </a>
                    </li>
                    <li>
                        <a class="lien-animations"
                            href="/vie-pratique/effectuer-une-demarche/Particulier" target="_blank">Stationnement sur voirie en
                            raison d’un déménagement </a>
                        </li>
                    <li>Occupation du domaine public pour l’exercice d’une activité commerciale</li>
                </ul>
            </div>
            <hr>
            <div>
                <p>
                    Vous êtes commerçant et vous souhaitez occuper une partie de l'espace public (trottoir, places) pour
                    votre activité ? Vous devez en demander l'autorisation à votre mairie via l’adresse <a
                        class="lien-animations" href="mailto: contact@gimont.fr"> contact@gimont.fr</a>
                </p>
                <br>
                <div class="docu-telechargement">
                    <p>
                        <button class="btn-pdf" type="button" data-toggle="collapse"
                            data-target="#Deplacement-Stationnement" aria-expanded="false" aria-controls="collapseExample">
                            Document téléchargeable
                        </button>
                    </p>
                    <div class="collapse" id="Deplacement-Stationnement">
                        <div class="card card-body">
                            <a class="color-orange"
                                href="/pdf/vie-pratique/deplacement-stationnement/modif_tarifs_redevence_titre_domaine_public.pdf"
                                download>
                                Modification de la tarification de la redevance au titre de l'occupation du domaine public
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import FilArianne from '~/components/FilArianne.vue';
// import modalRdv from '~/components/modalRdv.vue';

export default {
    name: "particulier",
    transition: "fade_page",
    data() {
        return {};
    },
    created() { },
    mounted() {

        $(document).ready(function () {
            var navHeight = 350; // Récupérer la hauteur de la barre de navigation + du sommaire environ 280px

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
    methods: {
        gotoSection(value) {
            const element = document.getElementById(value);
            element.scrollIntoView({ behavior: 'smooth' });
        }
    },
    head() {
        return this.$seo({});
    },
    components: { FilArianne },
};
</script>

<style scoped>
section#transport {
    position: relative;
}


hr {
    border-top: 1px solid #707070;
}

.color-orange {
    color: #CC9A55;
    margin: 0.25rem 0;
}


#transport h1 {
    color: var(--text-col);
    /* text-transform:initial; */
    text-transform: uppercase;
}



.contenu-page {
    margin: 3rem 13vw;
    position: relative;

}


.sommaire {
    background-color: #C5BEB7;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    padding: 8px;
}

.sommaire>a {
    margin: 6px;
    transition: all 0.7s;
}

.sommaire>a:hover {
    text-decoration: none;
    color: white;
    transform: scale(1.1);
}

.sommaire>p {
    color: White;
}


/* ------------------BOX SOUS CAT ---------------------- */

.box-sous-cat,
.box-sous-cat-btn {
    margin-top: 2rem;
    margin-bottom: 2rem;
    position: relative;
}

.box-sous-cat h2,
.box-sous-cat-btn h2 {
    text-decoration: none;
}

.box-sous-cat ul a,
.box-sous-cat-btn ul a {
    transition: all 0.7s;
    text-decoration: none;
    color: #CC9A55;
}

.box-sous-cat ul a:hover,
.box-sous-cat-btn ul a:hover {
    padding-left: 10px;
    /* color: #CC9A55; */
}

.summary {
    display: flex;
    /* flex-wrap: wrap; */
    margin: 0;
    padding: 0;
    /* margin: 0rem 7.9vw; */
    text-align: center;
}

/* Style des éléments du sommaire */
.summary-item {
    background-color: #85735D;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    /* display: block; */
    margin-bottom: 10px;
    padding: 10px;
    /* width: 20%; */
    flex: 1;
    transition: all 0.7s;
}


.summary-item a {
    color: #000;
    text-decoration: none;
    transition: ease 0.7s;
    font-size: 16px;
}

.summary-item:hover a {
    color: white;
}

.sommaire-white {
    color: white;
}

.summary.scrolled {
    position: fixed;
    top: 155px;
    left: 0;
    right: 0;
    margin: 0rem 13vw;
    height: 80px;
    z-index: 1;
}

.btn-pdf {
    padding: 10px;
    border: 1px solid #85735D;
    background-color: #85735D;
    color: white;
    transition: all 1s;
    width: 100%;
}


@media (max-width: 1200px) {
    .summary {
        flex-wrap: wrap;
    }

    .summary-item {
        width: auto;
    }
}

@media (max-width: 768px) {
    .summary {
        display: none;
    }
}
</style> 