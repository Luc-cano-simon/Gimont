<template>
    <section>
        <div class="select-box">
            <div class="select-box__current" tabindex="1">
                <div class="select-box-value">
                    <input class="select-box-input" type="radio" id="0" value="1" name="Ben" checked="checked" />
                    <p class="select-box-input-text">Je suis ...</p>
                </div>
                <div class="select-box-value">
                    <input class="select-box-input" type="radio" id="1" value="2" name="Ben" />
                    <p class="select-box-input-text">JEUNE PARENT</p>
                </div>
                <div class="select-box-value">
                    <input class="select-box-input" type="radio" id="2" value="3" name="Ben" />
                    <p class="select-box-input-text">SENIOR</p>
                </div>
                <div class="select-box-value">
                    <input class="select-box-input" type="radio" id="3" value="4" name="Ben" />
                    <p class="select-box-input-text">TOURISTE</p>
                </div>
                <div class="select-box-value">
                    <input class="select-box-input" type="radio" id="4" value="5" name="Ben" />
                    <p class="select-box-input-text">PROFESSIONNEL</p>
                </div>
                <div class="select-box-value">
                    <input class="select-box-input" type="radio" id="5" value="6" name="Ben" />
                    <p class="select-box-input-text">NOUVEL ARRIVANT</p>
                </div>
                <i class="fa-regular fa-chevron-down select-box__icon"></i>
                <!-- <img class="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
                    alt="Arrow Icon" aria-hidden="true" /> -->
            </div>
            <ul class="select-box__list">
                
                <li>
                    <label class="select-box__option" for="0" aria-hidden="aria-hidden">------</label>
                </li>
                <li>
                    <label class="select-box__option" for="1" aria-hidden="aria-hidden">JEUNE PARENT</label>
                </li>
                <li>
                    <label class="select-box__option" for="2" aria-hidden="aria-hidden">SENIOR</label>
                </li>
                <li>
                    <label class="select-box__option" for="3" aria-hidden="aria-hidden">TOURISTE</label>
                </li>
                <li>
                    <label class="select-box__option" for="4" aria-hidden="aria-hidden">PROFESSIONNEL</label>
                </li>
                <li>
                    <label class="select-box__option" for="5" aria-hidden="aria-hidden">NOUVEL ARRIVANT</label>
                </li>
            </ul>
        </div>

    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
section{
    padding: 0;
}
.select-box {
    position: relative;
    display: block;
    width: 250px;
    margin: 0 auto;
    font-family: "finalSix2", sans-serif;
    font-size: 18px;
    color: #60666d;
}

.select-box__current {
    position: relative;
    box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    outline: none;
}

.select-box__current:focus+.select-box__list {
    opacity: 1;
    -webkit-animation-name: none;
    animation-name: none;
}

.select-box__current:focus+.select-box__list .select-box__option {
    cursor: pointer;
}

.select-box__current:focus .select-box__icon {
    transform: translateY(-50%) rotate(180deg);
}

.select-box__icon {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 20px;
    /* opacity: 0.3; */
    transition: 0.7s ease;
    color: white;
}

.select-box-value {
    display: flex;
}

.select-box-value p{
    text-transform: uppercase;
    background-color: #B93239;
    color: white;
}
/* .select-box-value img{
    color: white;
} */

.select-box-input {
    display: none;
}

.select-box-input:checked+.select-box-input-text {
    display: block;
}

.select-box-input-text {
    display: none;
    width: 100%;
    margin: 0;
    padding: 15px;
    background-color: #fff;
}

.select-box__list {
    position: absolute;
    width: 100%;
    padding: 0;
    list-style: none;
    opacity: 0;
    -webkit-animation-name: HideList;
    animation-name: HideList;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-timing-function: step-start;
    animation-timing-function: step-start;
    box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
    z-index: 1;
}

.select-box__option {
    display: block;
    padding: 15px;
    background-color: #fff;
}

.select-box__option:hover,
.select-box__option:focus {
    color: #546c84;
    background-color: #fbfbfb;
}

.select-box label{
    margin-bottom: 0;
}



@-webkit-keyframes HideList {
    from {
        transform: scaleY(1);
    }

    to {
        transform: scaleY(0);
    }
}

@keyframes HideList {
    from {
        transform: scaleY(1);
    }

    to {
        transform: scaleY(0);
    }
}




</style>