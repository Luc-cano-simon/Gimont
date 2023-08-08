<template>
	<div class="errorPage">
		<div class="notFound" v-if="error.statusCode === 404">
			<p class="tac">404</p>
			<p class="tac titleSmall">OOPS! PAGE NON TROUVEE</p>
		</div>

		<div v-else class="tac errorM">
			<p class="superCenter">
				<span
					style="
						font-size: 2em;
						font-style: italic;
						color: var(--color-identity);
					"
					>Erreur !</span
				>
			</p>

			<p v-for="(item, index) in error" :key="index">
				<span style="color: var(--color-identity)">{{ index }}</span> :
				{{ item }}
			</p>
			<!-- {{ error }} -->
		</div>
		<div class="tac ma3">
			<NuxtLink to="/" class="btnHomeError"> Page d'accueil </NuxtLink>
		</div>
	</div>
</template>

<script>
export default {
	props: ["error"],
	layout: "error", // you can set a custom layout for the error page
};
</script>
<style></style>
