<template>
    <div class="background">
        <div class="associations">
            <div class="contenu-page">
                <h1 class="text-center">Liste des associations </h1>
                <div class="z-3 pb-10 md-pb-10">
                    <div class="controls po-control-one text-center mb-50 md-mb-50 mt-50 md-mt-60 link">
                        <button type="button" :class="`control  ${isActive === 'all' ? 'active' : ''}`"
                            @click="handleItem('all')">
                            Toutes les associations
                        </button>
                        <button type="button" :class="`control animations  ${isActive === 'animations' ? 'active' : ''}`"
                            @click="handleItem('animations')">
                            Animation
                        </button>
                        <button type="button" :class="`control culture  ${isActive === 'culture' ? 'active' : ''}`"
                            @click="handleItem('culture')">
                            Culture
                        </button>
                        <button type="button" :class="`control divers ${isActive === 'divers' ? 'active' : ''}`"
                            @click="handleItem('divers')">
                            Divers
                        </button>
                        <button type="button" :class="`control loisirs ${isActive === 'loisirs' ? 'active' : ''}`"
                            @click="handleItem('loisirs')">
                            Loisirs
                        </button>
                        <button type="button" :class="`control sss ${isActive === 'sss' ? 'active' : ''}`"
                            @click="handleItem('sss')">
                            SOCIAL- Solidarite - Scolaire
                        </button>
                        <button type="button" :class="`control sport ${isActive === 'sport' ? 'active' : ''}`"
                            @click="handleItem('sport')">
                            Sport
                        </button>
                        <!-- <button type="button" :class="`control ${isActive === 'tad' ? 'active' : ''} `"
                            @click="handleItem('tad')">
                            Transport à la demande
                        </button>
                        <button type="button" :class="`control ${isActive === 'regu' ? 'active' : ''}`"
                            @click="handleItem('regu')">
                            Lignes régulières
                        </button> -->
                    </div>
                </div>
                <div class="p-relative">
                    <div class="shopList">
                        <div 
                        :class="`shopLocation ${isCategoryAnimations(item) ? 'blue-border' : ''} 
                        ${isCategoryCultures(item) ? 'pink-border' : ''} 
                        ${isCategoryDivers(item) ? 'greenLight-border' : ''}
                        ${isCategoryLoisirs(item) ? 'orange-border' : ''}
                        ${isCategorySss(item) ? 'green-border' : ''}
                        ${isCategorySport(item) ? 'lightblue-border' : ''}
                        
                        `
                        "
                        
                            v-for="item in filteredItems">
                            <div class="shopCard">
                                <h2>{{ item.Name }}</h2>
                                <p 
                                    :class="`yellowPara ${isCategoryAnimations(item) ? 'colorB' : ''}
                                    ${isCategoryCultures(item) ? 'colorP' : ''}
                                    ${isCategoryDivers(item) ? 'colorGl' : ''}
                                    ${isCategoryLoisirs(item) ? 'colorO' : ''}
                                    ${isCategorySss(item) ? 'colorG' : ''}
                                    ${isCategorySport(item) ? 'colorLb' : ''}`" 
                                    >{{ item.Cat }}
                                </p>

                                <p 
                                    :class="`yellowPara ${isCategoryAnimations(item) ? 'colorB' : ''}
                                    ${isCategoryCultures(item) ? 'colorP' : ''}
                                    ${isCategoryDivers(item) ? 'colorGl' : ''}
                                    ${isCategoryLoisirs(item) ? 'colorO' : ''}
                                    ${isCategorySss(item) ? 'colorG' : ''}
                                    ${isCategorySport(item) ? 'colorLb' : ''}
                                    `" 

                                    >
                                    {{ item.President1 }}
                                </p>
                                <p v-if="item.President2"  
                                :class="`yellowPara ${isCategoryAnimations(item) ? 'colorB' : ''}
                                    ${isCategoryCultures(item) ? 'colorP' : ''}
                                    ${isCategoryDivers(item) ? 'colorGl' : ''}
                                    ${isCategoryLoisirs(item) ? 'colorO' : ''}
                                    ${isCategorySss(item) ? 'colorG' : ''}
                                    ${isCategorySport(item) ? 'colorLb' : ''}
                                    `" >{{ item.President2 }}</p>
                                <p> {{ item.Adresse }} - {{ item.cp }} - {{ item.ville }} </p>

                                <div class="communications">
                                    <a v-if="item.mobile" :href="'tel:' + item.mobile" :title="item.mobile"><i
                                            class="fa-solid fa-mobile"></i></a>
                                    <a v-if="item.fixe" :href="'tel:' + item.fixe" :title="item.fixe"><i
                                            class="fal fa-phone-alt"></i></a>
                                    <a v-if="item.mail" :href="'mailto:' + item.mail" title=""><i
                                            class="fal fa-envelope"></i></a>
                                    <a v-if="item.mail2" :href="'mailto:' + item.mail2" title=""><i
                                            class="fa-solid fa-envelope"></i></a>
                                    <a v-if="item.url" :href="item.url" :title="item.url" target="_blank"><i
                                            class="fa-solid fa-globe"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    

<script>
import Asso from 'static/json/association.json';
export default {
    data() {
        return {
            items: Asso,
            isActive: 'all',
        };
    },
    computed: {
        filteredItems() {
            if (this.isActive === 'all') {
                return this.items;
            } else {
                return this.items.filter(item => item.Cat === this.isActive);
            }
        },
    },

    methods: {
        handleItem(category) {
            if (category !== this.isActive) {
                this.isActive = category;
            }
        },
        isCategoryActive(category) {
            return this.isActive === category;
        },
        isCategoryActiveWithBorder(category) {
            const isActive = this.isCategoryActive(category);
            if (isActive) {
                // Apply different border colors for each category.
                switch (category) {
                    case 'animations':
                        return 'active blue-border';
                    case 'culture':
                        return 'active pink-border';
                    // Add more cases for other categories if needed.
                    default:
                        return 'active';
                }
            } else {
                return '';
            }
        },
        isCategoryAnimations(item) {
            return item.Cat === 'animations';
        },
        isCategoryCultures(item) {
            return item.Cat === 'culture';
        },
        isCategoryDivers(item) {
            return item.Cat === 'divers';
        },
        isCategoryLoisirs(item) {
            return item.Cat === 'loisirs';
        },
        isCategorySss(item) {
            return item.Cat === 'sss';
        },
        isCategorySport(item) {
            return item.Cat === 'sport';
        },
    },
    mounted() {

    },
};
</script>

<style scoped>

.associations{
    margin-top:30px;
}
h1 {
    margin:2rem 0;
}

.portfolio-block-two .hover-content h3 a:before {
    display: none;
}

.portfolio-block-two {
    height: 380px;
}

.portfolio-block-two .hover-content {
    background-color: #99E0FE;
}

.po-control-one button.active {
    background: var(--principal);
    /* color: white; */
}

.po-control-one button {
    border: 2px solid var(--principal);
}

button {
    text-transform: uppercase;
}

.box-cat {
    display: flex;
    gap: 1rem;
}

.box-cat img {
    object-fit: none;
}

.box-cat .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}



.btn-orange-outline {
    background-color: transparent;
}

.btn-orange-outline:hover {
    background-color: var(--principal);
}

.link {
    display: flex;
    gap: 1rem;
    margin-bottom: 30px;
    justify-content: space-between;
}

.link a {
    display: flex;
    Color: red;
}

.link button {
    background-color: transparent;
    padding: 30px 0;
    border: 1px solid;
    padding: 10px;
}

.ancre {
    padding-top: 175px;
    margin-top: -175px;
    z-index: -1;
    position: relative;
}

.num-vert {
    z-index: 3;
}


.titre-page {
    text-transform: uppercase;
}

.titre-seconde-couleur,
.yellowPara {
    color: #b47b6c;
}

.shopCard {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.shopList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1em;
}

.shopLocation {
    border: 1px solid #b47b6c;
    position: relative;
    padding: 0.5rem;
    margin: 0 0.4rem 1rem 0;
    /* padding-bottom: 3rem; */
}

.shopLocation h2 {
    text-transform: uppercase;
    font-size: 1.2rem;
    text-align: left;
    width: 60%;
}

.shopLocation p {
    margin: 0;
    padding: 0;
}

.services {
    display: none;
}

.boldPara {
    font-weight: 700;
}

.communications {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;
    font-size: 1.4rem;
}

button:focus{
    outline:none;
}


.blue-border,
.control.animations,
.control.active.animations{
  border: 2px solid #00b0f0 !important;
}


.colorB,
.control.active.animations{
    color:#00b0f0;
}

.pink-border,
.control.culture,
.control.active.culture {
  border: 2px solid #ff99ff;
}
.colorP,
.control.active.culture{
    color:#ff99ff;
}

.greenLight-border,
.control.divers,
.control.active.divers {
  border: 2px solid #89cf39;
}
.colorGl,
.control.active.divers{
    color:#89cf39;
}

.orange-border,
.control.loisirs,
.control.active.loisirs  {
  border: 2px solid #ffc000;
}
.colorO,
.control.active.loisirs{
    color:#ffc000;
}

.green-border
,.control.sss,
.control.active.sss {
  border: 2px solid #77933c;
}
.colorG,
.control.active.sss{
    color:#77933c;
}

.lightblue-border,
.control.sport,
.control.active.sport {
  border: 2px solid #67cae3;
}
.colorLb,
.control.active.sport{
    color:#67cae3;
}

@media screen and (max-width: 1000px) {
    .shopLocation h2 {
        width: 100%;
    }
}
</style>