<template>
    <section id="bandeau">
        <div class="container-page">
            <!-- <img class="header-page" src="/img/photos/bandeaux/header-text.jpg" alt="Ville de Gimont"> -->
            <!-- <img class="header-page" src="/img/photos/bandeaux/Bandeau2.jpg" alt="Ville de Gimont"> -->
            <!-- <img class="header-page" src="/img/photos/bandeaux/bandeauV3.jpg" alt="Ville de Gimont"> -->
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="header-page" src="/img/photos/bandeaux/header-text.jpg" alt="Ville de Gimont">
                    </div>
                    <div class="carousel-item">
                        <img class="header-page" src="/img/photos/bandeaux/Bandeau2.jpg" alt="Ville de Gimont">
                    </div>
                    <div class="carousel-item">
                        <img class="header-page" src="/img/photos/bandeaux/bandeauV3.jpg" alt="Ville de Gimont">
                    </div>
                </div>
            </div>
            <div class="contenu-droite">
                <SearchHeader />
                <div class="input-recherche ">
                    <input class="form-control ds-input" type="text" id="search-input" placeholder="Que cherchez-vous?">

                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SearchHeader from '~/components/SearchHeader.vue';

export default {
    mounted() {
        $(document).ready(function () {
            $(".carousel").carousel({
                interval: 3000,
                cycle: true,
            });
        });
    },
    components: { SearchHeader }
}



</script>

<style scoped>
/* section {
    padding-top: 160px !important;
} */

.contenu-droite {
    right: 8%;
    color: white;
    font-size: 18px;
    display: flex;
    align-items: flex-end;
    position: absolute;
    top: 50%;
    /* left: 50%; */
    transform: translate(0%, -50%);
    z-index: 1;
}

.header-page {
    width: 100%;
}

.container-page {
    position: relative;
}

.contenu-gauche {
    position: absolute;
    top: 18%;
    left: 2%;
    color: white;
    font-size: 18px;
}

.input-recherche input {
    padding: 28px;
    border-radius: 0;
    margin-left: 25px;
    width: 500px;
}

#bandeau .carousel-inner {
    height: 425px;
}


@media (max-width: 1200px) {
    .input-recherche input {
        width: 250px;
    }
    /* .contenu-droite {
        top:-15%;
    } */
}

@media (max-width: 992px) {
    section {
        padding-top: 140px;
    }
}

@media (max-width: 768px) {
    .contenu-droite {
        position: initial;
        justify-content: center;
        align-items:center;
        flex-direction: column;
        transform: none;
        margin-top: 2rem;
    }

    .input-recherche input {
        margin:0;
    }

    section {
        padding: 0;
    }
    #bandeau .carousel-inner{
        height:auto;
    }
}
</style>