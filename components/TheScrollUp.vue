<template>
	<section id="ScrollUp" @click="scrollToTop()" v-if="showArrow">
		<img
			src="/img/fontawesome/angle-up.svg"
			alt="icone"
			width="35"
			height="35"
		/>
	</section>
</template>

<script>
export default {
	name: "TheScrollUp",
	data() {
		return {
			showArrow: false,
		};
	},
	created() {
		if (process.client) {
			window.addEventListener("scroll", this.handleScroll);
		}
	},
	destroyed() {
		if (process.client) {
			window.removeEventListener("scroll", this.handleScroll);
		}
	},
	methods: {
		scrollToTop() {
			window.scrollTo(0, 0);
		},
		handleScroll(event) {
			const position =
				document.documentElement.scrollTop || document.body.scrollTop;
			this.showArrow = position > window.innerHeight ? true : false;
		},
	},
};
</script>

<style scoped>
#ScrollUp {
	position: fixed;
	right: 20px;
	bottom: 20px;
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--color-identity);
	font-size: 50px;
	z-index: 3;
	box-shadow: 0 0 4px #aaa;
	cursor: pointer;
	color: white;
	transition: all 0.2s ease-in-out;

	animation: 2s showBtnAnim;
	/* z-index: 1000; */
}
#ScrollUp:hover {
	background: var(--color-secondary);
}

@keyframes showBtnAnim {
	from {
		opacity: 0;
	}
}

@media all and (max-width: 768px) {
	#ScrollUp {
		display: none;
	}
}
</style>
