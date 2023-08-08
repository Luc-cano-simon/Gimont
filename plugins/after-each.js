/**
 * ACTION OF THE PLUGIN :
 * Permettre des actions à la navigation dans le cas d'une navigation interne (nuxt-link)
 */
export default async ({ app, store, route }) => {
	app.router.afterEach((to, from) => {
		if (store.state.showMenu) {
			store.commit("toggleBoolean", "showMenu");
		}

		// console.log(route.name);
		// console.log(to);
		// if (process.client) {
		// 	document.getElementsByTagName("body")[0].className = route.name;
		// 	// document.getElementsByTagName("body").classList.add(router. )
		// }
	});
};
