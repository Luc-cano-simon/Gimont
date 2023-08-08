<template>
    <section class="TheFooter">
        <div class="footersLinks">
            <div class="adress">
                <div class="footersLogos">
                    <img src="/img/logos/logo_footer.png" alt="Logo Gimont">
                </div>
                <p>
                    85 rue Nationale <br>
                    32200 Gimont
                </p>
                <a href="http://www.gimont.fr/" title="site de la Mairie de Gimont">http://www.gimont.fr/</a>
                <a href="tel:0562677005" title="N° de téléphone Mairie de Gimont">05 62 67 70 02</a>
                <a href="mailto:contact@gimont.fr" title="N° de téléphone Mairie de Gimont">contact@gimont.fr</a>
            </div>
            <div class="linksF horaires">
                <strong> Lundi, mardi, jeudi : </strong> <br>
                8h-12h30 / 13h30-17h
                <br>
                <br>
                <strong>mercredi: </strong> <br>
                8h-12h00
                <br>
                <br>
                <strong>Vendredi:</strong> <br>
                8h-12h30 / 13h30-16h
            </div>
            <div class="linksF">
                <a href="" title="Mentions légales">Mentions légales</a>
                <a href="" title="Plan du site">Plan du site</a>
                <a href="" title="Crédits">Crédits</a>
                <a href="" title="Presse">Presse</a>
                <a href="" title="Accessibilité">Accessibilité</a>
                <a href="" title="Politique de confidentialité">Politique de confidentialité</a>
            </div>
            <div class="linksF ">

                <div class="rsx__scx">
                    <!-- <a href="">
                        <i class="fa-brands fa-twitter"></i>
                    </a> -->
                    <a href="https://www.facebook.com/mairiedegimont/?locale=fr_FR" target="_blank">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <!-- <br>
                    <a href="">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands fa-pinterest-p"></i>
                    </a> -->
                </div>
            </div>

        </div>
    </section>
    <!-- <div class="copyright">
		<p>Tous droits réservés - CGU - Copyright <a href="https://www.graphibox.biz/" target="_blanck">Graphibox</a>
			2022</p>
	</div> -->
</template>
<script setup></script>
<style>
.linksF h3 {
    text-transform: uppercase;
    color: #2C3641;
    font-weight: bold;
    text-align: center;
}


/* 
.footersFoot {
    
	background: #85735D;
	padding: 1.8em 0;
	font-weight: 500;
} */

.TheFooter {
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
    background-color: rgb(203 190 175);
    position: relative;
}

.TheFooter section {
    display: flex;
}

.TheFooter section>* {
    flex: 5;
}

.copyright {
    background-color: #276052;
    color: white;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;

}

.copyright>p>a {
    color: #2ec5ce;
    transition: transform .4s;
}



/* ******************************************************************************* */
/* ******************************************************************************* */
.footersLinks {
    display: flex;
    align-items: center;
    padding: 0rem 10rem;
}

.footersLinks:nth-child(1) {
    margin: 0;
}

.footersLinks>* {
    flex: 1;
    color: white;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    text-align: center;
    margin: 2rem;
    /* height: 170px; */
}

.footersLinks .adress {
    flex: 1;
    padding-left: 5%;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.footersLinks h3 {
    font-size: 1em;
    text-transform: uppercase;

}

.footersLinks a,
.footersLinks .adress span,
.linksF p {
    display: block;
    /* margin-bottom: 1em; */
    font-weight: 500;
    font-size: 18px;
}

.footersLinks .adress a,
.footersLinks .adress span {
    margin-bottom: 0;
}

.linksF a {
    transition: transform .4s;
}

.linksF a:hover {
    transform: scale(1.1);
    color: white;
}

.footersLogos {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1em;
    height: 100%;
    margin-top: 1.5rem;
}

.footersLogos img {
    display: block;
    margin-bottom: 2rem;
    border-bottom: 1px solid;
    padding-bottom: 2rem;
}

.footersFoot * {
    white-space: nowrap;
}

.rsx__scx {
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
}

.rsx__scx a {
    text-decoration: none;
}

.rsx__scx i {
    margin-right: 1rem;
    font-size: 30px;
    background-color: white;
    color: #448575;
    padding: 8px;
    transition: 1s;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.rsx__scx i:hover {
    transition: transform 0.4s ease-out;
    transform: rotateZ(360deg);
}

.rsx__scx .fa-twitter:hover {
    background-color: #00ACEE;
    color: white;
}

.rsx__scx .fa-linkedin-in:hover {
    background-color: #0077b5;
    color: white;
}

.rsx__scx .fa-facebook-f:hover {
    background-color: #3b5998;
    color: white;
}

.rsx__scx .fa-pinterest-p:hover {
    background-color: #c8232c;
    color: white;
}

.rsx__scx .fa-instagram:hover {
    background: #f09433;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f09433', endColorstr='#bc1888', GradientType=1);
    color: white;
}

.rsx__scx i.fa-facebook-f {
    padding: 8px 13px;
}

.contact:hover {
    color: var(--identity-color);
}

.horaires {
    font-size: 16px;
}

@media all and (max-width: 2000px) {
    .footersLinks .adress {
        padding-left: 0;
    }

    .tiensAuJus .taj_bigtxt {
        font-size: 1.5em;
    }
}

@media all and (max-width: 1800px) {
    .TheFooter section .tiensAuJus {
        padding: 3em 4em;
    }
}

@media all and (max-width: 1500px) {
    .TheFooter section .tiensAuJus {
        padding: 2em;
    }
}

@media all and (max-width: 1400px) {
    .TheFooter section {
        flex-direction: column;
    }

    .TheFooter section>* {
        flex: unset;
        /* width: 100%; */
    }

    .TheFooter section .tiensAuJus {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        order: -1;
        flex: unset;
    }

    .TheFooter section .tiensAuJus>* {
        margin-right: 1em;
    }
}

@media all and (max-width: 1300px) {
    .footersLinks {
        flex-wrap: wrap;
    }


    .footersLinks .linksF {
        flex: unset;
        width: calc(100% - 1em);
        /* order: -1; */
        padding: 0 0.5em;
        text-align: center;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }

    .footersLogos img {
        margin-top: 2rem;
    }
}



@media all and (max-width: 1000px) {
    /* .footersLinks {
        flex-wrap: wrap;
    } */


    .footersLinks h3 {
        margin-top: 1em;
    }

    .footersLinks a {
        display: inline-flex;
        padding-right: 1em;
    }

    .TheFooter .footersFoot * {
        white-space: normal;
    }

    .footersFoot .autoML {
        margin-left: unset;
    }
}

@media all and (max-width: 600px) {
    .TheFooter section .tiensAuJus>* {
        margin-right: 0;
    }

    .inputNewsletter {
        flex-direction: column;
        width: 100%;
    }

    .inputNewsletter input {
        width: calc(100% - 20px);
    }

    .inputNewsletter button {
        padding: 15px 20px;
        width: fit-content;
        margin: auto;
        margin-top: 10px;
    }

    .footersLogos img {
        margin: 0;
    }

    .footersLogos {
        flex-wrap: wrap;
    }
}

@media all and (max-width: 600px) {
    .TheFooter {
        padding: 0 !important;
    }
}

@media all and (max-width: 1300px) {
    .TheFooter {
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
        /* background-color: #85735d94; */
        background-color: rgb(203 190 175);
        /* padding: 11rem; */
        /* position: relative; */
    }

    .footersLinks {
        padding: 0;
    }
}
</style>
