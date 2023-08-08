<template>
	<main class="home-page">
		<!-- <MobileMenu /> -->
		<TheBandeau />
		<En1Clic />
		<Actualites />
		<Agenda />
		<Information />
	</main>
</template>

<script>
import TheBandeau from '~/components/TheBandeau.vue';
import En1Clic from '~/components/En1Clic.vue';
import Actualites from '~/components/Actualites.vue';
import Agenda from '~/components/Agenda.vue';
import Information from '~/components/information.vue';
// import MobileMenu from '~/components/MobileMenu.vue';

export default {
	name: "Home",
	transition: "fade_page",
	head() {
		return this.$seo({});
	},
	components: { En1Clic, Actualites, Agenda, Information,TheBandeau }
};
</script>

<style>

</style>
