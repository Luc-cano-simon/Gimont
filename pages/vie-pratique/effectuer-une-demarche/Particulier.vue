<template>
    <section id="particulier">
        <FilArianne />
        <div class="contenu-page">
            <!-- <div class="container"> -->
            <div class="d-flex align-items-center mb-3 flex-xs-column">
                <h1 class="mr-5">••• Démarche en ligne </h1>
                <p class="maj">Accès aux démarches en ligne de la mairie pour les particuliers :</p>
            </div>
            <div id="sommaire" class="mb-3">
                <ul class="summary">
                    <li class="summary-item sommaire-white">
                        <p>SOMMAIRE</p>
                    </li>
                    <li class="summary-item">
                        <a href="#etat_civil">ETAT CIVIL</a>
                    </li>
                    <li class="summary-item">
                        <a href="#identification_Authentification">IDENTITÉ</a>
                    </li>
                    <li class="summary-item">
                        <a href="#citoyennete">CITOYENNETÉ</a>
                    </li>
                    <li class="summary-item">
                        <a href="#liste_electorale">LISTE ÉLÉCTORALE</a>
                    </li>
                    <li class="summary-item">
                        <a href="#demenagement">DÉMÉNAGEMENT</a>
                    </li>
                    <li class="summary-item">
                        <a href="#stationnement">Stationnement Circulation</a>
                    </li>
                    <li class="summary-item">
                        <a href="#salle">Location de salle</a>
                    </li>
                </ul>
            </div>
            <hr>
            <div class="col-lg-12">
                <div class="box-sous-cat">
                    <div class="row align-flex mb-3">
                        <div class="col">
                            <div id="identification_Authentification" class="box-sous-cat-btn">
                                <h2> <i class="fa-solid fa-id-card"></i> Identité - Authentification :</h2>
                                <ul>
                                    <li>
                                        <a href="https://www.service-public.fr/particuliers/vosdroits/N358" class=""
                                            target="_blank">Carte d’identité
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.service-public.fr/particuliers/vosdroits/N360" class=""
                                            target="_blank">Passeport</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col ">
                            <a class="btn-rdv" href="/prendre-rendez-vous/rdv360" >
                                Prendre <br>
                                rendez <br>
                                Vous
                            </a>
                        </div>
                    </div>
                    <div class="docu-telechargement">
                        <p>
                            <button class="btn-pdf" type="button" data-toggle="collapse" data-target="#identite"
                                aria-expanded="false" aria-controls="collapseExample">
                                Documents à fournir
                            </button>
                        </p>
                        <div class="collapse" id="identite">
                            <div class="card card-body">
                                <a class="color-orange" href="/pdf/vie-pratique/demarches/CNI Majeur.pdf" download>
                                    Une carte nationale d’identité pour une personne majeure
                                </a>
                                <a class="color-orange" href="/pdf/vie-pratique/demarches/CNI Mineur.pdf" download>
                                    Une carte nationale d’identité pour une personne mineure
                                </a>
                                <a class="color-orange" href="/pdf/vie-pratique/demarches/PASSEPORT Majeur.pdf" download>
                                    Un passeport pour une personne majeure
                                </a>
                                <a class="color-orange" href="/pdf/vie-pratique/demarches/PASSEPORT Mineur.pdf" download>
                                    Un passeport pour une personne mineure
                                </a>
                                <a class="color-orange"
                                    href="/pdf/vie-pratique/demarches/Cerfa 1401102 - Déclaration de perte.pdf" download>
                                    Déclaration de perte
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div id="etat_civil" class="box-sous-cat">
                    <h2><i class="fa-solid fa-people-roof"></i> État civil :</h2>
                    <p>Documents à télécharger</p>

                    <div class="row">
                        <div class="col">
                            <div class="pdf-accordion mt-3">
                                <p>
                                    <button class="btn-pdf" type="button" data-toggle="collapse" data-target="#mariage"
                                        aria-expanded="false" aria-controls="collapseExample">
                                        Vous souhaitez vous marier ?
                                    </button>
                                </p>
                                <div class="collapse" id="mariage">
                                    <div class="card card-body">
                                        <a class="color-orange" href="/pdf/vie-pratique/demarches/DOSSIER MARIAGE.pdf"
                                            download> Dossier
                                            de Mariage </a>
                                    </div>
                                </div>
                            </div>
                            <!-- -------- -->
                            <div class="pdf-accordion mt-3">
                                <p>
                                    <button class="btn-pdf" type="button" data-toggle="collapse" data-target="#nom"
                                        aria-expanded="false" aria-controls="collapseExample">
                                        Vous souhaitez changer de nom ?
                                    </button>
                                </p>
                                <div class="collapse" id="nom">
                                    <div class="card card-body">
                                        <a class="color-orange" href="/pdf/vie-pratique/demarches/notice_52372.pdf"
                                            download> Notice de changement de nom de famille </a>
                                        <a class="color-orange"
                                            href="/pdf/vie-pratique/demarches/cerfa16229-01_de_demande_de_changment_de_nom_de_famille.pdf"
                                            download> Demande de changement de nom de famille </a>
                                        <a class="color-orange"
                                            href="https://www.service-public.fr/particuliers/vosdroits/N31778"
                                            target="_blank">Changement d'état civil</a>
                                    </div>
                                </div>
                            </div>
                            <!-- -------- -->
                            <div class="pdf-accordion mt-3">
                                <p>
                                    <button class="btn-pdf" type="button" data-toggle="collapse" data-target="#livret"
                                        aria-expanded="false" aria-controls="collapseExample">
                                        Demande concernant votre livret de famille
                                    </button>
                                </p>
                                <div class="collapse" id="livret">
                                    <div class="card card-body">
                                        <a class="color-orange"
                                            href="/pdf/vie-pratique/demarches/Livret de famille - Faisant suite à la naissance d'un enfant.pdf"
                                            download> Livret de famille - Faisant suite à la naissance d'un enfant </a>
                                        <a class="color-orange"
                                            href="/pdf/vie-pratique/demarches/Livret de famille - Faisant suite à un mariage.pdf"
                                            download> Livret de famille - Faisant suite à un mariage </a>
                                        <a class="color-orange"
                                            href="https://www.service-public.fr/particuliers/vosdroits/N31784"
                                            target="_blank">Livret de
                                            famille</a>
                                    </div>
                                </div>
                            </div>
                            <!-- -------- -->
                            <div class="pdf-accordion mt-3">
                                <p>
                                    <button class="btn-pdf" type="button" data-toggle="collapse" data-target="#actes"
                                        aria-expanded="false" aria-controls="collapseExample">
                                        Demande d’actes de naissance/mariage/décès
                                    </button>
                                </p>
                                <div class="collapse" id="actes">
                                    <div class="card card-body">
                                        <a class="color-orange"
                                            href="/pdf/vie-pratique/demarches/Demande actes en Mairie.docx" download>
                                            Demande d'actes en mairie</a>
                                        <a class="color-orange"
                                            href="https://www.service-public.fr/particuliers/vosdroits/N359"
                                            target="_blank">Actes d'état civil</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col">
                            <div class="pdf-accordion mt-3">
                                <p>
                                    <button class="btn-pdf" type="button" data-toggle="collapse" data-target="#pacs"
                                        aria-expanded="false" aria-controls="collapseExample">
                                        Vous souhaitez vous pacser ?
                                    </button>
                                </p>
                                <div class="collapse" id="pacs">
                                    <div class="card card-body">
                                        <a class="color-orange"
                                            href="/pdf/vie-pratique/demarches/Convention type PACS Cerfa_15726.pdf"
                                            download> Convention type pacs </a>
                                        <a class="color-orange"
                                            href="/pdf/vie-pratique/demarches/Notice PACS Cerfa 52176.02.pdf" download>
                                            Notice PACS Cerfa </a>
                                        <a class="color-orange"
                                            href="/pdf/vie-pratique/demarches/Déclaration conjointe de PACS cerfa_1572503.pdf"
                                            download>Déclaration conjointe de PACS </a>
                                    </div>
                                </div>
                            </div>
                            <!-- -------- -->
                            <div class="pdf-accordion mt-3">
                                <p>
                                    <button class="btn-pdf" type="button" data-toggle="collapse" data-target="#parrainage"
                                        aria-expanded="false" aria-controls="collapseExample">
                                        Vous souhaitez organiser un parrainage civil ?
                                    </button>
                                </p>
                                <div class="collapse" id="parrainage">
                                    <div class="card card-body">
                                        <a class="color-orange"
                                            href="/pdf/vie-pratique/demarches/Dossier Parrainage Civil.pdf" download>
                                            Dossier parrainage à remplir</a>
                                    </div>
                                </div>
                            </div>
                            <!-- -------- -->
                            <div class="pdf-accordion mt-3">
                                <p>
                                    <button class="btn-pdf" type="button" data-toggle="collapse" data-target="#domicile"
                                        aria-expanded="false" aria-controls="collapseExample">
                                        Attestation d’accueil ou une attestation de domicile
                                    </button>
                                </p>
                                <div class="collapse" id="domicile">
                                    <div class="card card-body">
                                        <a class="color-orange"
                                            href="/pdf/vie-pratique/demarches/Formulaire_Attestation_de_domicile.pdf"
                                            download> Formulaire Attestation de domicile</a>
                                        <a class="color-orange"
                                            href="/pdf/vie-pratique/demarches/Pièces à joindre à la demande d'Attestation d'Accueil.pdf"
                                            download> Pièces à joindre à la demande d'attestation d'accueil</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="box-sous-cat">

                    <div class="docu-telechargement">
                        <p>
                            <button class="btn-pdf" type="button" data-toggle="collapse" data-target="#identite"
                                aria-expanded="false" aria-controls="collapseExample">
                                Documents à fournir
                            </button>
                        </p>
                        <div class="collapse" id="identite">
                            <div class="card card-body">
                                <a class="color-orange" href="/pdf/vie-pratique/demarches/CNI Majeur.pdf" download>
                                    Une carte nationale d’identité pour une personne majeure
                                </a>
                                <a class="color-orange" href="/pdf/vie-pratique/demarches/CNI Mineur.pdf" download>
                                    Une carte nationale d’identité pour une personne mineure
                                </a>
                                <a class="color-orange" href="/pdf/vie-pratique/demarches/PASSEPORT Majeur.pdf" download>
                                    Un passeport pour une personne majeure
                                </a>
                                <a class="color-orange" href="/pdf/vie-pratique/demarches/PASSEPORT Mineur.pdf" download>
                                    Un passeport pour une personne mineure
                                </a>
                                <a class="color-orange"
                                    href="/pdf/vie-pratique/demarches/Cerfa 1401102 - Déclaration de perte.pdf" download>
                                    Déclaration de perte
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div id="citoyennete" class="box-sous-cat">
                <h2> <i class="fa-solid fa-people-group"></i> Citoyenneté :</h2>
                <p>Elections :</p>
                <p>Pour participer aux élections politiques, il faut être inscrit sur les listes électorales. L'inscription
                    est automatique pour les jeunes de 18 ans (sous certaines conditions) et pour les personnes obtenant la
                    nationalité française après 2018. Si vous vous trouvez dans une autre situation (déménagement,
                    recouvrement de l'exercice du droit de vote, citoyen européen résidant en France...), vous devez faire
                    la démarche de vous inscrire. </p>
                <ul>
                    <li>
                        <a href=" https://www.service-public.fr/particuliers/vosdroits/N47" class=""
                            target="_blanck">Elections 
                        </a>
                    </li>
                    <!-- <li>
                                <a href=" https://www.service-public.fr/particuliers/vosdroits/N24" class="">Recensement
                                    citoyen, JDC et Service national </a>
                            </li> -->
                </ul>
                <p>
                    <button class="btn-pdf" type="button" data-toggle="collapse" data-target="#election"
                        aria-expanded="false" aria-controls="collapseExample">
                        Documents à télécharger
                    </button>
                </p>
                <div class="collapse" id="election">
                    <div class="card card-body">
                        <a class="color-orange"
                            href="/pdf/vie-pratique/demarches/cerfa_12669-02 - Demande inscription listes électorales.pdf"
                            download>
                            Demande inscription listes électorales
                        </a>
                        <a class="color-orange" href="/pdf/vie-pratique/demarches/cerfa_14952-03 - Vote par procuration.pdf"
                            download>
                            Vote par procuration 
                        </a>
                    </div>
                </div>
                <br>
                <p>Recensement citoyen, JDC et Service national :</p>
                <p>Chaque Français dès 16 ans doit faire le recensement citoyen obligatoire pour ensuite participer à
                    la journée défense et citoyenneté (JDC). S'il ne fait pas ces démarches, il ne peut notamment pas
                    s'inscrire aux examens et concours de l'État (permis de conduire, baccalauréat...) avant 25 ans. Le
                    Français qui a fait son service militaire peut le prouver à l'aide d'une attestation des services
                    accomplis ou, en cas d'exemption, d'un certificat de position militaire. </p>
                <ul>
                    <!-- <li>
                                <a href=" https://www.service-public.fr/particuliers/vosdroits/N47" class=""
                                    target="_blanck">Elections 
                                </a>
                            </li> -->
                    <li>
                        <a href=" https://www.service-public.fr/particuliers/vosdroits/N24" class="">Recensement
                            citoyen, JDC et Service national </a>
                    </li>
                </ul>
                <p>
                    <button class="btn-pdf" type="button" data-toggle="collapse" data-target="#militaire"
                        aria-expanded="false" aria-controls="collapseExample">
                        Documents à télécharger
                    </button>
                </p>
                <div class="collapse" id="militaire">
                    <div class="card card-body">
                        <a class="color-orange"
                            href="/pdf/vie-pratique/demarches/inscription_recensement_militaire_cerfa_10870-11_2_.pdf"
                            download>
                            Demande inscription recensement militaire
                        </a>
                    </div>
                </div>
            </div>

            <hr>

            <div id="liste_electorale" class="box-sous-cat electorale">
                <h2> <i class="fa-light fa-handshake"></i> Liste électorale :</h2>
                <p> <b>Demande d'inscription en ligne sur les listes électorales</b> <br>
                    Pour voter, vous devez être inscrit sur la liste électorale. Si vous vivez en France, vous
                    devez
                    vous inscrire sur la liste électorale d'une mairie. Si vous vivez à l'étranger, vous pouvez
                    vous
                    inscrire soit sur une liste électorale consulaire, soit sur la liste électorale d'une
                    mairie.
                </p>
                <br>

                <p> <b>Vérifier votre inscription électorale et votre bureau de vote </b> </p>

                <br>
                <p>Ce service vous permet de :</p>
                <ul>
                    <li>savoir sur quelle liste électorale vous êtes inscrit(e) </li>
                    <li>connaître l'adresse de votre bureau de vote </li>
                    <li>connaître votre numéro national d'électeur </li>
                    <li>savoir si vous avez des procurations en cours </li>
                    <li>télécharger votre attestation d’inscription sur les listes électorales </li>
                </ul>
                <a class="color-orange" href="https://www.service-public.fr/particuliers/vosdroits/R51788"
                    target="_blanck">Vérifier votre inscription électorale et votre bureau de vote (Démarche en
                    ligne)
                </a>
                <br>
                <h2 class="mt-4">Demande de correction d'état civil auprès de l'Insee :</h2>
                <p>Le <b>répertoire national d'identification des personnes physiques (RNIPP)</b>  regroupe les
                    informations suivantes : </p>
                <ul>
                    <li>Éléments d'état civil des personnes nées en France </li>
                    <li>Numéro d'inscription (Nir) correspondant au numéro de sécurité sociale </li>
                </ul>
                <p>
                    Ces informations sont utilisées pour certaines démarches : impôts, carte vitale,
                    recensement,
                    élections...
                    <br>
                    <br>
                    Si vous constatez une erreur concernant votre identité, vous pouvez demander une
                    rectification à
                    l'Insee.
                    <br>
                    <br>
                    Par exemple, une erreur dans votre nom de famille, vos prénoms, votre sexe, votre date ou
                    votre lieu
                    de naissance.
                    <br>
                    Les corrections demandées doivent être conformes aux informations contenues sur l'acte de
                    naissance.
                    <b>Préparez les éléments suivants</b> pour faire la <b>demande en ligne de
                        rectification </b>
                <ul>
                    <li>Copie intégrale <b>récente </b> de l'acte de naissance de la personne concernée par la
                        demande
                        de rectification </li>
                    <li>Numéro d'identification du répertoire (numéro de sécurité sociale) si la demande
                        concerne une
                        personne majeure </li>
                </ul>
                <b>Attention</b>

                Le service en ligne concerne la rectification des informations d'une <b>personne née en France
                    métropolitaine</b> , dans un département <i>d'outre-mer (Dom): Guadeloupe - Guyane -
                    Martinique -
                    Mayotte - La
                    Réunion ou dans certaines collectivités d'outre-mer: Polynésie Française, Saint-Barthélémy,
                    Saint-Martin, Saint-Pierre-et-Miquelon et Wallis et Futuna.</i>
                <br>
                <br>
                Si vous êtes né à l'étranger ou en
                Nouvelle-Calédonie, contactez un organisme de sécurité sociale : Cnav d'assurance vieillesse,
                mutuelle.... <br>
                En cas d'erreur d'état civil sur votre carte électorale, vous
                pouvez contacter votre commune d'inscription.


                </p>
                <br>
                <a class="color-orange" href="https://www.service-public.fr/particuliers/vosdroits/R49454"
                    target="_blanck">Demande de correction d'état civil
                </a>
            </div>
            <hr>
            <div id="demenagement" class="box-sous-cat-btn">
                <h2> <i class="fa-light fa-truck-ramp-box"></i> Déménagement :</h2>
                <p>Formulaire pour demande d’autorisation d’occupation du Domaine public
                    dans le cadre d’un déménagement ou d’un emménagement
                </p>
                <br>
                <p>
                    <button class="btn-pdf" type="button" data-toggle="collapse" data-target="#demenagements"
                        aria-expanded="false" aria-controls="collapseExample">
                        Documents à télécharger
                    </button>
                </p>
                <div class="collapse" id="demenagements">
                    <div class="card card-body">
                        <a class="color-orange" href="/pdf/vie-pratique/demarches/Formulaire déménagement.pdf" download>
                            Formulaire de déménagement
                        </a>
                    </div>
                </div>
                <br>
                <p>Envoyez ensuite votre formulaire à l'adresse <a href="mailto:contact@gimont.fr">contact@gimont.fr</a>
                </p>
            </div>
            <hr>
            <div id="stationnement" class="box-sous-cat-btn" d>
                <h2><i class="fa-regular fa-circle-xmark"></i> Stationnement Circulation :</h2>
                <div class="box-pdf">
                    <div class="pdf-travaux">
                        <p> Demande de permission ou d’autorisation de voirie, de permis de stationnement, ou d’autorisation
                            d’entreprendre des travaux
                        <p>
                            <a class="color-orange" href="/pdf/cerfa_14023-01_demande autorisation voirie.pdf"
                                download>Télécharger le pdf </a> et envoyez le à <a class="mailto"
                                href="mailto:administration@gimont.fr">contact@gimont.fr</a>
                        </p>

                        </p>
                    </div>
                    <br>
                    <div class="pdf-circulation">
                        <p>Demande d’arrêté de police de la circulation </p>
                        <p>
                            <a class="color-orange" href="/pdf/cerfa_14024-01_demande reglementation circulation.pdf"
                                download>Télécharger le pdf </a> et envoyez le à <a class="mailto"
                                href="mailto:administration@gimont.fr">contact@gimont.fr</a>
                        </p>
                    </div>
                </div>
            </div>
            <hr>
            <div id="salle" class="box-sous-cat-btn">
                <h2> Location de salle :</h2>
                <br>
                <p>
                    <button class="btn-pdf" type="button" data-toggle="collapse" data-target="#locationSalle"
                        aria-expanded="false" aria-controls="collapseExample">
                        Documents à télécharger
                    </button>
                </p>
                <div class="collapse" id="locationSalle">
                    <div class="card card-body">
                        <a class="color-orange" href="/pdf/vie-pratique/demarches/Demande_location_salle.docx " download>
                            Demande location salle pour un particulier
                        </a>
                        <a class="color-orange" href="/pdf/vie-pratique/demarches/nouvelle_tarification.pdf " download>
                            Nouvelle tarification pour la location des salles communales
                        </a>
                    </div>
                </div>
                <br>
                <a class="lien-animations"
                    href="/vie-pratique/effectuer-une-demarche/responsable-d-association#DemandeDeSalle"
                    target="_blank">Voir les salles disponibles</a>
                <br>
                <!-- <p>Envoyez ensuite votre formulaire à l'adresse <a href="mailto:contact@gimont.fr">contact@gimont.fr</a> </p> -->
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
                // Vérifier si le lien ne contient pas le texte "Voir les salles disponibles"
                if (!$(this).text().includes('Voir les salles disponibles')) {
                    e.preventDefault();
                    var target = $(this.hash);
                    $('html, body').animate({
                        scrollTop: target.offset().top - navHeight // soustraire la hauteur de la navbar + sommaire
                    }, 1000);
                }
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
section#particulier {
    /* padding-top: 200px; */
    position: relative;
    /* background-color: #f6f6f6; */
    /* z-index: 999; */
}

