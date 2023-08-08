<template>
    <section class="liste__actualites">
        <section class="actualites">
            <div class="container">
                <div class="actualites">
                    <h2>
                        Toutes nos actualités
                    </h2>
                    <div class="box-card">
                        <div v-for="actu in actus">
                            <router-link :to="'/actualites/' + actu.idA">
                                <article class="article-wrapper">
                                    <div class="rounded-lg container-project">
                                        <img class="image-meta" :src="imageUrl(actu.idA, actu.siteIdA, actu.pictureThumbA)"
                                            :alt="actu.titleA" />
                                    </div>
                                    <div class="project-info">
                                        <div class="flex-pr">
                                            <div class="project-title ">{{ actu.titleA }}</div>
                                            <div class="project-hover">
                                                <svg style="color: black;" xmlns="http://www.w3.org/2000/svg" width="2em"
                                                    height="2em" color="black" stroke-linejoin="round"
                                                    stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none"
                                                    stroke="currentColor">
                                                    <line y2="12" x2="19" y1="12" x1="5"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                            </div>
                                        </div>
                                        <!-- <div class="types">
                                       <p v-html="actu.titleSubA"></p>
                                    </div> -->
                                    </div>
                                </article>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return { actus: [] };
    },

    mounted() {

        const idA = this.actus.idA;
        axios({
            method: 'post',
            url: 'https://ws2-gbbu02.graphibox.eu/EpArticles.ws',
            data: { pKey: 'hGTYkkja542a4a54aze731zJHMjhabkapke', pFct: 'GetArticles', pId: idA },
        })
            .then((reponse) => {
                this.actus = reponse.data;
                console.log('mon actu', this.actus);
            })
    },
    methods: {
        imageUrl(idA, siteIdA, imageName) {
            return (
                "https://cdn-gbbu02.graphibox.eu/pub/" +
                siteIdA +
                "/medias/articles/" +
                idA +
                "/" +
                imageName
            ); // 14 -> SITE ID TEST
        },
        cleanString(val) {
            if (val) {
                return val
                    .replace(/&ecirc;/g, "ê")
                    .replace(/&eacute;/g, "é")
                    .replace(/&agrave;/g, "à")
                    .replace(/&rsquo;/g, "'")
                    .replace(/<br\s*\/?>/gi, "")
                    .replace(/r&acirc;/g, "à")
                    .replace(/&icirc;/g, "î")
                    .replace(/<[^>]+>/g, '')
            } else return "";
        },
        formatDynamicRoute(titleA) {
            return titleA.trim().replace(/\s/g, '-').toLowerCase();
        },
    },
    setup() {
        useHead({
            title: 'L\'actualité d\'Aqua Gascogne: nouvelle gamme piscine, accessoires',
            meta: [
                {
                    name: 'description',
                    content: 'L\'actualité des nouvelles tendances des piscines haut de gamme et accessoire, nouvelle gamme de nos prestataires, équipement de piscines'
                },
                {
                    name: 'keywords',
                    content: 'Experts,Actualités Aqua gascogne, Gers'
                },
            ],
        });
    },
}
</script>

<style scoped>
.actualites h2 {
    margin-bottom: 2rem;
}

.container,
.container-lg,
.container-md,
.container-sm,
.container-xl {
    max-width: 1330px !important;
}

.box-card {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.box-card a:hover{
    text-decoration:none;
}
.container-project img {
    vertical-align: middle;
    border-style: none;
    width: 100%;
    object-fit: cover;
    height: 100%;
}

.article-wrapper {
    width: 350px;
    -webkit-transition: 0.15s all ease-in-out;
    transition: 0.15s all ease-in-out;
    border-radius: 10px;
    padding: 5px;
    border: 4px solid transparent;
    cursor: pointer;
    background-color: white;
}

.article-wrapper:hover {
    -webkit-box-shadow: 10px 10px 0 #CBBEAF;
    box-shadow: 10px 10px 0 #CBBEAF;
    border-color: #3D7A87;
    -webkit-transform: translate(-20px, -20px);
    -ms-transform: translate(-20px, -20px);
    transform: translate(-20px, -20px);
}

.article-wrapper:active {
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
}

.types {
    gap: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    place-content: flex-start;
}

.rounded-lg {
    border-radius: 10px;
}

.article-wrapper:hover .project-hover {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    background-color: #a6c2f0;
}

.project-info {
    padding-top: 20px;
    padding: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 20px;
}

.project-title {
    font-size: 22px;
    margin: 0;
    font-weight: 600;
    overflow: hidden;
    color: black;
}

.flex-pr {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.project-type {
    background: #b2b2fd;
    color: #1a41cd;
    font-weight: bold;
    padding: 0.3em 0.7em;
    border-radius: 15px;
    font-size: 12px;
    letter-spacing: -0.6px
}

.project-hover {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 9px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.container-project {
    width: 100%;
    height: 300px;
    /* background: gray; */
}
</style>

