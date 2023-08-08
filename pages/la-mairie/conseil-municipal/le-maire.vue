<template>
    <section id="le-maire">
        <FilArianne />
        <div class="titre-page">
            <h1>••• LE <span class="titre-seconde-couleur"> MAIRE </span> </h1>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-0 col-xl-1 couleur-gauche"></div>
                <div class="col-xl-5 col-lg-12 " data-aos="fade-down-right" data-aos-duration="3000">
                    <img class="img-maire" src="/img/pages/la-mairie/conseil-municipal/le-maire/Franck_Villeneuve.jpg"
                        alt="Mr Franck_Villeneuve Maire de Gimont ">
                </div>
                <div class="col-xl-5 position-relative col-lg-12">
                    <div id="wrapper">
                        <h2 class="animation-txt">
                            <span class="letter01">G</span>
                            <span class="letter02">i</span>
                            <span class="letter03">m</span>
                            <span class="letter04">o</span>
                            <span class="letter05">n</span>
                            <span class="letter06">t</span>
                            <span class="letter07">,</span>
                            <span class="letter08"></span>
                            <span class="letter09">d</span>
                            <span class="letter10">a</span>
                            <span class="letter11">n</span>
                            <span class="letter12">s</span>
                            <span class="letter13"></span>
                            <span class="letter14">l</span>
                            <span class="letter15">'</span>
                            <span class="letter16">h</span>
                            <span class="letter17">i</span>
                            <span class="letter18">s</span>
                            <span class="letter19">t</span>
                            <span class="letter20">o</span>
                            <span class="letter21">i</span>
                            <span class="letter22">r</span>
                            <span class="letter23">e</span>
                            <span class="letter24">.</span>
                        </h2>
                        <hr>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="3000">
                        Pour qualifier notre commune il faudrait parler d’histoire ancienne et contemporaine, de sa
                        composition urbaine de bastide aux développements successifs des époques modernes.

                        Parler aussi de sa population, ou les hommes, les femmes et les enfants en ont constitué le
                        vivant.
                        Tous trouvèrent ici et y trouvent encore aujourd’hui, un cadre de vie serein dans un
                        environnement
                        équilibré.
                    </div>
                    <br>
                    <div data-aos="fade-left" data-aos-duration="3000">
                        Il faudrait aussi évoquer bien sûr, son activité économique conséquente, avec ses marchés, ses
                        commerces, ses artisans, ses entreprises et son agriculture bien ancrée. De son attractivité
                        associative importante pouvant accompagner les plus jeunes aux plus anciens dans des activités de
                        loisirs, de détente et ou de compétitions.
                        <br>
                        <br>
                        
                        Osez questionner le gimontois, prenez le temps de découvrir les belles perspectives vers la
                        campagne, la chaîne des Pyrénées depuis le plateau des Capucins et de vous laissez
                        surprendre par
                        l’architecture de son patrimoine..

                        La volonté serait de poursuivre ensemble l’avenir de Gimont afin d’en prolonger demain son
                        histoire…
                        
                    </div>
                    <br>
                    <div data-aos="fade-right" data-aos-duration="3000">
                        Parler de sa situation géographique qui place Gimont, sur l’axe principal reliant la métropole
                        Toulousaine aux portes du Gers, à moins de 30 minutes.

                        De ses équipements structurants pour ses concitoyens et pour ceux de la communauté de communes
                        dont
                        elle est la ville principale.

                        De ses paysages environnants constitués de vallons colorés à perte de vue ayant les montagnes
                        pyrénéennes
                        pour seule frontière visuelle.

                        Cette liste ne pourrait être exhaustive tant les richesses sont importantes.
                    </div>
                    <br>

                    <div data-aos="fade-left" data-aos-duration="3000">
                        En somme, Gimont manifeste des atouts considérables et salvateurs pour l’avenir.

                        Un constat simplement bienveillant, démontrant les forces dont nous disposons, ayant favorisées
                        notre capacité d’adaptation dans le temps, pour pouvoir demain poursuivre son développement.

                        Plus que jamais, Gimont fait partie de ces communes où vivre est bon.

                        Vous êtes les bienvenus vous tous, amis, passants, nouveaux arrivants, curieux, à découvrir nos
                        richesses, nos valeurs.
                    </div>
                    <br>

                    <br>
                    <div style="margin-bottom:2rem;" data-aos="fade-up" data-aos-duration="3000">
                        Bien sincèrement. <br>
                        <span class="couleur-page"> Franck Villeneuve</span>,
                        Maire de Gimont
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
import FilArianne from '~/components/FilArianne.vue';
// import AOS from 'aos';
// import 'assets/module/aos/dist/aos.css';
export default {
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
section#le-maire {
    /* padding-top: 200px; */
    position: relative;
    /* background-color: #f6f6f6; */
}

