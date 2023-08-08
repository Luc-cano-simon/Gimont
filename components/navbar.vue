<template>
    <section>
        <nav id="navbar" class="navbar-gimont navbar-expand-lg navbar-dark">
            <a href="https://dev06.graphicloud.fr/">
                <img class="logo-gimont" src="/img/logos/logo_ligne_gimont.png" alt="Logo Gimont">
            </a>
            <div class="collapse navbar-collapse" id="main_nav">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> La mairie </a>
                        <ul class="dropdown-menu menu-drop mairie">
                            <li><a class="dropdown-item" href="#"> Le conseil municipal </a>
                                <ul class="submenu dropdown-menu mairie">
                                    <li>
                                        <a class="dropdown-item" href="/la-mairie/conseil-municipal/le-maire">Le
                                            maire
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/la-mairie/conseil-municipal/les-elus">Les
                                            élus
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item"
                                            href="/la-mairie/conseil-municipal/referents-de-quartier">Référents de
                                            quartier
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Ordre du jour et délibérations</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a class="dropdown-item" href="#"> Organigramme </a>
                                <ul class="submenu dropdown-menu mairie">
                                    <li><a class="dropdown-item"
                                            href="/la-mairie/organigramme/service-administratif">Service <br>
                                            Administratif</a></li>
                                    <li><a class="dropdown-item" href="/la-mairie/organigramme/service-technique">Service
                                            <br> Technique
                                        </a></li>
                                    <li>
                                        <a class="dropdown-item"
                                            href="/la-mairie/organigramme/service-entretien-restauration">
                                            Service <br>
                                            Entretien et <br>
                                            Restauration
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="/la-mairie/organigramme/service-ecole">
                                            Service <br>
                                            École
                                        </a>
                                    </li>

                                </ul>
                            </li>
                            <li><a class="dropdown-item" href="/la-mairie/finances/finances-communales"> Finances <br>
                                    communales </a></li>
                            <li><a class="dropdown-item" href="#"> Nouveaux arrivants </a> </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> Cadre de vie </a>
                        <ul class="dropdown-menu menu-drop cadre-de-vie">
                            <li><a class="dropdown-item" href="/cadre-de-vie/espaces-verts-biodiversite"> Espaces verts et <br> biodiversité </a></li>
                            <li><a class="dropdown-item" href="/cadre-de-vie/patrimoine"> Patrimoine </a></li>
                            <li><a class="dropdown-item" href="/cadre-de-vie/les-marches"> Les marchés </a></li>
                            <li><a class="dropdown-item" href="/cadre-de-vie/sports-et-loisirs"> Sports et loisirs </a>
                            </li>
                            <li><a class="dropdown-item" href="#"> Culture </a></li>
                            <li><a class="dropdown-item" href="#"> Service public </a></li>
                            <li><a class="dropdown-item" href="/cadre-de-vie/engagements-ecologiques-commune"> Les engagements <br> ecologiques de la <br> commune
                                </a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> En ce moment </a>
                        <ul class="dropdown-menu en-ce-moment menu-drop">
                            <li><a class="dropdown-item" href="/actualites"> Actualités </a></li>
                            <li><a class="dropdown-item" href="#"> Agenda </a></li>
                            <li><a class="dropdown-item" href="#"> Gimont sur <br> les réseaux <br> sociaux </a></li>
                        </ul>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown ">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> Vie pratique </a>
                        <ul class="dropdown-menu vie-pratique menu-drop">
                            <!-- <li><a class="dropdown-item dropdown-toggle" href="/vie-pratique/effectuer-une-demarche"> Effectuer une <br> démarche </a>
                            </li> -->
                            <li><a class="dropdown-item dropdown-toggle" href="#">
                                    Effectuer une <br> démarche </a>
                                <ul class="submenu dropdown-menu vie-pratique">
                                    <li><a class="dropdown-item"
                                            href="/vie-pratique/effectuer-une-demarche/Particulier">Particulier</a></li>
                                    <li><a class="dropdown-item" href="/vie-pratique/effectuer-une-demarche/professionnel">Professionnel</a></li>
                                    <li><a class="dropdown-item" href="/vie-pratique/effectuer-une-demarche/responsable-d-association">Responsable D'association</a></li>
                                </ul>
                            </li>
                            <li><a class="dropdown-item" href="/vie-pratique/vie-associative">Vie Associative </a></li>
                            <li><a class="dropdown-item" href="/vie-pratique/se-deplacer-et-stationner"> Se déplacer et <br> stationner </a></li>
                            <li>
                                <a class="dropdown-item" href="#"> Prévention et <br> sécurité </a>
                                <ul class="submenu dropdown-menu vie-pratique">
                                    <li><a class="dropdown-item" href="">Police municipale</a></li>
                                    <li><a class="dropdown-item"
                                            href="/vie-pratique/prevention-et-securite/risques-majeurs">Risques majeurs</a>
                                    </li>
                                    <li><a class="dropdown-item" href="">Voisin vigileants</a></li>
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-item dropdown-toggle" href="/vie-pratique/grandir-et-etudier/"> Grandir
                                    et <br> étudier </a>
                            </li>
                            <li><a class="dropdown-item dropdown-toggle" href="#"> Solidarité et <br> santé </a>
                                <ul class="submenu dropdown-menu vie-pratique">
                                    <li><a class="dropdown-item" href="">Sénior</a></li>
                                    <li><a class="dropdown-item" href="">Personne en <br> situation de <br> handicap</a>
                                    </li>
                                    <li><a class="dropdown-item" href="">Jeunes <br> adultes</a></li>
                                    <li><a class="dropdown-item" href="">Jeunes <br> besoins <br> spécifiques</a></li>
                                    <li><a class="dropdown-item" href="">Maison Pep's</a></li>
                                </ul>
                            </li>
                            <li><a class="dropdown-item" href="/vie-pratique/collecte-et-proprete"> Collecte et <br> propreté </a></li>
                            <li><a class="dropdown-item" href="https://www.vie-economique-gimont.fr/" target="_blank">
                                    Commerçants <br> et Artisans </a></li>
                            <li>
                                <a class="dropdown-item" href="#"> Urbanisme </a>
                                <ul class="submenu dropdown-menu vie-pratique">
                                    <li><a class="dropdown-item"
                                            href="/vie-pratique/urbanisme/effectuer-une-demarche">Effectuer une démarche</a>
                                    </li>
                                    <li><a class="dropdown-item" href="/vie-pratique/urbanisme/erp">ERP</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> Loisirs </a>
                        <ul class="dropdown-menu loisirs menu-drop">
                            <li>
                                <a class="dropdown-item dropdown-toggle" href="/loisirs/grands-evenements">
                                    Les grands <br>
                                    évènement <br>
                                    annuels
                                </a>
                            </li>
                            <li><a class="dropdown-item dropdown-toggle" href="#"> Sport et <br> loisirs </a>
                                <ul class="submenu dropdown-menu loisirs">
                                    <li><a class="dropdown-item" href="/loisirs/sports-et-loisirs/city-park">City park</a>
                                    </li>
                                    <li><a class="dropdown-item" href="/loisirs/sports-et-loisirs/P’tit-velodrome">Le P’tit
                                            vélodrome</a></li>
                                    <li><a class="dropdown-item" href="/loisirs/sports-et-loisirs/piscine">Piscine</a></li>
                                    <li><a class="dropdown-item" href="/loisirs/sports-et-loisirs/foot">Foot</a></li>
                                    <li><a class="dropdown-item" href="/loisirs/sports-et-loisirs/rugby">Rugby</a></li>
                                    <li><a class="dropdown-item" href="/loisirs/sports-et-loisirs/tennis">Tennis</a></li>
                                    <li><a class="dropdown-item" href="/loisirs/sports-et-loisirs/boulodrome">Boulodrome</a></li>
                                    <li><a class="dropdown-item" href="/loisirs/sports-et-loisirs/capucins">Capucins</a></li>
                                    <li><a class="dropdown-item" href="/loisirs/sports-et-loisirs/gymnase">Gymnases</a></li>
                                    <li><a class="dropdown-item" href="/loisirs/sports-et-loisirs/lac">Le lac</a></li>
                                    <li><a class="dropdown-item" href="/loisirs/sports-et-loisirs/pala">La pala</a></li>
                                </ul>
                            </li>
                            <li><a class="dropdown-item dropdown-toggle" href="#"> Culture </a>
                                <ul class="submenu dropdown-menu loisirs">
                                    <li><a class="dropdown-item" href="/loisirs/culture/atelier-122">Atelier 122</a></li>
                                    <li><a class="dropdown-item" href="/loisirs/culture/cinema">CINEMA 3 CAG </a></li>
                                    <li><a class="dropdown-item" href="/cadre-de-vie/patrimoine">Les sites du patrimoine</a>
                                    </li>
                                    <li><a class="dropdown-item" href="/loisirs/culture/bibliotheque">Bibliotheque</a></li>
                                </ul>
                            </li>
                            <li>
                                <a class="dropdown-item dropdown-toggle" href="http://www.tourisme-3cag-gers.com/"
                                    target="_blank"> Tourisme </a>
                            </li>

                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link  dropdown-toggle" href="#" data-toggle="dropdown"> Je suis ...
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right je-suis menu-drop">
                            <li><a class="dropdown-item" href="#"> Jeune parent</a></li>
                            <li><a class="dropdown-item" href="#"> Sénior</a></li>
                            <li><a class="dropdown-item" href="#"> Touriste </a></li>
                            <li><a class="dropdown-item" href="#"> Professionnel </a></li>
                            <li><a class="dropdown-item" href="#"> Nouvel arrivant </a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa-regular fa-envelope"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                </ul>

            </div> <!-- navbar-collapse.// -->

        </nav>
    </section>
