<template>
    <div id="rendez-vous" class="">
        <FilArianne />
        <div class="row prise-rdv">
            <a href="/vie-pratique/effectuer-une-demarche/Particulier">
                <img class="img-fluid back-button" src="/img/pages/cadre-de-vie/patrimoine/back-button.png"
                    alt="Bouton retour">
            </a>
            <div class="rendez-vous col-xl-3">
                <h3>RENDEZ VOUS EN LIGNE</h3>
                <p>
                    Assurez vous d’être sur notre site internet <br>
                    de démarches d’état civil dont l’adresse <br>
                    doit commencer par :
                </p>
                <a href="https://www.espace-citoyens.net/gimont" title="Espace citoyen de Gimont"
                    target="blanck">https://www.espace-citoyens.net/gimont</a> <br>
                <!-- <label for="choisir-option">Choisissez une option :</label><br> -->
                <select id="choisir-option">
                    <option selected>Motif du rendez-vous </option>
                    <option class="selected" value="option1">Carte d'identité</option>
                    <option class="selected" value="option2">Passeport</option>
                    <!-- <option class="selected" value="option3">Option 3</option> -->
                </select>
            </div>
            <div class="calendrier col-xl-3">
                <div>
                    <h3>CHOISIR UNE DATE</h3>
                    <calendar />
                </div>
            </div>
            <div class="heures col-xl-3">
                <table>
                    <tr>
                        <th>Lun. <br> 9 juin</th>
                        <th>mar. <br> 10 juin</th>
                        <th>meer. <br> 11 juin</th>
                        <!-- <th>jeu. <br> 12 juin</th>
                        <th>ven. <br> 13 juin</th> -->
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>
                            <a class="horaire">9h00</a>
                        </td>
                        <td>-</td>
                        <!-- <td>-</td>
                        <td>
                            <a class="horaire">15h00</a>
                        </td> -->
                    </tr>
                    <tr>
                        <td>
                            <a class="horaire">14h00</a>
                        </td>
                        <td>-</td>
                        <td>-</td>
                        <!-- <td>-</td>
                        <td>
                            <a class="horaire">16h00</a>
                        </td> -->
                    </tr>
                    <tr>
                        <td>
                            <a class="horaire"> 15h00 </a>
                        </td>
                        <td>-</td>
                        <td>
                            <a class="horaire">11h00</a>
                        </td>
                        <!-- <td>-</td>
                        <td>
                            <a class="horaire">17h00</a>
                        </td> -->
                    </tr>
                    <tr>
                        <td>
                            <a class="horaire">16h00</a>
                        </td>
                        <td>
                            <a class="horaire">14h00</a>
                        </td>
                        <td>-</td>
                        <!-- <td>-</td>
                        <td>-</td> -->
                    </tr>
                    <!-- ... -->
                </table>
            </div>
            <div class="formulaire col-xl-3">
                <h3>FORMULAIRE DE COLLECTE DE DONNÉES</h3>
                <p>
                    <i>
                        Merci de renseigner les champs suivants. Un email vous sera envoyé afin de confirmer votre
                        rendez-vous avec l’un de nos agents.
                    </i>
                </p>
                <form>
                    <input type="text" id="last-name" name="last-name" placeholder="Nom">
                    <input type="text" id="first-name" name="first-name" placeholder="Prénom">
                    <input type="email" id="email" name="email" placeholder="Adresse e-mail :"><br>
                    <p>
                        Conformément à la législation en vigueur, remplir ce formulaire entraîne le traitement de vos
                        données personnelles par la Mairie de Gimont. En savoir plus sur la gestion de vos données et
                        vos droits.
                    </p>
                    <div class="d-flex-center">
                        <input type="submit" value="Confirmer">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
#rendez-vous {
    min-height: 100vh;
    background-color: #AEA294;
    padding-top: 100px;
    margin-bottom: -150px;
    padding-bottom: 240px;
    margin-top: 15px;
}

.d-flex-center {
    display: flex;
    justify-content: center;
}

.back-button {
    position: absolute;
    top: 20px;
    right: 50px;
}

/* Mettre en forme le tableau */
table {
    border-collapse: collapse;
    width: 100%;
    /* margin-left: 8vw; */
}

