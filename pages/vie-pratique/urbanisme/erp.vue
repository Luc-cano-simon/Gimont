<template>
    <section id="erp">
        <div class="fond-de-page">
            <div class="page-content">
                <FilArianne />
                <div class="contenu-page">
                    <h1>••• ERP</h1>
                    <h2> - Qu'est-ce qu'un ERP ?</h2>
                    <p>
                        Les établissements recevant du public (ERP) sont des bâtiments, locaux et enceintes dans lesquels
                        des personnes extérieures sont admises. Par exemple, une école, un commerce, un parc
                        d'attraction sont des ERP. 
                        L'accès est payant ou gratuit, libre, restreint ou sur invitation.
                    </p>
                    <br>
                    <p>
                        <b> À noter : </b> Une entreprise non ouverte au public, mais seulement au personnel, n'est pas
                        un ERP.

                        Pour l'application du règlement de sécurité incendie, les ERP sont classés par catégorie et par
                        type.

                        Le classement proposé par le maître d'ouvrage : Personne publique ou privée pour le compte de
                        laquelle des travaux ou un ouvrage immobilier sont réalisés est validé par la commission
                        départementale de sécurité.

                        Les ERP sont classés en 5 catégories en fonction de leur capacité d'accueil. Les salariés sont
                        comptés avec le public admis dans l'établissement sauf pour la 5e catégorie. <br>
                    <div class="mt-3">
                        <a class="color-orange " href="https://entreprendre.service-public.fr/vosdroits/F32351"
                            target="_blanck">https://entreprendre.service-public.fr/vosdroits/F32351</a>
                    </div>
                    </p>
                    <h2> - Procédures d'autorisation de travaux </h2>
                    <h3>Établissement recevant du public (ERP) : procédures d'autorisation de travaux </h3>
                    <p>La création, l'aménagement ou la modification d'un établissement recevant du public (ERP) sont
                        soumis à autorisation.
                        L'autorisation ne peut être délivrée que si les travaux projetés sont conformes aux règles
                        d'accessibilité et de sécurité incendie.
                        Nous vous présentons les différentes procédures à suivre selon la nature du projet :
                    </p>

                    <a class="color-orange " href="https://entreprendre.service-public.fr/vosdroits/F31687"
                        target="_blanck">
                        https://entreprendre.service-public.fr/vosdroits/F31687
                    </a>

                    <br>
                    <br>
                    <a class="color-orange" href="/pdf/urbanisme/erp/Notice Accessibilité.pdf" download>
                        Notice Accessibilité
                    </a>
                    <br>
                    <a class="color-orange" href="/pdf/urbanisme/erp/Notice Sécurité.pdf" download>
                        Notice Sécurité
                    </a>
                    <br>
                    <br>
                    <p>Si vous ouvrez un ERP sans autorisation de travaux, vous devez compléter le formulaire
                        téléchargeable : </p>
                    <a class="color-orange" href="/pdf/urbanisme/erp/Déclaration d'ouverture.pdf" download>
                        Déclaration d’ouverture 
                    </a>
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
section#erp {
    /* padding-top: 200px; */
    position: relative;
    background-color: #AEA294;
}

.color-orange {
    color: #CC9A55;
}

#erp h1 {
    color: #827460;
    margin: 2rem 0;
}

#erp h2 {
    font-size: 2rem;
    margin: 2rem 0;
}

#erp h3 {
    margin: 2rem 0;
    font-size: 1.5rem;
}

.arianne {
    text-transform: uppercase;
    font-size: 0.8em;
    margin-left: 3vw;
    margin-bottom: 0;
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

}

@media (max-width: 600px) {}
</style>