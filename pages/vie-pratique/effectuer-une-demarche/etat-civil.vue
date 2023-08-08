<template>
    <section id="demarche">
        <!-- <img class="marianne" src="/img/pages/vie-pratique/demarche/marianne.png" alt=""> -->
        <div class="">
            <FilArianne />
            <div class="particulier">
                <br>
                <h1>•••ETAT CIVIL</h1>
                <br>
                <div class="row">
                    <div id="gauche" class="col-sm-12 col-lg ">
                        <p>Accès aux démarches en ligne de la mairie pour les particuliers <br>
                            <br>
                            Actes d’état civil
                            Carte nationale d’identité
                            Passeport biométrique 
                        </p>
                        <br>
                        <h2>Démarches gratuites :</h2>
                        <br>
                        <p>
                            assurez vous d’être sur notre site internet de démarches d’état civil dont l’adresse doit
                            commencer
                            par : <br>
                            <a class="lien-gimont" href="#">https://www.espace-citoyens.net /gimont</a>
                        </p>
                        <ul>
                            <li>Acte de naissance</li>
                            <li>Acte de mariage</li>
                            <li>PACS</li>
                            <li>Acte de décès</li>
                            <li>Recensement citoyen</li>
                        </ul>
                        <br>
                        <h2>Inscription sur les listes électorales</h2>
                        <br>
                        <p>Accessible avec un compte service-pub.fr ou via France Connecte et à condition d’être âgé
                            d’au moins 18 ans :
                            Accéder au téléservice national</p>


                    </div>
                    <div id="droite"  class="col-sm-12 col-lg">
                        <div class="global-items">
                            <div class="items">
                                <i class="fa-regular fa-location-dot"></i>
                                <h2>Accueil sur rendez-vous à l’Hôtel de ville</h2>
                            </div>
                            <p>
                                Lundi, mercredi, jeudi : 8h30-17h <br>
                                Mardi : 8h30-19h <br>
                                Vendredi : 8h30-14h <br>
                            </p>
                        </div>
                        <br>
                        <div class="global-items">
                            <div class="items">
                                <i class="fa-duotone fa-calendar-days"></i>
                                <h2>Rendez-vous pour une carte d’identité /
                                    les passeports </h2>
                            </div>
                        </div>
                        <div class="block-center">
                            <a class="btn-rdv" href="">
                                prendre <br>
                                rendez <br>
                                Vous 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- <img src="url(/img/pages/vie-pratique/demarche/marianne.png)" alt=""> -->

    </section>

</template>

<script>
import FilArianne from '~/components/FilArianne.vue';

export default {
    name: "Demarche",
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
section {
    /* padding-top: 200px; */
    position: relative;
}

.container p {
    font-family: "finalSix2";
}

.particulier{
    margin: 0 12.9vw;
}

#demarcher h1 {
    color: #85735D;
}

#demarcher h2 {
    color: #3D4550;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
}

.block-center{  
    display: flex;
    justify-content: center;
}



.demarche ul {
    list-style: none;
    margin-top: 1rem;
}

.items {
    display: flex;
}

.items i {
    margin-right: 1rem;
    font-size: 30px;
}

.global-items p {
    padding-left: 40px;
}

.lien-gimont:hover{
    color:#d9bb56 ;
}



@media (max-width: 992px) {
    #droite{
        margin-top: 2rem;
    }
}
</style>