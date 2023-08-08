<template>
	<section class="HeaderSlideshow">
		<div class="home_diapo phoneS"></div>
		<div class="home_diapo pcS">
			<client-only>
				<Slideshow playbtn="" pausebtn="" slidewidth="100" :sliderheight="slideheight ? slideheight : 'very_auto'">
					<slot></slot>
				</Slideshow>
			</client-only>
		</div>
	</section>
</template>

<script>
export default {
	name: "HeaderSlideshow",
	data() {
		return {};
	},
	props: ["slideheight"],
	created() {},
	mounted() {
		this.$nextTick(() => {});
	},
	computed: {},
	watch: {},
	methods: {},
};
</script>

<style>
.home_diapo {
	/* padding-top: 70px; */
	position: relative;
	background: #000;
	min-height: 400px;
}
.home_diapo.phoneS {
	display: none;
	min-height: unset;
}
.home_diapo .slide {
	position: relative;
}
.home_diapo .slide .slide_btns {
	position: absolute;
	left: 75%;
	height: 120px;
	top: calc(50% - 60px);
	right: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: unset;
	font-size: 1rem;
}

.home_diapo .slide .slide_btns .black_btn {
	width: 170px;
}

.home_diapo .title_slide {
	position: absolute;
	left: 5%;
	top: 50%;
	transform: translateY(-50%);
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 45%;
	font-family: "Corporate";
	color: white;
}
.home_diapo .title_slide h2,
.home_diapo .title_slide h1 {
	font-weight: 100;
	font-size: 3rem;
	margin: 0;
}
.home_diapo .title_slide p {
	font-weight: 100;
}

.home_diapo .arrow_defCSS {
	padding: 14px;
	border-radius: 0;
	border-width: 0 3px 3px 0;
}
.home_diapo .slideBtn {
	top: 90%;
	padding: 20px;
}
.home_diapo .slideBtn:hover {
	background: rgba(255, 255, 255, 0.2);
}
.home_diapo .btnLeft {
	left: 2%;
}
.home_diapo .btnRight {
	right: 2%;
}
.home_diapo .before,
.home_diapo .after {
	z-index: -1;
}

@media all and (max-width: 1000px) {
	.home_diapo.phoneS {
		display: block;
	}
	.home_diapo.pcS {
		display: none;
	}

	.home_diapo .title_slide {
		top: 20%;
		width: 90%;
		/* background: green; */
		transform: translateY(-50%);
	}
	.home_diapo .slide .slide_btns {
		position: absolute;
		left: unset;
		right: 5%;
	}
}
@media all and (max-width: 768px) {
	.home_diapo {
		padding-top: 70px;
	}
}
</style>
