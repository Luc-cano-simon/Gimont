<template>
	<section id="cookiesPanel" class="CookiesPopUp" :class="showCookies ? null : 'cookiesBehind'">
		<!-- @click.self="CookiesAreAccepted(false)" -->

		<!-- TODO rendre plus précis si autre cookies optionnnel -->
		<div v-if="optionnalScripts">
			<slot></slot>
		</div>

		<section v-if="!choiceStep && showCookies">
			<!-- <i class="closepopup fas fa-times" @click="openClosePanel = false"></i> -->
			<!-- <i>développement en cours...</i> -->

			<span class="cookieTitle">Gérer mes cookies</span>

			<div class="textCookie">
				<p class="cookiesubtitle">Utilisation</p>
				<p>
					Notre site <span v-html="website_name"></span> utilise des cookies pour l'analyse des audiences (Google
					Analytics) afin de nous permettre de mieux comprendre le comportement de nos visiteurs et d'améliorer
					l'expérience utilisateur.
				</p>

				<p class="cookiesubtitle">Conservation</p>
				<p>Nous conservons votre choix pendant 6 mois</p>
			</div>

			<div class="buttonsCookie">
				<div class="perso" @click="choiceStep = true">Personnaliser mes choix</div>
				<div class="refuse" @click="CookiesAreAccepted(false)">Tout refuser</div>
				<div class="accept" @click="CookiesAreAccepted(true)">Tout accepter</div>
			</div>
		</section>

		<section class="choice" v-if="choiceStep && showCookies">
			<div class="cookiesBloc">
				<div>
					<div class="choiceTitle">
						<span>Gérer mes cookies</span>
						<i>Personnalisation des choix</i>
						<br />

						<p>Nous conservons votre choix pendant 6 mois.</p>

						<div class="buttonsCookie">
							<div class="refuse" @click="CookiesAreAccepted(false)">Tout refuser</div>
							<div class="accept" @click="CookiesAreAccepted(true)">Tout accepter</div>
						</div>
					</div>

					<article>
						<div>
							<input type="checkbox" id="cKsChkGA" v-model="optionnalScripts" />
							<label for="cKsChkGA">Améliorations de l'expérience utilisateur</label>
						</div>
						<div class="descCookie">
							Ceux-ci sont utilisés pour l'analyse des audiences grâce à
							<a
								href="https://marketingplatform.google.com/about/analytics/"
								target="_blank"
								rel="noreferer nofollow"
								title="Cliquez pour en savoir plus sur Google Analytics..."
								>Google Analytics</a
							>
							afin de nous permettre de mieux comprendre le comportement de nos visiteurs et d'améliorer
							l'expérience utilisateur.
						</div>
					</article>

					<div class="buttonsCookie">
						<div
							class="accept"
							@click="optionnalScripts ? CookiesAreAccepted(true) : CookiesAreAccepted(false)"
							style="float: right"
						>
							Valider mes choix
						</div>
					</div>
				</div>
			</div>
		</section>
	</section>
</template>

<script>
module.exports = {
	name: "Cookies",

	data: function () {
		return {
			choiceStep: false,
			optionnalScripts: false,
			// haveCookies: false
			showCookies: false,
		};
	},
	// props: ["open_close"],

	props: {
		color_one: {
			type: String,
			required: false,
			default: "#05CE7B",
		},
		color_two: {
			type: String,
			required: false,
			default: "#CE0558",
		},
		website_name: {
			type: String,
			required: false,
			default: "",
		},
	},

	computed: {
		openClosePanel: {
			get() {
				return this.open_close;
			},
			set(val) {
				return this.$emit("update:open_close", val);
			},
		},
	},

	mounted() {
		// if (etat == "all") {
		//   this.CookiesAreAccepted(true);
		// } else if (etat == "none") {
		//   this.optionnalScripts = false;
		//   this.CookiesAreAccepted(true);
		// }

		this.$nextTick(() => {
			// this.showCookies = true;
			// if (navigator.cookieEnabled) {
			// 	this.optionnalScripts = true;

			// 	var etat = this.getCookie("acptCks");
			// 	if (etat) {
			// 		//   this.$el.style.display = "none";
			// 		this.showCookies = false;
			// 	}
			// 	// else {
			// 	//   this.showCookies = true;
			// 	// }
			// }
			this.showCookies = true;
			if (navigator.cookieEnabled) {
				this.optionnalScripts = true;

				var etat = this.getCookie("acptCks");
				if (etat) {
					//   this.$el.style.display = "none";
					this.showCookies = false;
					if (etat == "all") {
						this.CookiesAreAccepted(true);
					} else if (etat == "no") {
						this.optionnalScripts = false;
						this.CookiesAreAccepted(false);
					}
				}
			}

			this.$el.style.setProperty("--cookie-one", this.color_one);
			this.$el.style.setProperty("--cookie-two", this.color_two);
		});
	},
	methods: {
		CookiesAreAccepted(param) {
			// console.log(param);
			if (this.optionnalScripts && param === true) {
				this.setCookie("acptCks", "all", 182);
			} else {
				this.setCookie("acptCks", "no", 182);
				this.optionnalScripts = false;
			}
			this.showCookies = false;
			this.$el.style.display = "none";

			// if (this.optionnalScripts || param === true) {
			// 	this.setCookie("acptCks", "all", 182);
			// } else {
			// 	this.setCookie("acptCks", "no", 182);
			// }
			// this.showCookies = false;
			// this.$el.style.display = 'none';
		},
		setCookie(cname, cvalue, numberOfDays) {
			var d = new Date();
			d.setTime(d.getTime() + numberOfDays * 24 * 60 * 60 * 1000);
			var expires = "expires=" + d.toUTCString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
			return "";
		},
	},
};
</script>

