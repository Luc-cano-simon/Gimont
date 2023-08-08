<template>
    <section id="loisir-3-17">
        <FilArianne />
        <div class="contenu-page">
            <!-- <div class="container"> -->
            <div class="d-flex align-items-center mb-3 flex-xs-column">
                <h1 class="mr-5">••• Loisirs 3-17 ans </h1>
            </div>

            <div class="box-sous-cat-btn mt-5">
                <h2>ALSH 3-5 (adresse, tarifs, règlement intérieur, projet pédagogique) – 3CAG </h2>
                <p>
                    à Fournir
                </p>
            </div>
            <hr class="mt-5">
            <div class="box-sous-cat-btn mt-5">
                <h2>ALSH 6-11 (adresse, tarifs, règlement intérieur, projet pédagogique) – 3CAG </h2>
                <p>
                    à Fournir
                </p>
            </div>
            <hr class="mt-5">
            <div class="box-sous-cat-btn mt-5">
                <h2>Espace jeune 11-17</h2>
                <p>
                    <a href="https://www.facebook.com/GimontJeunesse/">Gimont Jeunesse</a>
                </p>
            </div>
            <hr class="mt-5">
            <div class="box-sous-cat-btn mt-5">
                <h2>Collège</h2>
                <p>
                    Le collège Edouard Lartet est géré par le Conseil Départemental du Gers
                </p>
                <div class="mt-3">
                    <b>Collège Edouard Lartet</b>
                    <p>Chemin de l'Arteton </p>
                    <p>32004 Auch </p>
                    <p> Téléphone : <a href="0562586780">05.62.58.67.80</a> </p>
                    <p> E-mail : <a href="0320013r@ac-toulouse.fr">0320013r@ac-toulouse.fr</a> </p>
                </div>
                <div class="mt-3">
                    Pour plus d'informations : <a href="https://edouard-lartet.mon-ent-occitanie.fr/">https://edouard-lartet.mon-ent-occitanie.fr/</a>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import FilArianne from '~/components/FilArianne.vue';
// import modalRdv from '~/components/modalRdv.vue';

export default {
    name: "effectuer une démarche",
    transition: "fade_page",
    data() {
        return {};
    },
    created() { },
    mounted() {
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            console.log('ok');
            var href = $(this).attr('href');
            var elem = $(href);
            if (elem.length) {
                var elemTop = elem.first().offset().top - 500;
                $('html,body').animate({
                    scrollTop: elemTop
                }, "slow");
            }
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
section#loisir-3-17 {
    /* padding-top: 200px; */
    position: relative;
    /* background-color: #f6f6f6; */
    /* z-index: 999; */
}

a {
    transition: all 0.7s;
    text-decoration: none;
    color: #CC9A55;
}

a:hover {
    padding-left: 10px;
    color: #CC9A55;
}

a.tel,
a.mail {
    transition: all 0.7s;
    text-decoration: none;
    color: #CC9A55;
}

a.tel:hover,
a.mail:hover {
    padding-left: 0px;
}

#pdf-loisir-3-17 a:hover {
    padding: 0;
}

.margin-bottom {
    margin-bottom: 7rem !important;
}

hr {
    border-top: 1px solid #707070;
}

.ancre {
    height: 45px;
}

.encart {
    border: 1px solid;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    margin: auto;
}

.color-orange {
    color: #CC9A55;
}

.mx-50 {
    max-width: 50%;
}

#loisir-3-17 h1 {
    color: #85735d;
    /* text-transform:initial; */
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

.big-row .col,
.big-row .col-lg-12 {
    margin: 2rem 0;
}

/* ------------------BOX SOUS CAT ---------------------- */

/* .box-sous-cat{
    margin :2rem 0;
} */

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
    justify-content: center;
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
    text-transform: uppercase;
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
    justify-content: center;
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

/* ACCORDION  */

#restaurationScolaire .btn-pdf {
    width: auto;
}

.btn-pdf {
    padding: 10px;
    border: 1px solid #D7AA7A;
    background-color: #D7AA7A;
    color: white;
    transition: all 1s;
    width: 100%;
}

.btn-pdf:hover {

    border: 1px solid #D7AA7A;
    background-color: white;
    color: #D7AA7A;
    transition: all 1s;
}

.card a {
    transition: all 0.7s;
    margin: 10px 0;
}

.card a:hover {
    padding-left: 10px;
    text-decoration: none;
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
}
</style> 