/* Mettre en forme les cellules */
td,
th {
    /* border: 1px solid #dddddd; */
    text-align: left;
    padding: 8px;
}

/* Mettre en forme l'en-tête du tableau */
th {
    text-align: center;
    /* background-color: #dddddd; */
}

td {
    text-align: center;


}

td a {
    background-color: #1C9FAB;
    color: white;
    padding: 5px;
}

.arianne {
    /* text-transform: uppercase; */
    /* font-size: 0.8em; */
    margin-bottom: 12vh;
    /* margin-left: 8.9vw; */
    margin-top: -16vh
}

.prise-rdv .rendez-vous,
.prise-rdv .calendrier,
.prise-rdv .heures {
    display: flex;
    flex-direction: column;
    font-size: 16px;
}

.prise-rdv {
    margin: 0rem 7.9vw;
    background-color: white;
    padding: 80px 40px;
    position: relative;
}

.calendrier {
    text-align: center;
}

.k-block,
.k-content,
.k-popup,
.k-toolbar,
.k-widget {
    color: #2e2e2e;
    background-color: transparent;
    border: none;
}

select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
}

/* Style the select element when it gets focus */
select:focus {
    background-color: #fff;
}


/* FORMULAIRE  */
/* .formulaire {
    padding-left: 45px;
} */

.formulaire p {
    font-size: 13px;
    margin: 15px 0px;
}

form {
    /* width: 500px; */
    margin: 0 auto;
    text-align: left;
}

label {
    display: block;
    margin: 10px 0;
    font-size: 18px;
}

input[type="text"],
input[type="email"] {
    width: 100%;
    padding: 8px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

input[type="submit"] {
    width: 70%;
    background-color: #d9bb56;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #d9bb56;
}


@media (max-width: 992px) {
    .formulaire {
        padding-left: 0px;
    }
}
</style>


<script>
import FilArianne from '~/components/FilArianne.vue';
// KENDO
import { Calendar } from '@progress/kendo-vue-dateinputs';
// import frMessages from '/kendo/messages/fr-FR.js';
import { load, loadMessages } from '@progress/kendo-vue-intl';
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';
import numbers from 'cldr-numbers-full/main/fr/numbers.json';
import caGregorian from 'cldr-dates-full/main/fr/ca-gregorian.json';
import dateFields from 'cldr-dates-full/main/fr/dateFields.json';
import timeZoneNames from 'cldr-dates-full/main/fr/timeZoneNames.json';

load(
    likelySubtags,
    currencyData,
    weekData, numbers,
    caGregorian,
    dateFields,
    timeZoneNames
);

// import frMessages from '@progress/kendo-ui/js/messages/kendo.messages.fr-FR.js'; 
// loadMessages(frMessages, 'fr-FR');

export default {

    mounted() {
        $(document).ready(function () {
            $('.calendrier').hide();
            $('.heures').hide();
            $('.formulaire').hide();

        });
        // CALENDRIER
        $('.k-calendar-td').click(function () {
            if ($(this).hasClass('k-state-selected')) {
                $('.heures').show();
            } else {
                $('.calendrier').hide();
            }
        });

        // LES HEURES
        $('#choisir-option').change(function () {
            // Récupération de la valeur sélectionnée
            var selectedOption = $(this).val();
            // console.log(selectedOption);
            // Traitement de la valeur sélectionnée
            if (selectedOption == 'option1') {
                $('.calendrier').show();
            } else {
                $('.heures').hide();
                $('.calendrier').hide();
                $('.formulaire').hide();
            }
            $(".horaire").click(function () {
                $(".horaire").removeClass("active");
                // $(".tab").addClass("active"); // instead of this do the below 
                $(this).addClass("active");
                if ($('.horaire').hasClass('active')) {
                    $('.active').css(
                        "background-color", "#827460",
                    );
                } else {
                    $('.active').css(
                        "background-color", "#1C9FAB",
                    );
                }
            });
            // $(".horaire").click(function () {
            // });
        });

        // LE FORMULAIRE
        $('.horaire').click(function () {
            $('.formulaire').show();
        });

        


    },
    components: {
        Calendar,
        FilArianne
    }
};

</script>