hr {
    border-top: 1px solid #d9bb56;
    width: 50%;
}

.couleur-page {
    color: #d9bb56;
}

.position-relative {
    position: relative;
}

/* .arianne {
    margin-bottom: 3vw;
    margin-left: 9rem;

} */

/* .titre-page {
    margin: 3rem 9vw;
    margin-bottom: 3rem;
    position: relative;
} */

.titre-seconde-couleur {
    color: #D7AA7A;
}

.couleur-gauche {
    background-color: #D7AA7A;
    margin-bottom: -5px;
}

.img-maire {
    display: block;
    margin: auto;
    width: 80%;
    margin-bottom: 2rem;
}


.animation-txt {
    font-family: 'Rouge Script';
    font-size: 60px;
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
}

/* Animations des lettres */
.animation-txt span {
    opacity: 0;
}

.letter01 {
    animation: letters 3s ease 0000ms forwards;
}

.letter02 {
    animation: letters 3s ease 100ms forwards;
}

.letter03 {
    animation: letters 3s ease 300ms forwards;
}

.letter04 {
    animation: letters 3s ease 500ms forwards;
}

.letter05 {
    animation: letters 3s ease 700ms forwards;
}

.letter06 {
    animation: letters 3s ease 900ms forwards;
}

.letter07 {
    animation: letters 3s ease 1100ms forwards;
}

.letter08 {}

.letter09 {
    animation: letters 3s ease 1300ms forwards;
}

.letter10 {
    animation: letters 3s ease 1500ms forwards;
}

.letter11 {
    animation: letters 3s ease 1700ms forwards;
}

.letter12 {
    animation: letters 3s ease 1900ms forwards;
}

.letter13 {
    animation: letters 3s ease 2100ms forwards;
}

.letter14 {
    animation: letters 3s ease 2300ms forwards;
}

.letter15 {
    animation: letters 3s ease 2500ms forwards;
}

.letter16 {
    animation: letters 3s ease 2700ms forwards;
}

.letter17 {
    animation: letters 3s ease 2900ms forwards;
}

.letter18 {
    animation: letters 3s ease 3100ms forwards;
}

.letter19 {
    animation: letters 3s ease 3300ms forwards;
}

.letter20 {
    animation: letters 3s ease 3500ms forwards;
}

.letter21 {
    animation: letters 3s ease 3700ms forwards;
}

.letter22 {
    animation: letters 3s ease 3900ms forwards;
}

.letter23 {
    animation: letters 3s ease 4100ms forwards;
}

.letter24 {
    animation: letters 3s ease 4300ms forwards;
}

.letter25 {
    animation: letters 3s ease 4500ms forwards;
}

.letter26 {
    animation: letters 3s ease 4700ms forwards;
}

.letter27 {
    animation: letters 3s ease 4900ms forwards;
}

@keyframes letters {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1.0;
    }
}

@media (max-width: 1200px) {
    .couleur-gauche {
        background-color: transparent;
    }
}
</style>