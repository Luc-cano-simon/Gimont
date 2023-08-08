<template>
	<div class="theCaptcha">
		<div
			class="captcha"
			@mousedown.prevent="onMouseDown"
			@mouseup.prevent="onMouseUp"
			@touchstart.prevent="onMouseDown"
			@touchend.prevent="onMouseUp"
		>
			<div class="animationBall"></div>
			<p v-if="!isHuman">{{ value }}</p>
			<i v-else class="fal fa-thumbs-up"></i>
		</div>
		<p class="label">Maintenez appuyé afin d'envoyer.</p>
	</div>
</template>

<script>
/**
 * ANTIBOT BY PRESSING
 *
 * To change the colors use the --color-identity var or change it into ".captcha .animationBall"
 * To change the size, change the --width-button and --heigth-button (in px)
 */
export default {
	props: {
		value: {
			type: String,
			default: "Envoyer",
		},
		holdTime: {
			type: Number,
			default: 0.5,
		},
	},
	data() {
		return {
			timerId: 0,
			counter: 0,
			captcha: null,
			scale: 1,
			isHuman: false,
		};
	},
	methods: {
		timer() {
			if (this.counter < 60 * this.holdTime) {
				this.timerId = requestAnimationFrame(this.timer);
				this.counter++;
				this.scale = 1 + this.counter * 10;

				this.captcha[0].style.setProperty(
					"--width-value",
					`${this.scale}px`
				);
				this.captcha[0].style.setProperty(
					"--height-value",
					`${this.scale}px`
				);
			} else {
				this.isHuman = !this.isHuman;
				this.$emit("checked", true);
			}
		},
		onMouseDown() {
			requestAnimationFrame(this.timer);
		},
		onMouseUp() {
			cancelAnimationFrame(this.timerId);
			this.reset();
		},
		reset() {
			this.counter = 0;
			this.captcha[0].style.setProperty("--width-value", `0px`);
			this.captcha[0].style.setProperty("--height-value", `0px`);
			this.isHuman = false;
		},
	},
	mounted() {
		this.captcha = document.getElementsByClassName("animationBall");
	},
};
</script>

<style>
:root {
	--scale-value: 1;
	--width-value: 0px;
	--height-value: 0px;
	--width-button: 100px;
	--heigth-button: 20px;
}

.theCaptcha {
	width: fit-content;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.theCaptcha .label {
	font-size: 1rem;
}

.captcha {
	position: relative;
	cursor: pointer;
	width: var(--width-button);
	height: var(--heigth-button);
	border: none;
	color: white;
	background-color: grey;
	border-radius: 1rem;
	transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s;
	padding: 0.5rem 1rem;
	overflow: hidden;
	text-transform: uppercase;
	font-size: 1rem;
}
.captcha:hover {
	transform: scale(1.1);
}

.captcha .animationBall {
	position: absolute;
	width: var(--width-value);
	height: var(--height-value);
	top: 50%;
	left: 50%;
	background-color: var(--color-identity);
	border-radius: 50%;
	transform: translate(-50%, -50%);
	transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s;
}

.captcha p {
	text-align: center;
	width: 100%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.captcha i {
	font-size: 1rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

@keyframes shake {
	10%,
	90% {
		transform: translate(-40%, -50%);
	}

	20%,
	80% {
		transform: translate(-50%, -40%);
	}

	30%,
	50%,
	70% {
		transform: translate(-40%, -50%);
	}

	40%,
	60% {
		transform: translate(-50%, -40%);
	}
}
</style>