</template>

<script>
// import MenuXs from '~/components/MenuXs.vue';
import MobileMenu from '@/components/MobileMenu.vue';

export default {
    data() {
        return {
            showMenu: false
        }
    },
    mounted() {

        $(document).on('click', '.dropdown-menu', function (e) {
            e.stopPropagation();
        });


        if ($(window).width() < 992) {
            $('.dropdown-menu a').click(function (e) {
                e.preventDefault();
                if ($(this).next('.submenu').length) {
                    $(this).next('.submenu').toggle();
                }
                $('.dropdown').on('hide.bs.dropdown', function () {
                    $(this).find('.submenu').hide();
                })
            });
        }

        $('.dropdown').on('show.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
        });

        $('.dropdown').on('hide.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
        });

        // document.addEventListener("DOMContentLoaded", function (event) {
        //     var height = 0;

        //     window.addEventListener('scroll', function (event) {
        //         height = window.scrollY;
        //         if (height >= 10) {
        //             document.getElementById("navbar").style.backgroundColor = "#F6F6F6";
        //             // document.getElementById("arianne").style.zIndex = "1";
        //         } else {
        //             document.getElementById("navbar").style.backgroundColor = "transparent";
        //             // document.getElementById("arianne").style.zIndex = "2";
        //         }
        //     });
        // });

        // $(window).resize(function () {
        //     if ($(window).width() < 1000) {
        //         $("#myDiv").show();
        //     } else {
        //         $("#myDiv").hide();
        //     }
        // });
    },
    components: { MobileMenu }
}
</script>

