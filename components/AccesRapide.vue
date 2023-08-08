<template>
	<section class="AccesRapide">
		<h2 class="site_title">Accès rapide</h2>

		<section class="site_container">
			<a
				v-for="(access, index) in quickAccess"
				:key="index"
				:href="access.link"
				class="ARbtn"
			>
				<nuxt-img
					:src="access.image"
					:alt="access.alternateImage"
					loading="lazy"
					width="60"
					height="60"
				/>
				<span>{{ access.name }}</span>
			</a>
		</section>
	</section>
</template>

<script>
export default {
	name: "AccesRapide",
	data() {
		return {
			quickAccess: [
				{
					image: "/img/icones/unesco.svg",
					name: "Collégiale",
					link: "/patrimoine-et-loisirs/patrimoine/la-collegiale-st-pierre",
					alternateImage: "symbol unesco",
				},
				{
					image: "/img/icones/restaurant.svg",
					name: "Manger / dormir",
					link: "/patrimoine-et-loisirs/ou-manger-ou-dormir",
					alternateImage: "cuillere et fourchette",
				},
				{
					image: "/img/icones/nature.svg",
					name: "Nature et loisirs",
					link: "/patrimoine-et-loisirs/nature-et-loisirs/halte-sur-les-chemins-de-compostelle",
					alternateImage: "Montagnes au couché de soleil",
				},
				{
					image: "/img/icones/agenda.svg",
					name: "Agenda",
					link: "/actualites",
					alternateImage: "calendrier",
				},
				{
					image: "/img/icones/population.svg",
					name: "Avis population",
					link: "/",
					alternateImage: "peronnes en icones",
				},
				{
					image: "/img/icones/sante.svg",
					name: "Santé et solidarité",
					link: "/vivre-et-s-installer/sante-et-solidarite",
					alternateImage: "coeur avec une croix",
				},
				{
					image: "/img/icones/commerce.svg",
					name: "économie locale",
					link: "/vivre-et-s-installer/vie-economique",
					alternateImage: "un commerce",
				},
				{
					image: "/img/icones/ecole.svg",
					name: "école",
					link: "/vivre-et-s-installer/enfance-et-jeunesse#ecole",
					alternateImage: "une ecole",
				},
				{
					image: "/img/icones/demarches.svg",
					name: "demarches en ligne",
					link: "/la-mairie/secretariat-demarches-administratives#demarches-administratives",
					alternateImage: "icone de fichier",
				},
			],
		};
	},
};
</script>

<style>
.AccesRapide .site_container {
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 1em 0 3em;
}
.ARbtn {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1em;
	border-radius: 12px;
	border: 2px #777 solid;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 0.8em;
	width: 100px;
	height: 100px;
	text-align: center;
	background-color: white;
	transition: all 0.2s ease-in-out;

	margin-bottom: 10px;
}
.ARbtn img {
	transition: all 0.2s ease-in-out;

	width: 60px;
	height: 60px;
	padding-bottom: 10px;
	object-fit: contain;
}
.ARbtn:hover {
	background: var(--color-identity);
}
.ARbtn:hover img {
	transform: scale(1.1);
}
@media all and (max-width: 1400px) {
	.AccesRapide .site_container {
		flex-wrap: wrap;
	}
}
</style>
