<template>
    <section id="atelier-122">
        <div class="fond-de-page">
            <div class="page-content">
                <FilArianne />
                <div class="contenu-page">
                    <div class="row display-flex">
                        <div class="col">
                            <h1>••• Atelier 122</h1>
                            <p> <b>L’atelier 122 c’est quoi ?</b> </p>
                            <p>
                                Un lieu partagé, entre la Mairie de Gimont avec sa commission culturelle et la compagnie de
                                théâtre <span class="couleur-page"> «La Langue Ecarlate» </span>.
                                Les associations «Pass’à jeux(ludothèque) et «Thé Créatif» ainsi que le pôle parentalité
                                y sont accueillis depuis le début de l’aventure.
                                <br>
                                Au fil des mois, de nouveaux ateliers ont vu le jour : atelier d’écriture
                                <span class="couleur-page"> «A vos plumes» </span>, atelier de couture & loisirs créatifs <span class="couleur-page"> «La Boucle» </span> , atelier de lecture à
                                voix haute, atelier de chants, café philo.
                                <br>
                                Une salle est consacrée aux livres avec une bibliothèque en libre-service <span class="couleur-page"> « Le livre
                                voyage »  </span> et bientôt des rencontres littéraires en présence d’auteurs.
                            </p>
                            <p>
                                Les associations Pass’à jeux(ludothèque) et <span class="couleur-page"> « Thé Créatif » </span> ainsi que le pôle parentalité
                                y sont accueillis depuis le début de l’aventure.
                            </p>
                            <br>
                            <p>
                                Un espace dédié à la culture, aux loisirs créatifs, à l’art, aux activités ludiques pour enfants et adultes : <br> Ainsi, des ateliers créatifs, artistiques, des expositions, des conférences y sont organisés. 
                            </p>
                            <br>
                            <p>
                                Un facilitateur du <span class="couleur-page"> « vivre ensemble » </span>. Proposer cette offre culturelle riche et accessible à tous, c’est se donner les moyens de faire sortir les habitants de chez eux, de rompre l’isolement, de créer du lien entre les générations, les associations, les anciens et nouveaux gimontois. 
                            </p>
                            <br>
                            <p>
                                <span class="couleur-page"> C’est un véritable laboratoire d’expérimentation</span> qui préfigure le projet culturel et artistique du futur tiers lieu en lieu et place de l’hôtel de France de Gimont, une fois celui-ci réhabilité.  
                            </p>
                            
                        </div>
                        <div class="col pl-100 p-relative">
                            <p class="mb-3">
                                Retour en quelques chiffres de cette <span class="couleur-page">  1 ère année d’existence de l’Atelier 122 </span>  
                                <ul>
                                    <li>L’Atelier 122, c’est une <span class="couleur-page">  quinzaine d’artistes </span> qui ont exposé leurs créations dans la salle d’exposition, pour la plupart gimontois ou gersois, et c’est une dizaine de programmer ces prochains mois  </li>
                                    <li>L’Atelier 122, c’est une <span class="couleur-page"> dizaine de structures </span> qui proposent des ateliers, des stages, des conférences </li>
                                    <li>L’Atelier 122, c’est une <span class="couleur-page"> dizaine de bénévoles </span> toujours disponibles pour assurer les permanences, accrocher et décrocher les expos  </li>
                                    <li>L’Atelier 122,  <span class="couleur-page">c’est en moyenne 80 à 100 visiteurs chaque semaine </span> </li>
                                </ul>
                                Mais l’atelier c’est bien plus que des chiffres, ici on joue, on lit, on chante, on philosophe, on peint, on brode, on transmet, on crée, on parle, on écrit, on se réunit, on rit, on joue la comédie, on accueille, on dessine, on écoute, on accompagne, on s’émerveille, on partage, bref ici on vit et surtout <span class="couleur-page">on vit ensemble !!!!</span>  
                            </p>
                            <div class="gallery">
                                <a href="/img/pages/loisirs/culture/Atelier 122.jpg" class="image-link">
                                    <img src="/img/pages/loisirs/culture/Atelier 122.jpg" alt="Atelier 122" />
                                </a>
                            </div>
                            <h2 class="mt-3 mb-3">Infos pratiques: </h2>
                            <p>Visites et expositions le mercredi matin, samedi matin et dimanche matin de 10h à 12h </p> <br>
                            <p>Pour toutes demandes (exposants …) : contactez Madame Maïthé HORGUEDEBAT : <a class="lien" href="tel:0624818052"> 06 24 81 80 52 </a></p> <br>
                            <p>Programmation et informations complémentaires Facebook : <a class="lien" href="https://www.facebook.com/latelier122/?ref=page_internal" target="_blank">Atelier122 </a> </p> <br>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11552.354581833519!2d0.877606!3d43.6255139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a9691c345e746f%3A0x998614f1721d7e6e!2sAtelier%20122!5e0!3m2!1sfr!2sfr!4v1676903830372!5m2!1sfr!2sfr" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <p class="adresse">
                                Atelier 122, 122 rue Nationale, 32200 GIMONT
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import FilArianne from '~/components/FilArianne.vue';

export default {
    name: "City park",
    transition: "fade_page",
    data() {
        return {};
    },
    created() { },
    mounted() {
        $('.image-link').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom', // this class is for CSS animation below
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }

        });
    },
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
section#atelier-122 {
    /* padding-top: 200px; */
    position: relative;
    background-color: #F5CB38;
}

#atelier-122 h1 {
    margin: 2rem 0;
    color: #F5CB38;
}

#atelier-122 h2 {
    font-size: 1.5rem;
}

.img-texte {
    display: flex;
    grid-gap: 15px;
    gap: 25px;
    font-weight: bold;
    align-items: center;
}
.couleur-page{
    color:#F5CB38;
    font-weight: 600;
}

.lien{
    color:#F5CB38;
    transition:all 0.7s;
}
.lien:hover{
    padding-left: 2%;
    text-decoration: none;
}

.arianne {
    text-transform: uppercase;
    font-size: 0.8em;
    margin-left: 3vw;
    margin-bottom: 0;
}


.fond-de-page {
    height: 180vh;
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

.pl-100 {
    padding-left: 100px;
}

#fb-share-button {
    background: #3b5998;
    color: white;
    border-radius: 3px;
    font-weight: 600;
    padding: 2px 8px;
    display: inline-block;
    position: static;
}

#fb-share-button:hover {
    cursor: pointer;
    background: #213A6F
}

#fb-share-button svg {
    width: 18px;
    fill: white;
}


.fa-print {
    font-size: 30px;
}

.adresse {
    font-weight: bold;
}

.liens-utile {
    color: #137C89;
}

.liens-utile a {
    color: #137C89;
    transition: all .7s;
    text-decoration: none;
}

.liens-utile a:hover {
    padding-left: 10px;
}

.galerie-images {
    display: flex;
    gap: 20px;
    margin: 2rem 0;
}

.galerie-images img {
    max-width: 145px;
}

.gallery img {
    width: 145px;
    height: 105px;
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

    .pl-100 {
        padding: 0;
    }
}

@media (max-width: 600px) {
    .galerie-images {
        flex-wrap: wrap;
        justify-content: center;
    }
}

@media print {

    .btn-print-share,
    .liens-utile,
    .galerie-images {
        display: none;
    }

    h1 {
        text-align: center;
    }

    .carte {
        width: 100%;
        margin: 0 auto;
    }

    .adresse,
    .img-texte {
        text-align: center;
    }
}</style>