<style >
.navbar-gimont {
    height: 157px;
    background-color: #F6F6F6;
    position: fixed;
    width: 100vw;
    /* padding: 32px 0px; */
    top: 0;
    z-index: 2;
}

#main_nav {
    height: 80px;
    margin: 0 6rem;
}

.logo-gimont {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 100%;
}

.navbar-dark .navbar-nav .nav-link,
.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus {
    /* font-family: 'finalSixMedium'; */
    color: black;

}

.navbar-nav {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.dropdown-toggle::after {
    display: none;
}

.dropdown-menu li {
    padding: 10px;
}

.dropdown-item {
    text-align: center;
}

.mairie {
    background-color: #D7AA7A;
}

.mairie li:hover {
    background-color: #D7AA7A;
}

.mairie .dropdown-item {
    background-color: transparent;
    color: white;
}

.mairie .dropdown-item:hover,
.cadre-de-vie .dropdown-item:hover,
.en-ce-moment .dropdown-item:hover,
.vie-pratique .dropdown-item:hover,
.loisirs .dropdown-item:hover,
.je-suis .dropdown-item:hover {
    background-color: transparent;
    color: black;
}

.mairie .dropdown-item:focus,
.mairie .dropdown-item:hover .mairie .dropdown-menu>li:hover a {
    background-color: #D7AA7A;
    color: white;
}

.cadre-de-vie {
    background: rgb(180, 123, 108);
}


.en-ce-moment {
    background: #3D7A87;
}

.vie-pratique {
    background: #85735D;
}

.loisirs {
    background: #F5CB38;
}

.je-suis {
    background-color: #B93239;
}


.dropdown-menu li a {
    color: white;
}

.menu-drop {
    transform: translate3d(0px, 58px, 0px) !important;
}

.nav-item .submenu {
    transform: translate3d(0px, 10px, 0px);
}


@media (min-width: 992px) {


    .dropdown-menu .dropdown-toggle:after {
        border-top: .3em solid transparent;
        border-right: 0;
        border-bottom: .3em solid transparent;
        border-left: .3em solid;
    }

    .dropdown-menu .dropdown-menu {
        margin-left: 0;
        margin-right: 0;
    }

    .dropdown-menu li {
        position: relative;
    }

    .nav-item .submenu {
        display: none;
        position: absolute;
        left: 100%;
        top: -7px;
    }

    .nav-item .submenu-left {
        right: 100%;
        left: auto;
    }

    /* .dropdown-menu>li:hover {
        background-color: #f1f1f1
    } */

    .dropdown-menu>li:hover>.submenu {
        display: block;
    }
}

@media (max-width: 992px) {
    .navbar-gimont {
        height: auto;
    }

    .logo-gimont {
        position: initial;
        transform: initial;
    }

    .navbar-nav {
        width: 100%;

    }
}


</style>