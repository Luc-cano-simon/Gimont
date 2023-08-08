<!-- 
    val en pixel
    <LongTextSmallSpace  close_height="200" :key="longtxt">
			<template v-slot:text><div v-html="longtxt"></div></template>
      <template v-slot:btnplus>lire +</template>
      <template v-slot:btnmoins>lire -</template>
    </LongTextSmallSpace>
   -->
<template>
	<div class="LongTextSmallSpace" :class="readmore ? 'open' : null">
		<!-- Le texte possiblement trop long -->
		<slot name="text"></slot>
		<!-- btns pour tout lire ou refermer -->
		<div @click="readmore = !readmore" class="blocbottom">
			<slot name="btnplus" v-if="readmore">-</slot>
			<slot name="btnmoins" v-else>+</slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "LongTextSmallSpace",
	data: function () {
		return {
			readmore: false,
			padding: 70,
		};
	},
	props: ["close_height"],
	mounted() {
		this.$el.style.setProperty("--paddingBottom", this.padding + "px");
		this.setHeight();
	},
	methods: {
		setHeight() {
			if (!this.close_height) {
				console.error('Veuillez définir une valeur pour la props close_height ex: close_height="200"');
				return;
			}
			if (this.$el.offsetHeight - this.padding > this.close_height) {
				this.$el.style.setProperty("--close-height", this.close_height + "px");
			} else {
				this.$el.querySelector(".blocbottom").style.display = "none";
				this.readmore = true;
			}
		},
	},
};
</script>

<style>
.LongTextSmallSpace {
	--close-height: auto;
	--paddingBottom: 70px;
	padding-bottom: var(--paddingBottom);
	display: block;
	width: 100%;
	max-height: var(--close-height);
	overflow: hidden;
	position: relative;
	margin-bottom: 1rem;
	transition: 0.4s ease;
}
.LongTextSmallSpace .blocbottom {
	position: absolute;
	background: rgb(255, 255, 255);
	background: linear-gradient(180deg, rgba(247, 247, 247, 0) 0%, rgba(247, 247, 247, 1) 75%, rgba(247, 247, 247, 1) 100%);
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	height: var(--paddingBottom);
	cursor: pointer;
}
.LongTextSmallSpace.open {
	max-height: 500vw;
	overflow: auto;
}
</style>
