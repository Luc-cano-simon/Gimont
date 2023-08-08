<template>
    <section id="widget">
        <div class="container-page-accueil">
            <!-- <p>cocuuo</p> -->
            <div class="row">
                <div class=" col-md-12 col-lg-3">
                    <img class="img-1clic" src="img/photos/accueil/1clic/1clic.png" alt="En un clic">
                </div>
                <div class=" col-md-12 col-lg-9">
                    <div class="global-item">
                        <div class="content-item">
                            <div class="items">
                                <a href="">
                                    <img src="img/photos/accueil/1clic/pictogramme/passeport.png"
                                        alt="Demande de passeport / carte d'indetité">
                                </a>
                            </div>
                            <p>Passeport <br> Carte d’identité</p>
                        </div>
                        <div class="content-item">
                            <div class="items">
                                <a href="">
                                    <img src="img/photos/accueil/1clic/pictogramme/location.png"
                                        alt="Location de salle">
                                </a>
                            </div>
                            <p>Location <br> de salle</p>
                        </div>
                        <div class="content-item">
                            <div class="items">
                                <a href="">
                                    <img src="img/photos/accueil/1clic/pictogramme/urbanisme.png" alt="Urbanisme">
                                </a>
                            </div>
                            <p>Urbanisme</p>
                        </div>
                        <div class="content-item">
                            <div class="items">
                                <a href="">
                                    <img src="img/photos/accueil/1clic/pictogramme/ecole.png" alt="Écoles">

                                </a>
                            </div>
                            <p>Écoles</p>
                        </div>
                        <div class="content-item">
                            <div class="items">
                                <a href="">
                                    <img src="img/photos/accueil/1clic/pictogramme/agenda.png" alt="Agenda">
                                    <p></p>
                                </a>
                            </div>
                            <p>Agenda</p>
                        </div>
                        <div class="content-item">
                            <div class="items">
                                <a href="">
                                    <img src="img/photos/accueil/1clic/pictogramme/annuaire.png" alt="Annuaire">
                                    <p></p>
                                </a>
                            </div>
                            <p>Annuaires</p>
                        </div>
                        <div class="content-item">
                            <div class="items">
                                <a href="">
                                    <img src="img/photos/accueil/1clic/pictogramme/tourisme.png" alt="Tourisme">
                                    <p></p>
                                </a>
                            </div>
                            <p>Tourisme</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "En1Clic",
}

</script>

<style scoped>
#widget {
    /* margin: 2rem 2vw; */
    /* margin-bottom: 2rem; */
    /* margin-top: 4rem; */
    margin:2rem 0rem;
}

.global-item {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.global-item .items {
    display: flex;
}

/* .content-item{
    
} */

/* STYLISATION DES WIDGET  */

/* 1  */

.global-item .content-item:nth-child(1) .items {
    background-color: #85735D;
    border: 1px solid #85735D;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;

}

.global-item .content-item:nth-child(1) .items:hover {
    background-color: transparent;
    border: 1px solid #85735D;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}


/* 2  */

.global-item .content-item:nth-child(2) .items {
    background-color: #E9D8BA;
    border: 1px solid #E9D8BA;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.global-item .content-item:nth-child(2) .items:hover {
    background-color: transparent;
    border: 1px solid #E9D8BA;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 3  */
.global-item .content-item:nth-child(3) .items {
    background-color: #B47B6C;
    border: 1px solid #B47B6C;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.global-item .content-item:nth-child(3) .items:hover {
    background-color: transparent;
    border: 1px solid #B47B6C;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 4  */
.global-item .content-item:nth-child(4) .items {
    background-color: #C9A979;
    border: 1px solid #C9A979;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.global-item .content-item:nth-child(4) .items:hover {
    background-color: transparent;
    border: 1px solid #C9A979;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 5  */
.global-item .content-item:nth-child(5) .items {
    background-color: #3D7A87;
    border: 1px solid #3D7A87;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.global-item .content-item:nth-child(5) .items:hover {
    background-color: transparent;
    border: 1px solid #3D7A87;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 6  */
.global-item .content-item:nth-child(6) .items {
    background-color: #3F454F;
    border: 1px solid #3F454F;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.global-item .content-item:nth-child(6) .items:hover {
    background-color: transparent;
    border: 1px solid #3F454F;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 7  */
.global-item .content-item:nth-child(7) .items {
    background-color: #F5CB38;
    border: 1px solid #F5CB38;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.global-item .content-item:nth-child(7) .items:hover {
    background-color: transparent;
    border: 1px solid #F5CB38;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.global-item .content-item p {
    text-align: center;
}


.global-item .items img {
    transition: .7s all;
}

.global-item .items:hover img {
    transform: rotate(-15deg);
}

.img-1clic {
    width: 100%;
}

@media (max-width: 992px) {
    .img-1clic {
        width: auto;
        display: block;
        margin: auto;
        margin-bottom: 2rem;
    }
}
</style>