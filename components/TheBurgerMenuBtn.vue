<template>
	<div>
		<!-- BOUTON OUVRIR / FERME MENU -->
		<!-- ne rien mettre dans style="" de l'element phoneMenu -->
		<div
			class="phoneMenu"
			:class="getBtnPosition"
			@click="$store.commit('toggleBoolean', 'showMenu')"
		>
			<div
				@touchstart="lockBkg"
				@touchmove="movePhoneMenu"
				@touchend="unlockBkg"
			>
				<div v-if="!$store.state.showMenu" class="hover_toggle">
					<img src="/img/fontawesome/bars.svg" />
					<p>MENU</p>
				</div>
				<img src="/img/fontawesome/times.svg" v-else />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TheBurgerMenuBtn",
	data() {
		return {
			phoneMenuIstouched: false,
			lastMenuPosition: [-1, -1],
			direction: "",
			menuWidth: 0,
			phoneMenu: null,
			clickeventAction: false, //Boolean pour déclencher swipe avec la souris
		};
	},
	props: ["menu"],
	created() {
		if (process.client) {
			window.addEventListener("scroll", this.scrollChangePos);
		}
	},
	destroyed() {
		if (process.client) {
			window.removeEventListener("scroll", this.scrollChangePos);
		}
	},
	computed: {
		getBtnPosition: {
			get() {
				return this.$store.state.showMenu &&
					this.$store.state.window_width <
						this.$store.state.mobile_width
					? "moveRight"
					: this.$store.state.showMenu &&
					  this.$store.state.window_width <
							this.$store.state.mobile_width
					? "gobottom"
					: "";
			},
		},
	},
	watch: {
		"$store.state.showMenu": function () {
			this.$el
				.getElementsByClassName("phoneMenu")[0]
				.removeAttribute("style");
		},
	},

	methods: {
		scrollChangePos(event) {
			let phoneMenuEl = document.getElementsByClassName("phoneMenu")[0];
			if (window.innerWidth > 768) {
				let leftVal = window.innerWidth > 1100 ? "18%" : "3%";
				phoneMenuEl.style.left =
					window.scrollY >
					window.innerHeight - window.innerHeight * 0.2
						? "2%"
						: leftVal;
				if (window.innerWidth < 1100) {
					phoneMenuEl.style.top =
						window.scrollY >
						window.innerHeight - window.innerHeight * 0.2
							? "2%"
							: "18%";
				}
			}
		},
		//methods to move phone menu button
		movePhoneMenu(event) {
			let currentX, currentY;
			if (this.clickeventAction) {
				event.preventDefault();
				if (event.type === "touchmove") {
					currentX = event.touches[0].clientX;
					currentY = event.touches[0].clientY;
				} else {
					currentX = event.clientX;
					currentY = event.clientY;
				}

				//if fast direction order
				if (
					Math.abs(this.lastMenuPosition[0] - currentX) > 35 ||
					Math.abs(this.lastMenuPosition[1] - currentY) > 35
				) {
					if (this.lastMenuPosition[0] !== -1) {
						if (this.lastMenuPosition[0] - currentX > 35) {
							this.direction = "E";
						} else if (this.lastMenuPosition[0] - currentX < -35) {
							this.direction = "O";
						} else if (this.lastMenuPosition[1] - currentY < 35) {
							this.direction = "S";
						} else this.direction = "N";
					}
				}

				this.phoneMenu.style.left = "0";
				this.phoneMenu.style.top = "0";
				this.phoneMenu.style.transform =
					"translate3d(" +
					(currentX - this.menuWidth) +
					"px, " +
					(currentY - this.menuWidth) +
					"px, 30px)";

				this.lastMenuPosition = [currentX, currentY];
			}
		},

		lockBkg(event) {
			this.clickeventAction = true;
			this.phoneMenu = document.getElementsByClassName("phoneMenu")[0];
			this.phoneMenu.style.transition = "unset";

			document.getElementsByTagName("body")[0].style.overflow = "hidden";
			this.menuWidth = this.phoneMenu.offsetWidth / 2;
		},
		unlockBkg() {
			let maxRight = window.innerWidth - this.phoneMenu.offsetWidth - 4;
			let maxBottom =
				window.innerHeight - this.phoneMenu.offsetHeight - 4;
			if (this.direction !== "") {
				this.phoneMenu.style.transform = "unset";
				this.phoneMenu.style.transition = "all .5s ease";
			}
			switch (this.direction) {
				case "N":
					this.phoneMenu.style.top = "4px";
					break;
				case "S":
					this.phoneMenu.style.top = maxBottom + "px";
					break;
				case "E":
					this.phoneMenu.style.left = "4px";
					break;
				case "O":
					this.phoneMenu.style.left = maxRight + "px";
				default:
					break;
			}
			this.direction = "";
			this.lastMenuPosition = [-1, -1];
			this.clickeventAction = false;
			//delay for transition
			let timer = window.setInterval(() => {
				document.getElementsByTagName("body")[0].style.overflow =
					"auto";
			}, 500);
		},
	},
};
</script>

<style>
.phoneMenu {
	position: fixed;
	background: var(--color-identity);
	top: 80%;
	left: 90%;
	border-radius: 50%;
	border: 5px var(--color-identity) solid;
	height: 80px;
	width: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s ease-in-out;

	display: flex;
	cursor: pointer;
	z-index: 31;
	box-shadow: 0 0 8px 1px #3333;
}
.moveRight {
	top: 0;
	left: calc(100% - 80px) !important;
	border: none;
	border-radius: 0;
	background: var(--color-identity);
	height: 61px;
	transition: all 0.2s ease-in-out;
}
.moveRight:hover {
	border: none !important;
}
.phoneMenu:hover {
	transition: all 0.2s ease-in-out;
}
.phoneMenu img {
	width: 40px;
	transition: all 0.2s ease-in-out;

	filter: invert(1);
}
.hover_toggle {
	position: relative;
	width: 80px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translate(0%, 0%);
}
.hover_toggle p {
	color: whitesmoke;
	position: absolute;
	bottom: 2%;
	left: 28%;
	font-size: 0.8rem;
}
@media all and (max-width: 1100px) {
	.phoneMenu:not(.moveRight) {
		width: 60px;
		height: 60px;
		top: 14%;
		left: 2%;
	}
	.hover_toggle {
		width: 60px;
		height: 60px;
	}
	.phoneMenu img {
		width: 30px;
	}
	.hover_toggle p {
		bottom: 0%;
		left: 18%;
	}
}
@media all and (max-width: 1000px) {
	.phoneMenu:not(.moveRight) {
		position: fixed;
		top: unset;
		bottom: 2%;
		left: unset;
		right: 2%;
		transform: translateX(-50%);
	}
	.phoneMenu.moveRight {
		left: 0 !important;
	}
	.phoneMenu.gobottom {
		position: fixed;
		left: unset;
		top: calc(100vh - 215px);
		right: 2rem;
		border: none;
		border-radius: 50%;
		background: var(--color-identity);
		height: 70px;
		width: 70px;
		transition: all 0.2s ease-in-out;

		transform: translateY(-50%);
	}
	.gobottom:hover {
		border: none;
	}
	.phoneMenu img {
		width: 30px;
	}
}
</style>
