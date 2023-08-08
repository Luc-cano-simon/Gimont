<template>
	<div class="videoViewer" @click.self="$emit('close')">
		<i class="fa-regular fa-xmark closeButton" @click="$emit('close')"></i>
		<video controls>
			<source :src="video" :type="type" />
			Sorry, your browser doesn't support embedded videos.
		</video>
	</div>
</template>

<script>
export default {
	name: "videoViewer",
	props: {
		video: String,
		type: String,
	},
};
</script>

<style scoped>
.videoViewer {
	background-color: rgba(0, 0, 0, 0.507);
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	z-index: 300;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	cursor: pointer;
}

.videoViewer video {
	width: 95%;
	height: 95%;
}

.closeButton {
	font-size: 2rem;
	position: absolute;
	color: #fff;
	top: 4%;
	right: 4%;
	z-index: 301;
	transition: all 300ms ease-out;
}

.closeButton:hover {
	color: var(--color-identity);
	transform: rotateZ(90deg);
}
</style>