/* #etat_civil::before,
#identification_Authentification::before,
#citoyennete::before,
#demenagement::before,
#disfonctionnement::before,
#liste_electorale::before,
#urbanisme::before {
    display: block;
    content: "";
    height: 15vh;
    margin: -15vh 0 0;
} */

/* .arianne {
    margin-bottom: 3vw;
    top: 100px;
    left: 60px;
    margin-left: 4rem;
} */


hr {
    border-top: 1px solid #707070;
}

.ancre {
    height: 45px;
}


.color-orange {
    color: #CC9A55;
    margin: 0.25rem 0;
}

.mx-50 {
    max-width: 50%;
}

#particulier h1 {
    color: var(--text-col);
    /* text-transform:initial; */
    text-transform: uppercase;
}

#gauche {
    padding-left: 0;
}

.contenu-page {
    margin: 3rem 13vw;
    position: relative;

}

.marianne {
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    height: 100%;
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

/* .arianne {
    margin-left: 7vw;
    margin-top: 3vw;
    margin-bottom: 3vw;
} */

.mailto {
    color: #CC9A55;
}

.pdf-travaux,
.pdf-circulation {
    position: relative;
}

.pdf-travaux .btn-pdf {
    position: absolute;
    right: 15%;
    top: -90%;
}

.pdf-circulation .btn-pdf {
    position: absolute;
    right: 15%;
    bottom: -120%;
}

.electorale hr {
    border-top: 1px solid #CC9A55;
    width: 60%;
    margin-top: 3rem;
    margin-bottom: 3rem;
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

/* .summary-item:hover {
    background-color:#d7aa7a6b;
} */
/* .summary-item:hover a {
    
} */

/* Style des liens du sommaire */
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



@media (max-width: 1750px) {
    .pdf-circulation .btn-pdf {
        position: absolute;
        right: 15%;
        bottom: -140%;
    }

    .pdf-travaux .btn-pdf {
        position: absolute;
        right: 15%;
        top: -130%;
    }
}

@media (max-width: 1550px) {

    .pdf-circulation .btn-pdf {
        position: absolute;
        right: 15%;
        bottom: -170%;
    }

    .pdf-travaux .btn-pdf {
        position: absolute;
        right: 15%;
        top: -160%;
    }
}

@media (max-width: 1000px) {
    .mx-50 {
        max-width: 100%;
    }

    .pdf-travaux .btn-pdf,
    .btn-circulation .btn-pdf {
        position: initial;
    }
}

@media (max-width: 768px) {
    .mx-50 {
        max-width: 100%;
    }

    .pdf-travaux .btn-pdf,
    .btn-circulation .btn-pdf {
        position: initial;
    }

    /* #sommaire {
        display: none !important;
    } */
}

@media (max-width: 1200px) {
    .summary {
        flex-wrap: wrap;
    }

    .summary-item {
        width: auto;
    }
}


@media (max-width: 992px) {
    .flex-xs-column {
        flex-direction: column;
    }
}

@media (max-width: 768px) {

    .summary {
        display: none;
    }
}</style> 