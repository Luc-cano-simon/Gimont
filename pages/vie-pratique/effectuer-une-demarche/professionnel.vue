<template>
    <section id="pro">
        <FilArianne />
        <div class="contenu-page">
            <div id="sommaire" class="mb-3">
                <ul class="summary">
                    <li class="summary-item sommaire-white">
                        <p>SOMMAIRE</p>
                    </li>
                    <li class="summary-item">
                        <a href="#marches">Marchés publics </a>
                    </li>
                    <li class="summary-item">
                        <a href="#artisan">Commerçant Artisan </a>
                    </li>
                    <li class="summary-item">
                        <a href="#marcheVent">Marché de plein vent </a>
                    </li>
                    <li class="summary-item">
                        <a href="#Demande_de_salle">Demande de salle</a>
                    </li>
                </ul>
            </div>

            <div id="marches" class="box-sous-cat ancre">
                <h2>Marchés publics </h2>
                Retrouvez ci-dessous les marchés publics de la commune en cours.
            </div>
            <hr>
            <div id="artisan" class="box-sous-cat electorale">
                <h2>Commerçant Artisan</h2>
                <p>
                    Vous ne figurez pas sur le site des commerçants et artisans </p>
                <a href="https://www.vie-economique-gimont.fr/" target="_blank"
                    class="lien-no-animations">www.vie-economique-gimont.fr</a>
                <p>Inscrivez- vous en
                    remplissant le
                    formulaire sur le site concerné.  </p>
            </div>
            <hr>
            <div id="marcheVent" class="box-sous-cat electorale">
                <h2>Marché de plein vent</h2>
                <p>Vous souhaitez vous installer sur le marché de plein vent, veuillez transmettre votre demande par mail à
                    <a class="lien-no-animations" href="mailto:contact@gimont.fr">contact@gimont.fr</a>.
                </p>
                <br>
                <p> Vous souhaitez vous abonner, veuillez transmettre votre demande par mail à <a class="lien-no-animations"
                        href="mailto:contact@gimont.fr">contact@gimont.fr</a>. accompagnée
                    de la fiche individuelle et des documents obligatoires. </p>
                <br>
                <div class="docu-telechargement">
                    <p>
                        <button class="btn-pdf" type="button" data-toggle="collapse" data-target="#marcheventdoc"
                            aria-expanded="false" aria-controls="collapseExample">
                            Documents téléchargeables
                        </button>
                    </p>
                    <div class="collapse" id="marcheventdoc">
                        <div class="card card-body">
                            <a class="color-orange" href="/pdf/vie-pratique/demarches/ficheIndi.docx" download>
                                Fiche individuelle
                            </a>
                            <a class="color-orange"
                                href="/pdf/vie-pratique/demarches/2022-09-56 Nouvelle tarification des droits de places du marché de plein vent.pdf"
                                download>
                                Nouvelle tarification des droits de place du marché de plein vent
                            </a>
                            <a class="color-orange"
                                href="/pdf/vie-pratique/demarches/2022-09-56 Nouvelle tarification des droits de places du marché de plein vent.pdf"
                                download>
                                Règlement général du marché communal
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div id="Demande_de_salle" class="box-sous-cat electorale">
                <h2>Demande de salle </h2>
                <a class="lien-animations" href="/vie-pratique/effectuer-une-demarche/responsable-d-association#DemandeDeSubvention" title="Demande de salle">Demande de salle</a>
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

        // $(document).ready(function () {
        //     var navHeight = 300; // Récupérer la hauteur de la barre de navigation + du sommaire environ 280px

        //     $('a[href*="#"]').on('click', function (e) {
        //         e.preventDefault();
        //         var target = $(this.hash);
        //         $('html, body').animate({
        //             scrollTop: target.offset().top - navHeight // soustraire la hauteur de la navbar + sommaire
        //         }, 1000);
        //     });
        // });

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
section#pro {
    position: relative;
}


hr {
    border-top: 1px solid #707070;
}

.color-orange {
    color: #CC9A55;
    margin: 0.25rem 0;
}


#pro h1 {
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
}</style> 