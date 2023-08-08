<template>
	<div id="arianne" class="arianne">
		<nuxt-link to="/">Accueil</nuxt-link>
		<nuxt-link v-for="(link, index) in crumbs" :key="index" :to="link.path">
			{{ divider }} {{ link.title }}</nuxt-link
		>
	</div>
</template>

<script>
export default {
	props: {
		divider: {
			type: String,
			default: ">",
		},
	},
	computed: {
		crumbs() {
			return this.getValidParams();
		},
	},
	methods: {
		/**
		 * get full route path and split the route on "/"
		 * @function getCurrentPath
		 * @return {String} - return the current path as string
		 */
		getCurrentPath() {
			const fullPath = this.$route.fullPath;
			return fullPath.startsWith("/")
				? fullPath.substring(1).split("/")
				: fullPath.split("/");
		},
		/**
		 * get the valid params of the current route path
		 * @function getValidParams
		 * @return {Array} - return the valid paths
		 */
		getValidParams() {
			let path = "";
			let validParams = [];

			this.getCurrentPath().forEach((param) => {
				const paramWithoutAnchor = param.split("#")[0];
				path = `${path}/${paramWithoutAnchor}`;
				const matchParam = this.$router.match(path);
				if (matchParam.name !== null) {
					validParams.push({
						title: paramWithoutAnchor.replace(/-/g, " "),
						...matchParam,
					});
				}
			});
			return validParams;
		},
	},
};
</script>

<style scoped>
/* .arianne { */
	/* margin: 2em 0 1em;
	text-transform: uppercase;
	font-size: 0.8em; */
	/* margin-top: -65px; */
	/* margin-bottom: 65px; */

/* } */
.arianne > * {
	font-size: 1em;
	font-weight: 500;
	display: contents;
	margin: 0;
	color: var(--title-col);
	transition: all 200ms ease-in-out;
}
.arianne > a:hover {
	color: var(--color-identity);
}
</style>
