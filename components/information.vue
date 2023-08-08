<template>
    <section id="info">
        <div class="container-page-accueil">
            
            <h2> <span class="titre-gris"> ... RESTEZ </span> informés </h2>
            <div class="row">
                <div class="polygon-info col-md-12 col-lg-6">
                    <img class="img-newsletter" src="/img/photos/accueil/infos/newsletter.png" alt="Newsletter">
                    <div class="contenu-newsletter">
                        <h3>Newsletter</h3>
                        <div class="inputNewsletter">
                            <input type="mail" placeholder="Saisissez votre mail">
                            <button>ok</button>
                        </div>
                        <p class="desabonnement">
                            Votre adresse de messagerie est uniquement utilisée pour vous envoyer les lettres
                            d’informations
                            de la Mairie de Gimont. Vous pouvez à tout moment utiliser le lien de désabonnement intégré
                            dans
                            la newsletter. En savoir plus sur la gestion de vos données et vos droits.
                        </p>
                        <a class="btn-newsletter" href="">
                            TOUTES LES LETTRES D’INFO
                            <span><i class="fa-solid fa-arrow-right "></i></span>
                        </a>
                    </div>
                </div>
                <div class="polygon-info col-md-12 col-lg-6">
                    <div class="panneauPocket">
                        <div class="gauche">
                            <img class="panneau-pocket" src="/img/photos/accueil/infos/logo_panneau_pocket.png"
                                alt="Logo Panneau Pocket"> <br>
                            <div class="adresse">
                                <img src="/img/photos/accueil/infos/logo_gimont.png" alt="Logo Panneau Pocket">
                                <p>GIMONT 32200</p>
                                <p> <a href="tel:0562677005">05 62 67 70 05</a> </p>
                                <p> <a href="mailto:contact@gimont.fr">contact@gimont.fr</a> </p>
                                <!-- <p class="petit-texte">Travaux annuels d’entretien entre Empalot et Auch. Les dates prévues
                                sont du 21 Février jusqu’au 8 Mars 2022…</p> -->
                            </div>
                            <div class="telechargement">
                                <a href="">
                                    <img src="/img/photos/accueil/infos/google_play.png" alt="Google play">
                                </a>
                                <a href="">
                                    <img src="/img/photos/accueil/infos/app_store.png" alt="Apple store">
                                </a>
                                <a href="">
                                    <img src="/img/photos/accueil/infos/app_galery.png" alt="App Gallery">
                                </a>
                            </div>
                        </div>
                        <div class="droite">
                            <img class="direction-des-lignes" src="/img/photos/accueil/infos/plan.png" alt="Plan">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style>
/* #info {
    margin: 13rem 7vw;
} */

#info h2 {
    color: #137C89;

    font-weight: bold;
    margin-bottom: 2rem;
}

#info .titre-gris {
    font: 18px;
    color: #3D4550;
    font-family: 'finalSix';
}

.polygon-info:nth-child(1) {
    /* clip-path: polygon(20% 16%, 95% 20%, 89% 87%, 11% 83%); */
    clip-path: polygon(20% 16%, 98% 25%, 92% 93%, 14% 83%);
    height: 530px;
    background-color: #85735d45;
}

.contenu-newsletter {
    position: absolute;
    top: 30%;
    left: 25%;
}

.contenu-newsletter h3 {
    margin-bottom: 4rem;
}

.img-newsletter {
    position: absolute;
    top: 27%;
    right: 10%;
    width: 140px;
}

.desabonnement {
    font-size: 12px;
    width: 80%;
}

.inputNewsletter button {
    margin-left: -6px;
    border: 1px solid #A83D3E;
    background-color: #A83D3E;
    color: white;
    /* height: 36px; */
}


.btn-newsletter {
    position: absolute;
    bottom: -37%;
    left: 26.4%;
    /* background-color: #B93239; */
    padding: 10px 30px;
    color: #3D4550;
    transition: all 0.5s;
}

.btn-newsletter:hover {
    color: #3D4550;
    text-decoration: none;
}

.btn-newsletter span {
    background-color: #B93239;
    padding: 11px;
}

.btn-newsletter i {
    transition: all 0.5s;
    color: white;
}

.btn-newsletter:hover i {
    transform: rotate(360deg);
    color: white;
}

.polygon-info:nth-child(2) {
    /* clip-path: polygon(20% 16%, 95% 20%, 89% 87%, 11% 83%); */
    clip-path: polygon(10% 17%, 85% 24%, 80% 92%, 4% 85%);
    height: 600px;
    background-color: #edd7b657;
}

.panneauPocket {
    position: absolute;
    top: 23%;
    left: 12%;
}

.panneauPocket .gauche {
    width: 50%;
}

.panneauPocket .gauche .petit-texte {
    font-size: 12px;
}

.panneau-pocket {
    width: 250px;
}

.panneauPocket .adresse {
    font-size: 19px;
    text-align: center;
    margin-bottom: 2rem;
}

.telechargement {
    display: flex;
    align-items: center;
}

.telechargement img {
    margin-right: 15px;
}

.droite {
    position: absolute;
    right: 0;
    top: 14%;
}

.droite .direction-des-lignes {
    width: 160px
}

@media (max-width: 1400px) {
    .btn-newsletter {
        position: absolute;
        bottom: -28%;
        left: 13.4%;
        /* background-color: #B93239; */
        padding: 10px 30px;
        color: #3D4550;
        transition: all 0.5s;
    }

    .img-newsletter {
        width: 90px;
    }
}

@media (max-width: 1300px) {
    .polygon-info {
        width: 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }

    .droite {
        position: absolute;
        right: -66%;
        top: 11%;
    }

}

@media (max-width: 1285px) {

    .btn-newsletter {
        font-size: 16px;
        bottom: -41%;
        left: 0;
    }

    .contenu-newsletter h3 {
        margin-bottom: 2rem;
    }

    .desabonnement {
        width: 90%;
    }
}

@media (max-width: 800px) {
    .direction-des-lignes {
        display: none;
    }
    .panneauPocket .gauche{
        width:100%;
    }
    .panneauPocket .telechargement{
        flex-direction: column;
        gap:1rem;
    }
}

@media (max-width: 768px) {
    .polygon-info {
        clip-path: none !important;
    }

    .polygon-info:nth-child(1) {
        margin-bottom: 2rem;
        height :auto;
        padding:30px ;
    }
    .contenu-newsletter{
        position:initial;
    }
    .img-newsletter{
        display:none;
    }
}
</style>