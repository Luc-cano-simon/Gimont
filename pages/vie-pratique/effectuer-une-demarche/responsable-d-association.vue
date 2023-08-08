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
                        <a href="#DemandeDeSubvention">Demande de subvention </a>
                    </li>
                    <li class="summary-item">
                        <a href="#DemandeDeSalle">Demande de salle </a>
                    </li>

                </ul>
            </div>

            <div id="DemandeDeSubvention" class="box-sous-cat ancre">
                <h2>Demande de subvention </h2>
                Retournez votre dossier de demande de subventions accompagné des pièces justificatives auprès de la mairie
                avant le 31 janvier de chaque année. <br>

                Les dossiers sont étudiés fin du 1er trimestre de chaque année.  <br>

                Les attributions de subventions sont ensuite votées au conseil municipal.  
                <br>
                <br>

                <div class="docu-telechargement">
                    <p>
                        <button class="btn-pdf" type="button" data-toggle="collapse" data-target="#Subvention"
                            aria-expanded="false" aria-controls="collapseExample">
                            Document téléchargeable
                        </button>
                    </p>
                    <div class="collapse" id="Subvention">
                        <div class="card card-body">
                            <a class="color-orange" href="/pdf/vie-pratique/demarches/subventionAssociations2023.pdf"
                                title="Demande de subvention 2023" download>
                                Demande de subvention 2023
                            </a>
                        </div>
                    </div>
                </div>
                
                <br>
                <div class="docu-telechargement">
                    <p>
                        <button class="btn-pdf" type="button" data-toggle="collapse" data-target="#charte"
                            aria-expanded="false" aria-controls="collapseExample">
                            Charte des associations à télécharger 
                        </button>
                    </p>
                    <div class="collapse" id="charte">
                        <div class="card card-body">
                            <a class="color-orange" href="/pdf/vie-pratique/demarches/Charte de la vie Associative - VDéfinitive.pdf"
                                title="Demande de subvention 2023" download>
                                Charte de la vie associative
                            </a>
                        </div>
                    </div>
                </div>
                <br>
                <p> * Lors du dépôt du dossier, pensez à joindre votre assurance et le compte rendu de l’assemblée
                    générale   </p>
            </div>
            <hr>

            <div id="DemandeDeSalle" class="box-sous-cat electorale">
                <h2>Demande de salle</h2>
                <p>Vous souhaitez louer une salle ? veuillez transmettre votre demande par mail à
                    <a class="lien-no-animations" href="mailto:contact@gimont.fr">contact@gimont.fr</a>.
                </p>
                <br>
                <div class="docu-telechargement">
                    <p>
                        <button class="btn-pdf" type="button" data-toggle="collapse" data-target="#Salle"
                            aria-expanded="false" aria-controls="collapseExample">
                            Documents téléchargeables
                        </button>
                    </p>
                    <div class="collapse" id="Salle">
                        <div class="card card-body">
                            <a class="color-orange" href="/pdf/vie-pratique/demarches/Demande_location_salle.docx" download>
                                Formulaire location de Salle
                            </a>
                            <a class="color-orange" href="/pdf/vie-pratique/demarches/Prêt_salle_matériel.docx" download>
                                Formulaire prêt de matériel
                            </a>
                            <a class="color-orange" href="/pdf/vie-pratique/demarches/Débit_boissons.docx" download>
                                Formulaire pour autoriser une buvette
                            </a>
                        </div>
                    </div>
                </div>
                <br>
                <hr>
                <h2>Liste des salles disponibles</h2>
                <br>
                <div class="row ">
                    <div class="col-sm">
                       <a style="font-size:16px;" class="lien-animations" href="/vie-pratique/effectuer-une-demarche/salles/salle-culturelle-joseph-et-gabrielle-dubarry">Salle culturelle Joseph et Gabrielle Dubarry</a> 
                       <br>
                       <a  class="lien-animations " href="/vie-pratique/effectuer-une-demarche/salles/abri-du-pelerin">L'abri du pélerin </a>
                    </div>
                    <div class="col-sm text-center">
                        <a class="lien-animations " href="/vie-pratique/effectuer-une-demarche/salles/halle-au-gras">La halle au gras </a>
                    </div>
                    <div class="col-sm">
                        <a class="lien-animations" href="/vie-pratique/effectuer-une-demarche/salles/salle-du-parking-de-la-mairie"> Salle du parking de la mairie  </a>
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
}
</style> 