<style>
.CookiesPopUp {
	background: rgba(100, 100, 100, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: center;
	/* cursor: pointer; */
	transition: 0.5s ease;
	font-family: Helvetica, sans-serif;
	color: #333;
}
@keyframes scaleOnOpen {
	from {
		transform: scale(0);
	}
}
.CookiesPopUp > section {
	width: 1200px;
	max-width: 95vw;
	max-height: 90vh;
	overflow: auto;
	box-shadow: 2px 2px 8px 0px #777;
	background: #fefefe;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	animation: scaleOnOpen 0.5s ease;
	padding: 1%;
}
.cookiesBehind {
	z-index: -10;
	opacity: 0;
}
.CookiesPopUp a {
	text-decoration: underline;
	color: var(--cookie-one);
}

.CookiesPopUp .cookieTitle {
	margin: 0;
	margin-bottom: 0;
	text-transform: uppercase;
	color: var(--cookie-one);
	font-weight: bold;
	align-self: flex-start;
}
.CookiesPopUp .cookiesubtitle {
	margin: 0.5rem 0;
	font-weight: bold;
}
.closepopup {
	top: 1rem;
	right: 1rem;
	font-size: 2em;
}

.buttonsCookie {
	margin-top: 1rem;
	margin-bottom: 0.5rem;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
}
.buttonsCookie > div {
	margin: 8px 0.5rem 0;
	border: none;
	padding: 1rem;
	border-radius: 6px;
	text-transform: uppercase;
	transition: 0.5s ease;
	outline: none;
}

.buttonsCookie .perso {
	background: #ccc;
	color: black;
	border: 2px #ccc solid;
}
.buttonsCookie .refuse {
	background: #ccc;
	color: black;
	border: 2px #ccc solid;
}
.buttonsCookie .accept {
	border: 2px var(--cookie-one) solid;
	background: var(--cookie-one);
	color: var(--cookie-two);
	cursor: pointer;
}
.buttonsCookie > div:hover {
	background: #fff;
}
.buttonsCookie .accept:hover {
	background: #fff;
	color: var(--cookie-one);
}
.textCookie {
	font-size: 1rem;
}
.cookiesBloc {
	display: flex;
	align-items: center;
	width: 100%;
}
.cookiesBloc > div {
	width: 100%;
}
.cookiesBloc span {
	margin-bottom: 0;
	text-transform: uppercase;
	color: var(--cookie-one);
	font-weight: bold;
}
.cookiesBloc p,
.cookiesBloc i {
	font-size: 1rem;
}
.cookiesBloc article {
	font-size: 0.8rem;
	margin: 1rem 0;
	background: #eee;
	padding: 8px 0;
}
.cookiesBloc article div:first-child {
	font-size: 1.2rem;
	color: var(--cookie-one);
	display: flex;
	align-items: center;
}
.cookiesBloc article input {
	width: 25px;
	height: 25px;
	margin-right: 10px;
}

.descCookie {
	margin-left: 30px;
}
@media all and (max-width: 700px) {
	.CookiesPopUp {
		align-items: flex-end;
	}
	.CookiesPopUp > section {
		max-width: 100%;
	}
	.buttonsCookie > div {
		flex: 1 1 200px;
		text-align: center;
		font-size: 0.8rem;
		padding: 0.5em;
	}
	.buttonsCookie .accept {
		flex: unset;
		width: 100%;
	}
}
/* @media all and (max-width: 350px) {
	.buttonsCookie {
		display: flex;
		flex-direction: column;
	}
} */
</style>
