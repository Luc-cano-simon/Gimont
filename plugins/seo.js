// FONCTIONNEMENT
// La variable data doit être sous la forme :
// { description: 'variableDesc', img: "/monimage.jpg", keywords : 'keywords', title = "titre", path: 'url' }
// this.$seo({ description : 'variableDesc', img:"/monimage.jpg", keywords : 'keywords',  title ="titre", path:'url' })
// aller dans le fichier .env en racine pour definir les valeurs par default
export default (context, inject) => {
	const seo = (data) => {
		if (!data) {
			console.error("plugin SEO error : ");
			console.error("this.$seo({}) et non this.seo() ");
			return {
				title: "ERREUR SEO",
			};
		}
		// console.log(data);
		const title = data.title || context.$config.seo_titre;
		const description = data.description || context.$config.seo_description;
		const image = data.img || context.$config.seo_img;
		const keywords = data.keywords || context.$config.seo_keywords;
		const path = data.path || context.$config.site_path;
		const domain = context.$config.site_domain;
		const category = context.$config.seo_category;
		const site_theme_color = context.$config.seo_color;
		let canonical = {};
		if (data.canonical) {
			canonical = {
				hid: "canonical",
				rel: "canonical",
				href: data.canonical,
			};
		}

		return {
			title: title,
			link: [
				canonical,
				{
					rel: "apple-touch-icon",
					type: "image/x-icon",
					href: "/icons/apple-icon.png",
				},
				{
					rel: "apple-touch-icon",
					type: "image/x-icon",
					sizes: "57x57",
					href: "/icons/apple-icon-57x57.png",
				},
				{
					rel: "apple-touch-icon",
					type: "image/x-icon",
					sizes: "60x60",
					href: "/icons/apple-icon-60x60.png",
				},
				{
					rel: "apple-touch-icon",
					type: "image/x-icon",
					sizes: "72x72",
					href: "/icons/apple-icon-72x72.png",
				},
				{
					rel: "apple-touch-icon",
					type: "image/x-icon",
					sizes: "76x76",
					href: "/icons/apple-icon-76x76.png",
				},
				{
					rel: "apple-touch-icon",
					type: "image/x-icon",
					sizes: "114x114",
					href: "/icons/apple-icon-114x114.png",
				},
				{
					rel: "apple-touch-icon",
					type: "image/x-icon",
					sizes: "120x120",
					href: "/icons/apple-icon-120x120.png",
				},
				{
					rel: "apple-touch-icon",
					type: "image/x-icon",
					sizes: "144x144",
					href: "/icons/apple-icon-144x144.png",
				},
				{
					rel: "apple-touch-icon",
					type: "image/x-icon",
					sizes: "152x152",
					href: "/icons/apple-icon-152x152.png",
				},
				{
					rel: "apple-touch-icon",
					type: "image/x-icon",
					sizes: "180x180",
					href: "/icons/apple-icon-180x180.png",
				},
			],
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ "http-equiv": "Content-Language", content: "fr-FR" },
				{ name: "apple-mobile-web-app-capable", content: "yes" },
				{ name: "theme-color", content: site_theme_color },
				{ name: "category", content: category },
				{
					hid: "title",
					name: "title",
					content: title,
				},
				{
					hid: "twitter:title",
					name: "twitter:title",
					property: "twitter:title",
					content: title,
				},
				{
					hid: "og:title",
					name: "og:title",
					property: "og:title",
					content: title,
				},
				{
					hid: "keywords",
					name: "keywords",
					name: "keywords",
					content: keywords,
				},
				{
					hid: "description",
					name: "description",
					property: "description",
					content: description,
				},
				{
					hid: "og:description",
					name: "og:description",
					property: "og:description",
					content: description,
				},
				{
					hid: "twitter:description",
					name: "twitter:description",
					property: "twitter:description",
					content: description,
				},
				// LIEN
				{
					hid: "og:url",
					name: "og:url",
					property: "og:url",
					content: path,
				},
				{
					hid: "twitter:url",
					name: "twitter:url",
					property: "twitter:url",
					content: path,
				},
				{
					hid: "twitter:domain",
					property: "twitter:domain",
					name: "twitter:domain",
					content: domain,
				},
				// IMAGE
				{
					hid: "og:image",
					name: "og:image",
					property: "og:image",
					content: image,
				},
				{
					hid: "twitter:image",
					name: "twitter:image",
					property: "twitter:image",
					content: image,
				},
				{
					hid: "twitter:image:src",
					name: "twitter:image:src",
					property: "twitter:image:src",
					content: image,
				},
				// image options
				{
					hid: "og:image:type",
					property: "og:image:type",
					name: "og:image:type",
					content: "image/jpeg",
				},
				{
					hid: "og:image:width",
					name: "og:image:width",
					property: "og:image:width",
					content: "2000",
				},
				{
					hid: "og:image:height",
					property: "og:image:height",
					name: "og:image:height",
					content: "1080",
				},
				{
					hid: "og:locale",
					property: "og:locale",
					name: "og:locale",
					content: "fr",
				},
				{
					hid: "twitter:card",
					property: "twitter:card",
					name: "twitter:card",
					content: "summary_large_image",
				},
				{ hid: "og:type", property: "og:type", name: "og:type", content: "website" },
				// { hid: "geo.region", name: "geo.region", content: "FR-32" },
			],
		};
	};
	// const seo = (msg) => console.log(`Hello ${msg}!`);
	// Inject $hello(msg) in Vue, context and store.
	inject("seo", seo);
};
