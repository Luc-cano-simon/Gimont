<template>
	<div class="relative">
		<section class="HorizontalScroll">
			<div class="inlineItems">
				<slot></slot>
			</div>
		</section>

		<div class="HS_control" v-if="show_control && show_control != 'false'">
			<div class="left" @click="scrollDirection(-1)">
				<img src="/img/fontawesome/angle-left-w.svg" alt="icone fleche" />
			</div>
			<div class="right" @click="scrollDirection(1)">
				<img src="/img/fontawesome/angle-left-w.svg" alt="icone fleche" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HorizontalScroll",
	props: {
		show_control: {
			type: String,
			required: false,
			default: "true",
		},
	},
	methods: {
		scrollDirection(direction) {
			this.$el.querySelector(".HorizontalScroll ").scrollLeft += this.$el.clientWidth * 0.67 * direction;
		},
	},
};
</script>

<style>
.HorizontalScroll {
	overflow: auto;
	max-width: 100%;
	scroll-behavior: smooth;
	scrollbar-width: thin;
	position: relative;
	transition: 0.4s ease;
}
.HorizontalScroll::-webkit-scrollbar {
	height: 8px;
}
.inlineItems {
	display: inline-flex;
	padding: 1.5em 0;
}
.HS_control > div {
	position: absolute;
	top: 0;
	height: 100%;
	/* width: 20px; */
	/* padding: 0 15px; */
	object-fit: contain;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.3s ease;
}
/* .HS_control .left:after {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: #777;
	content: "";
	top: 50%;
} */
.HS_control .left {
	left: 0px;
}
.HS_control .right {
	right: 0px;
	transform: scale(-1, -1);
}
.HS_control > div:hover {
	background: rgba(158, 158, 158, 0.2);
}
.HS_control img {
	background: #777;
	width: 30px;
	height: 30px;
	/* margin: 0 0.5em; */
	border-radius: 50%;
	padding: 10px;
}
@media all and (max-width: 768px) {
	.HS_control {
		display: none;
	}
}
</style>
