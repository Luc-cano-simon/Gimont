const axios = require("axios");
module.exports = {
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: process.env.PUBLIC_TITRE,
		htmlAttrs: {
			lang: "fr",
		},
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.png" },
			{ rel: "manifest", href: "/manifest.json" },
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ name: "robots", content: "index, nofollow" },
			{ "http-equiv": "Content-Language", content: "fr-fr" },
			{ "http-equiv": "Cache-control", content: "public" },
			{
				rel: "stylesheet",
				href: "https://cdn-gbbu02.graphibox.eu/builds/fonts/fontawesome-v6.1.1/fontawesome.all.min.css",
				defer: true,
			},
			{
				rel: "stylesheet",
				href: "https://use.typekit.net/aun4bec.css",
				defer: true,
			},
			{
				rel: "stylesheet",
				href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
				defer: true,
			},
			{
				rel: "stylesheet",
				href: "https://unpkg.com/aos@2.3.1/dist/aos.css",
				defer: true,
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css?family=Rouge Script",
				defer: true,
			},
			{
				rel: "stylesheet",
				href: "https://kendo.cdn.telerik.com/2022.1.119/styles/kendo.common.min.css",
				defer: true,
			},
			{
				rel: "stylesheet",
				href: "https://kendo.cdn.telerik.com/2022.1.119/styles/kendo.default.min.css",
				defer: true,
			},
			{
				rel: "stylesheet",
				href: "https://cdn.jsdelivr.net/npm/magnific-popup@1.1.0/dist/magnific-popup.min.css",
				defer: true,
			},
		],
		script: [
			{
				src: "https://code.jquery.com/jquery-3.6.1.js",
				body: true,
			},
			{
				src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js",
				body: true,
			},
			{
				src: "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js",
				body: true,
			},
			{
				src: "https://unpkg.com/aos@2.3.1/dist/aos.js",
				body: true,
			},
			{
				src: "https://kendo.cdn.telerik.com/2022.1.119/js/kendo.all.min.js",
				body: true,
			},
			{
				src: "https://unpkg.com/@progress/kendo-dateinputs-vue-wrapper/dist/cdn/kendo-dateinputs-vue-wrapper.min.js",
				body: true,
			},
			{
				src: "https://kendo.cdn.telerik.com/2022.1.119/js/kendo.all.min.js",
				body: true,
			},
			{
				src: "https://cdn.jsdelivr.net/npm/magnific-popup@1.1.0/dist/jquery.magnific-popup.min.js",
				body: true,
			},
			{
				type: "text/javascript",
				src: "/js/script.js",
				body: true
			}

		],
	},
	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: ["~/assets/css/style.css", "~/assets/css/zythum.css"],
	css: ["~/assets/css/style.css", "~/assets/css/animation-btn.css"],
	plugins: [
		{ src: "~/plugins/after-each.js", mode: "client" },
		"~/plugins/seo.js",
		"~/plugins/utils.js",
	],
	routes: [
		'/actualite/:title-:id'
	  ],
	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,
	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	// buildModules: ["@/modules/sitemapRouteGenerator"],
	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: ["@nuxtjs/axios", "@nuxt/image", "@nuxtjs/sitemap"],
	image: {
		domains: ["cdn-gbbu02.graphibox.eu"],
		alias: {
			gbbu: "https://cdn-gbbu02.graphibox.eu",
		},
	},
	serverMiddleware: ["~/serverMiddleware/redirects", "~/api"],
	axios: {
		baseURL:
			process.env.NODE_ENV !== "production"
				? "http://localhost:3000"
				: process.env.PUBLIC_SITE_PATH,
	},
	loading: {
		color: "",
		height: "3px",
		continuous: true,
	},
	publicRuntimeConfig: {
		site_path: process.env.PUBLIC_SITE_PATH,
		site_domain: process.env.PUBLIC_SITE_DOMAIN,
		seo_titre: process.env.PUBLIC_TITRE,
		seo_description: process.env.PUBLIC_DESCRIPTION,
		seo_keywords: process.env.PUBLIC_KEYWORDS,
		seo_image: process.env.PUBLIC_IMAGE,
		seo_category: process.env.PUBLIC_SEO_CATEGORY,
		seo_color: process.env.PUBLIC_SEO_COLOR,

		client_adresse: "",
		client_zip: "",
		client_ville: "",
		client_reseau_fb: "",
		client_reseau_twitter: "",
		client_reseau_insta: "",
		client_reseau_yt: "",
		client_reseau_in: "",

		client_tel: "",
		client_mail: "",
		client_horaire: "",
		client_horaire_2: "",
		map_src_romieu: "",
	},
	privateRuntimeConfig: {
		myPrivateToken: process.env.PRIVATE_KEY,
	},
	// go to http://localhost:3000/sitemap.xml
	sitemap: {
		hostname: process.env.PUBLIC_SITE_PATH,
		gzip: true,
		exclude: ["/mentions-legales", "/politique-de-confidentialite"],
	},
};
