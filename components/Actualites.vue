<template>
    <section id="actualites">
        <div class="container-page-accueil">
            <h2> <span class="titre-gris"> Les </span> actualités</h2>
            <div class="row">
                <div class="polygon col-md-12 col-lg-6">
                    <div class="contenu-gauche">
                        <div class="text">
                            <h3>Titre actu</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                nostrud exerci quis nostrud exerci tation ullamcorper.</p>
                            <a href="">En savoir plus</a>
                        </div>
                    </div>
                    <div class="contenu-droite">
                        <img src="img/photos/accueil/actualites/Actu1.png" alt="Le marché printemps">
                    </div>
                </div>
                <div class="polygon col-md-12 col-lg-6">
                    <div class="contenu-gauche">
                        <div class="text">
                            <h3>Titre actu</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                nostrud exerci quis nostrud exerci tation ullamcorper.</p>
                            <a href="">En savoir plus</a>
                        </div>
                    </div>
                    <div class="contenu-droite">
                        <img src="img/photos/accueil/actualites/inscription.png" alt="Inscription à l'école">
                    </div>
                </div>
                <a class="btn-no-border h-button centered" data-text="Toute l'actualité" href="">
                    <!-- Toute l'actualité -->
                    <span>Ç</span>
                    <span>a</span>
                    <span></span>
                    <span>b</span>
                    <span>o</span>
                    <span>u</span>
                    <span>g</span>
                    <span>e</span>
                    <span></span>
                    <span>à</span>
                    <span></span>
                    <span>G</span>
                    <span>i</span>
                    <span>m</span>
                    <span>o</span>
                    <span>n</span>
                    <span>t</span>
                    <span></span>
                    <!-- ça bouge à gimont -->
                </a>
            </div>
        </div>

    </section>
</template>

<script>

</script>

<style>
#actualites {
    position: relative;
    margin-bottom: 41vh;
    z-index: 1;
}


#actualites h2 {
    text-align: center;
    color: #137C89;
    font-weight: bold;
    /* margin-bottom: 2rem; */
}

#actualites .titre-gris {
    color: #3D4550;
    font-family: 'finalSix';
}

.polygon {
    /* clip-path: polygon(6% 12%, 88% 6%, 93% 83%, 11% 91%); */
    /* clip-path: polygon(11% 16%, 79% 11%, 83% 80%, 13% 86%); */
    /* clip-path: polygon(11% 16%, 92% 9%, 97% 78%, 14% 86%); */
    clip-path: polygon(2% 19%, 92% 9%, 97% 78%, 6% 88%);
    background-color: #FFFFFF;
    height: 650px;
    position: relative;
}

.contenu-gauche {
    position: absolute;
    top: 20%;
    left: 13%;
    width: 30%;
}

.contenu-gauche .text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 400px;
}

.contenu-gauche p {
    font-size: 16px;
}

.contenu-gauche .text p:first-child {
    font-size: 22px;
    color: #137C89;
}

.contenu-gauche .text p:nth-child(2) {
    font-size: 16px;
}

.contenu-gauche .text h3 {
    font-size: 22px;
    font-weight: bold;
}

.contenu-gauche .text a {
    color: #B93239;
    text-decoration: underline;
    transition: 0.7s all;
}

.contenu-gauche .text a:hover {
    padding-left: 2rem;
}

.contenu-droite {
    position: absolute;
    right: 12%;
    top: 23%;
}

.contenu-droite img {
    width: 300px;
}


/* EFFECT BUTTON  */

.btn-no-border {
    width: 30%;
    display: block;
    margin: auto;
    padding: 10px 25px;
    color: white;
    background-color: #509DA9;
    border: 1px solid #509DA9;
    z-index: 1;
    text-align: center;
}

.btn-no-border:hover {
    color: white;
    text-decoration: none;
}


@media (max-width: 1500px) {
    .contenu-droite img {
        width: 200px;
    }

    .contenu-gauche {
        width: 35%;
    }
}


@media (max-width: 1200px) {
    .contenu-droite {
        position: absolute;
        right: 12%;
        top: 18%;
    }

    .contenu-droite img {
        width: 150px;
    }

    .contenu-gauche {
        width: 35%;
    }

    .contenu-gauche {
        width: 80%;
    }
}


@media (max-width: 992px) {
    .contenu-droite {
        position: absolute;
        right: 12%;
        top: 15%;
    }

    .contenu-droite img {
        width: 230px;
    }
}

@media (max-width: 650px) {
    .contenu-gauche {
        position: initial;
    }

    .contenu-droite img {
        width: 200px;
        display: block;
        margin: auto;
    }

    .img-1clic {
        width: 100% !important;
    }

    #actualites {
        background-color: white;
        padding: 30px 0;
        margin-bottom: 0;
    }
    .btn-no-border{
        width:80%;
    }

}
</style>