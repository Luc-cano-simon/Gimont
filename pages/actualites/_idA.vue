<template>
  <section class="detail__actualites">
      <div class="container">
          <div class="toute-notre-actu">
              <a class="btn-rose" href="/actualites">Toutes nos
                  actualités <i class="fa-solid fa-rotate-left"></i></a>
          </div>
          <div v-for="actu in actus" class="centrer__contenu">
              <h2 class="titre-actualites">
                  {{ actu.titleA }}
              </h2>
              <div class="box__card ">
                  <div class="">
                      <div>
                          <img :src="imageUrl(actu.idA, actu.siteIdA, actu.picture01A)" :alt="actu.titleA" />
                          <div class="card-body">
                              <p v-html="actu.describeA"></p>
                              <br>
                              <br>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  data() {
      return {
          actus: [],
          titleAA: '',
          seoDescribeAA: ''
      };
  },

  async asyncData({ params, route }) {
      console.log('params', params)
      console.log('route', route)
      const idA = params.idA;
      console.log('idA', idA)
      try {
          const response = await axios({
              method: 'post',
              url: 'https://ws2-gbbu02.graphibox.eu/EpArticles.ws',
              data: {
                  pKey: 'hGTYkkja542a4a54aze731zJHMjhabkapke',
                  pFct: 'GetArticles',
                  pId: idA
              }
          });
          const actus = response.data;
          const titleAA = actus[0].titleA;
          const seoDescribeAA = actus[0].seoDescribeA;
          return {
              actus,
              titleAA,
              seoDescribeAA
          };
      } catch (error) {
          // Gérer l'erreur et rediriger vers une page d'erreur ou une page 404 si nécessaire
      }
  },
  head() {
      return {
          title: this.titleAA,
          meta: [
              {
                  hid: 'description',
                  name: 'description',
                  content: this.seoDescribeAA
              }
          ]
      }
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
      // head() {
      //     const description =
      //         "Retrouvez les horaires et infos pratiques liées à votre agence postale communale.";
      //     const keywords =
      //         "la poste, la romieu, agence postale, service public, église, gers";
      //     const title = "Agence Postale Communale et mairie La Romieu, Gers 32";
      //     return this.$seo({ title, description, keywords });
      // },
  }
}
</script>

<style scoped>
/* .detail__actualites {
  margin-top: 11rem;
} */

.card {
  border: none;
  margin-top: 0rem;
  font-family: 'Montserrat';
}

h2 {
  font-size: 40px;
  font-weight: bold;
  color: var(--color-1);
  text-transform: uppercase;
  margin-bottom: 2rem;
}

p {
  color: var(--title-col);
  font-weight: 400;
  font-size: 1rem;
}

.card strong {
  font-weight: 700 !important;
}

.toute-notre-actu {
  display: flex;
  justify-content: flex-end;
}

/* .toute-notre-actu a {
  background-color: var(--color-1);
  border: 1px solid var(--color-1);
  padding: 10px;
  margin-top: 1rem;
  color: white;
  display: flex;
  align-items: center;
}

.toute-notre-actu a:hover {
  background-color: white;
  color: var(--color-1);
} */

.btn-rose {
  background-color: #cbbeaf;
  color: white;
  padding: 15px 30px;
  border-radius: 15px;
  text-align: center;
  border: 1px solid transparent;
  font-weight: bold;

  /* "to left" / "to right" - Affectation de la couleur initial */
  background: linear-gradient(to left, #cbbeaf 50%, white 50%) right;
  background-size: 210%;
  transition: .5s ease-out;
}

.btn-rose:hover {
  background-position: left;
  color: #cbbeaf;
  border: 1px solid #cbbeaf;
}

.btn-rose i {
  margin-left: 10px;
  transition: .5s all;
}

.btn-rose:hover i {
  transform: rotate(-360deg);
}


.card img {
  width: 50%;

}
</style>