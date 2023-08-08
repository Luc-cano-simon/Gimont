<template>
    <section id="vie-pratique-demarche">
        <FilArianne />
        <img class="marianne" src="/img/pages/vie-pratique/demarche/marianne.png" alt="">
        <div class="contenu-page">
            <div class="row">
                <div class="col-sm-12 col-lg-6">
                    <div class="demarche">
                        <h1> <span>Effectuer</span> une démarche</h1>
                        <p>Sélectionner votre statut pour accéder aux services correspondants</p>
                    </div>
                </div>
                <div class="col-sm-12 col-lg-6 un-clic">
                    ••• en 1 clic
                </div>
            </div>
            <div class="liste-demarche">
                <div class="global-items">
                    <div class="items">
                        <a href="/vie-pratique/effectuer-une-demarche/Particulier">
                            <img class="pulse" src="/img/pages/vie-pratique/demarche/particulier.png" alt="PARTICULIERS">
                        </a>
                    </div>
                    <div class="les-demarches">
                        <ul>
                            <li>
                                <a href="/vie-pratique/effectuer-une-demarche/etat-civil/">Rendez-vous pour une Carte d’Identité </a>
                            </li>
                            <li>
                                <a href="">Rendez-vous pour un passeport</a>
                            </li>
                            <li>
                                <a href="">Etat civil</a>
                            </li>
                            <li>
                                <a href="">S’inscrire sur les listes électorales</a>
                            </li>
                            <li>
                                <a href="">Signaler un dysfonctionnement</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="global-items">
                    <div class="items">
                        <img class="pulse" src="/img/pages/vie-pratique/demarche/pro.png" alt="PROFESSIONNELS">
                    </div>
                    <div class="les-demarches">
                        <ul>
                            <li>
                                <a href="">Marchés publics</a>
                            </li>
                            <li>
                                <a href="">Installation sur le marché</a>
                            </li>
                            <li>
                                <a href="">Lien vers le site des commerçants</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="global-items">
                    <div class="items">
                        <img class="pulse" src="/img/pages/vie-pratique/demarche/responsable.png" alt="RESPONSABLE D’ASSOCIATION">
                    </div>
                    <div class="les-demarches">
                        <ul>
                            <li>
                                <a href="">Subventions</a>
                            </li>
                            <li>
                                <a href="">Rendez-vous pour un passeport</a>
                            </li>
                            <li>
                                <a href="">Présentation de nos salles</a>
                            </li>
                            <li>
                                <a href="">Demande de salle</a>
                            </li>
                            
                        </ul>
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
    height: 100vh;
}

/* .arianne {
    margin-bottom: 3vw;
    position: absolute;
    top: 100px;
    left: 60px
} */

.demarche span{
    color: #3D4550;
}

.demarche h1{
    color: #85735D;
}


.marianne{
    width: 100%;
    object-fit: cover;
    position: absolute;
    height: 85%;
}

.contenu-page {
    margin: 0rem 7vw;
    position: relative;

}

/* #vie-pratique-demarche .row {
    align-items: center;
} */

/* .arianne {
    font-size: 13px;
} */

.TheFooter {
    margin-top: -70px;
}

.demarche {
    margin: 2rem 0;
}

.demarche p {
    font-size: 15px;
}

.un-clic {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
}

.liste-demarche{
    display: flex;
    justify-content: space-around;
    margin: 3rem 0rem;
    flex-wrap: wrap;
}
.liste-demarche img{
    display: block;
    margin: auto;
}
.liste-demarche ul{
    list-style: none;
    padding: 0;
}
.liste-demarche ul li{
    padding: 5px;
}
/* .liste-demarche ul li a{
    transition: all 0.8s ease-in-out;
} */

.liste-demarche ul li a:hover{
    text-decoration: none;
    font-weight: bold;
    color: black;
}
.liste-demarche .les-demarches{
    margin: 2rem 0;
    text-align: center;
}

.pulse{
    animation: pulse 2s infinite;
}


@keyframes pulse {
	0% {
		transform: scale(0.95);
		/* box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7); */
	}

	70% {
		transform: scale(1);
		/* box-shadow: 0 0 0 10px rgba(0, 0, 0, 0); */
	}

	100% {
		transform: scale(0.95);
		/* box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); */
	}
}

@media (max-width: 992px) {
    section,
    .marianne{
        height: 100%;
    }
}
</style>