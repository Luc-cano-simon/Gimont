// FONCTIONNEMENT
// La variable data doit être sous la forme :
// { description: 'variableDesc', img: "/monimage.jpg", keywords : 'keywords', title = "titre", path: 'url' }
// this.$seo({ description : 'variableDesc', img:"/monimage.jpg", keywords : 'keywords',  title ="titre", path:'url' })
// aller dans le fichier .env en racine pour definir les valeurs par default
export default (context, inject) => {
	const utils = {
		async getLocation() {
			return new Promise((resolve, reject) => {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition((position) =>
						resolve({
							coords: {
								accuracy: position.coords.accuracy,
								altitude: position.coords.altitude,
								altitudeAccuracy: position.coords.altitudeAccuracy,
								heading: position.coords.heading,
								latitude: position.coords.latitude,
								longitude: position.coords.longitude,
								speed: position.coords.speed,
								place_name: "",
							},
							timestamp: position.timestamp,
						})
					);
				} else {
					reject(new Error("Browser does not support geolocation!"));
				}
			});
		},
		// detecter si un element DOM est visible à l'écran ou non
		isInViewport(element, distanceBeforeEl = 0) {
			const rect = element.getBoundingClientRect();
			// console.dir(element.getBoundingClientRect());
			return (
				rect.top >= 0 - distanceBeforeEl &&
				rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + distanceBeforeEl &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
		},
		// convertie les url http en https
		httpToHttps(url) {
			url = url?.replace(/^http:\/\//i, "https://");
			return url;
		},
		//fait du tri dans un objet selon un des sous-critères
		// xs le tableau
		// key la clé à regrouper
		// https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects#answers-header
		groupBy(xs, key) {
			return xs.reduce(function (rv, x) {
				(rv[x[key]] = rv[x[key]] || []).push(x);
				return rv;
			}, {});
		},

		stringForUrl(val) {
			if (val) {
				return val
					.trim()
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, "") /*enleve tous les accents*/
					.replace(/[\W]/gi, "-") //enleve TOUS ce qui n'est pas un chiffre ou une lettre ou un  _ et met tous en minuscule
					.replace(/_/g, "-")
					.toLowerCase()
					.replace("--", "-")
					.replace("--", "-")
					.replace("--", "-")
					.replace("--", "-") //repetition de 3 fois la suppression de 2 undescrore se suivant
					.replace(/\-$/, ""); //supprime le dernier -
			} else return "";
		},
		// ajoute/supprime en cookie les id des elements 'liké'
		toggleFavoriteIDtoCookie(item, deletePermission = true) {
			if (item) {
				let val = item + "|";
				let mycookie = this.getCookie("fav");

				if (mycookie) {
					let isStored = mycookie
						.split("|")
						.filter((el) => el !== "")
						.findIndex((el) => el == item);

					if (deletePermission && isStored !== -1) {
						// supprimer
						// separe en tableau et enleve valeur vide
						mycookie = mycookie.split("|").filter((el) => el !== "");
						// filtre l'element à enlever et ressoude l'array
						mycookie = mycookie.filter((el) => el != item).join("|") + "|";
						this.setCookie("fav", mycookie, 182);
					} else if (isStored == -1) {
						// ajouter
						this.setCookie("fav", mycookie + val, 182);
					}
				} else {
					// create cookies
					this.setCookie("fav", val, 182);
				}
			}
		},

		getCookie(cname) {
			var name = cname + "=";
			var ca = document.cookie.split(";");
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == " ") {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return undefined;
		},
		setCookie(cname, cvalue, numberOfDays) {
			var d = new Date();
			d.setTime(d.getTime() + numberOfDays * 24 * 60 * 60 * 1000);
			var expires = "expires=" + d.toUTCString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		},
	};
	// Inject $hello(msg) in Vue, context and store.
	inject("utils", utils);
};
