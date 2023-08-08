const redirects = [
	{ from: "/index.html", to: "/" },
	{ from: "/decouvrir-la-romieu-gers.aspx", to: "/" },
	{ from: "/collegiale-la-romieu.aspx", to: "/tourisme-et-loisirs/patrimoine/la-collegiale-st-pierre" },
	{ from: "/village-des-chats.aspx", to: "/" },
	{ from: "/contact-mairie-laromieu.aspx", to: "/contact" },
	{ from: "/decouvrir-la-romieu-gers.aspx", to: "/" },
	{ from: "/ensemble-collegial.aspx", to: "/" },
	{ from: "/mairie-informations.aspx", to: "/" },
	{ from: "/saint-jacques-de-compostelle.aspx", to: "/" },
	{ from: "/vie-municipale-agence-postale-communale.aspx", to: "/" },
	{ from: "/vie-municipale-artisans-commerces-services.aspx", to: "/" },
	{ from: "/vie-municipale-coordonnees-associations.aspx", to: "/" },
	{ from: "/vie-municipale-ecole-pierre-et-marie-curie.aspx", to: "/" },
	{ from: "/vie-municipale-residence-romevienne.aspx", to: "/" },
	{ from: "/vie-municipale-services-mairie.aspx", to: "/" },
	{ from: "/village-des-chats.aspx", to: "/" },
	{ from: "/actualites.aspx", to: "/" },
	{ from: "/actualites/yoga-14153.html", to: "/" } /**Actu detail */,

	// { from: /\/prendre_un_bol_d_air\/(.*)-(.*)\.html/, reg: "/voyage/$1-$2", to: "/" },
	// { from: "/reveillez_ses_papilles.html", to: "/" },
	// { from: /\/reveillez_ses_papilles\/(.*)-(.*)\.html/, reg: "/voyage/$1-$2", to: "/" },
	// { from: "/ou_sejourner.html", to: "/" },
	// { from: /\/ou_sejourner\/(.*)-(.*)\.html/, reg: "/voyage/$1-$2", to: "/" },
	// { from: "/decouverte_du_gers.html", to: "/" },
	// { from: /\/decouverte_du_gers\/(.*)-(.*)\.html/, reg: "/voyage/$1-$2", to: "/" },
	// { from: "/bouger_en_rythme.html", to: "/voyage/agenda-manifestations-78" },
	// { from: /\/bouger_en_rythme\/(.*)-(.*)\.html/, reg: "/voyage/$1-$2", to: "/" },
	// { from: "/experiences_gers_occitanie.html", to: "/gersperiences" },
	// { from: /\/experiences_gers_occitanie\/(.*)-(.*)\.html/, reg: "/gersperiences", to: "/" },
	// { from: /\/(.*)\/(.*)-(.*)\.html/, reg: "/$2-$3", to: "/" } ,
];

module.exports = function (req, res, next) {
	var url = req.url.split("?")[0];
	var urlParams = "";
	if (req.url.includes("?")) {
		urlParams = "?" + req.url.split("?")[1];
	}

	const redirect = redirects.find((r) => {
		if (typeof r.from === "string" || r.from instanceof String) {
			return r.from === url;
		} else if (r.from instanceof RegExp && r.from.test(url)) {
			r.to = url.replace(r.from, r.reg);
			return true;
		}
	});

	if (redirect) {
		res.writeHead(301, {
			Location: redirect.to + urlParams,
		});
		res.end();
	} else {
		next();
	}
};
