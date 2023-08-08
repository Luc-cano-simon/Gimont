<template>
	<div v-if="images" class="imageViewer" @click.self="$emit('close')">
		<i
			v-if="images[currentIndex - 1]"
			class="fa-solid fa-angle-left"
			@click="previousImage()"
		></i>
		<img :src="currentImage" alt="image de l'établissement" />
		<i
			v-if="images[currentIndex + 1]"
			class="fa-solid fa-angle-right"
			@click="nextImage()"
		></i>
	</div>
</template>

<script>
export default {
	props: {
		images: Array,
	},
	data() {
		return {
			currentIndex: 0,
		};
	},
	computed: {
		currentImage: {
			get() {
				return this.images.filter(
					(value, index) =>
						value !== null && index === this.currentIndex
				);
			},
		},
	},
	methods: {
		previousImage() {
			this.currentIndex--;

			if (this.currentIndex < 0) {
				this.currentIndex = this.images.length - 1;
			}
		},
		nextImage() {
			this.currentIndex++;

			if (this.currentIndex > this.images.length - 1) {
				this.currentIndex = 0;
			}
		},
	},
};
</script>

<style scoped>
.imageViewer {
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: hsla(0, 0%, 0%, 0.685);
	z-index: 300;
	cursor: pointer;
}

.imageViewer img {
	width: 70%;
	height: 90vh;
	object-fit: contain;
	object-position: center;
	cursor: default;
}

.imageViewer i {
	color: #fff;
	font-size: 4rem;
	transition: all 200ms ease-in-out;
}

.imageViewer i:hover {
	color: var(--color-identity);
}
.imageViewer i:first-child {
	position: absolute;
	left: 3vw;
}
.imageViewer i:last-child {
	position: absolute;
	right: 3vw;
}
</style>
