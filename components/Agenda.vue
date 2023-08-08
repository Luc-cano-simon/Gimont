<template>
    <section id="agenda">
        <div class="container-page-accueil">
            <img class="logo-fond-gimont" src="img/photos/accueil/actualites/Gimont.png" alt="Gimont">
            <h2>L'agenda</h2>
            <div class="global-card">
                <div class="card-agenda">
                    <div class="contenu-titre-card">
                        <p class="catégorie-card">
                            expo
                        </p>
                        <h3 class="titre-card">
                            Antonin Carlès
                        </h3>
                    </div>
                    <img class="img-fluid resize-img" src="/img/photos/accueil/agenda/buste-bronze.png" alt="">
                    <div class="date-card">
                        <a class="btn-detail" href="">
                            <i class="fa-solid fa-arrow-right"></i>
                        </a>
                        <img src="/img/photos/accueil/agenda/calendar.png" alt="Calendrier">
                        <p>
                            22 MARS<br>
                            15 AVRIL
                        </p>
                    </div>

                </div>
                <div class="card-agenda">
                    <div class="contenu-titre-card">
                        <p class="catégorie-card">
                            expo
                        </p>
                        <h3 class="titre-card">
                            Antonin Carlès
                        </h3>
                    </div>
                    <img class="img-fluid resize-img" src="/img/photos/accueil/agenda/forum.png" alt="">
                    <div class="date-card">
                        <a class="btn-detail" href=""><i class="fa-solid fa-arrow-right"></i></a>
                        <img src="/img/photos/accueil/agenda/asso.png" alt="Calendrier">
                        <p>
                            22 MARS<br>
                            15 AVRIL
                        </p>
                    </div>

                </div>
                <div class="card-agenda">
                    <div class="contenu-titre-card">
                        <p class="catégorie-card">
                            expo
                        </p>
                        <h3 class="titre-card">
                            Antonin Carlès
                        </h3>
                    </div>
                    <img class="img-fluid resize-img" src="/img/photos/accueil/agenda/culture.png" alt="">
                    <div class="date-card">
                        <a class="btn-detail " href="">
                            <i class="fa-solid fa-arrow-right "></i>
                        </a>
                        <img src="/img/photos/accueil/agenda/village.png" alt="Calendrier">
                        <p>
                            22 MARS<br>
                            15 AVRIL
                        </p>
                    </div>
                </div>
            </div>
            <a class="agenda btn-no-border h-button centered" data-text="Tout l’agenda" href="">
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
    </section>
</template>

<style>
#agenda {
    position: relative;
    margin-bottom:20vh;
}

#agenda h2 {
    margin: 3rem 1vw;
    color: white;
    /* font-weight: bold; */
    margin-bottom: 2rem;
}


.logo-fond-gimont {
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 0;
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.card-agenda {
    position: relative;
}

/* .card-agenda .resize-img{
    width:550px;
} */

.global-card {
    display: flex;
    justify-content: center;
    /* flex-wrap: wrap; */
    gap: 1em;
}

.contenu-titre-card {
    position: absolute;
    height: 25%;
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0px 20px;
}

.card-agenda:nth-child(1) .contenu-titre-card {
    background-color: #b93239a6;
}

.card-agenda:nth-child(2) .contenu-titre-card {
    background-color: #137c89ab;
}

.card-agenda:nth-child(3) .contenu-titre-card {
    background-color: #707070bd;
}

.date-card {
    position: absolute;
    display: flex;
    align-items: center;
    top: 25%;
    padding: 10px 0px;
    background: #D0A872;
    width: 230px;
}

.date-card p {
    padding: 15px;
}

.date-card img {
    margin: 0px 20px;
    height: 40px;
}

.card-agenda:nth-child(1) .btn-detail {
    position: absolute;
    top: 0%;
    left: 100%;
    background-color: #B93239;
    padding: 10px 30px;
    color: white;
    transition: all 0.5s;
}

.card-agenda:nth-child(1) .btn-detail:hover {
    background-color: #b93239b5;

}

.card-agenda:nth-child(2) .btn-detail {
    position: absolute;
    top: 0%;
    left: 100%;
    background-color: #EDCC57;
    padding: 10px 30px;
    color: white;
    transition: all 0.5s;
}

.card-agenda:nth-child(2) .btn-detail:hover {
    background-color: #edcc57b5;
}


.card-agenda:nth-child(3) .btn-detail {
    position: absolute;
    top: 0%;
    left: 100%;
    background-color: #3D7A87;
    padding: 10px 30px;
    color: white;
    transition: all 0.5s;

}

.card-agenda:nth-child(3) .btn-detail:hover {
    background-color: #3D7A87b5;
}

.btn-detail i {
    transition: all 0.5s;
}

.btn-detail:hover i {
    transform: rotate(360deg);

}

a.agenda {
    margin-top: 2rem;
}

/* @media (max-width: 1550px) {
    .card-agenda:nth-child(1) .btn-detail,
    .card-agenda:nth-child(2) .btn-detail,
    .card-agenda:nth-child(3) .btn-detail {
        left: 34.5%;
    }
    .card-agenda{
        margin-bottom: 2rem;
    }
} */

@media (max-width: 1300px) {
    .card-agenda {
        margin-bottom: 2rem;
    }

    .global-card {
        flex-wrap: wrap;
    }
}

@media (max-width: 1000px) {

	#agenda h2{
		color: #137C89;
	}
} 
</style>