<template>
	<section
		class="imageAndText site_container"
		:class="img_on_right ? 'img_on_right' : null"
	>
		<div class="blocImg">
			<img
				:src="img"
				:alt="alt"
				onerror="this.onerror=null; this.src='/img/utils/logo_social.jpg' "
			/>
		</div>
		<div class="espace_vide"></div>
		<div class="blocTxt">
			<h2 v-html="title"></h2>
			<div v-html="text"></div>
			<div class="ma mi" v-if="link && link != ''">
				<a class="btn" :href="link" :target="target">En savoir plus</a>
			</div>
			<div class="contact">
				<div class="ma mi phone" v-if="phones && phones.length">
					<a
						class="btn"
						v-for="(phone, index) in phones"
						:href="`tel:${phone}`"
						:key="index"
						><i class="fa-solid fa-phone">{{ phone }}</i></a
					>
				</div>
				<div class="ma mi" v-if="mail && mail != ''">
					<a class="btn" :href="`mailto:${mail}`"
						><i class="fa-solid fa-envelope"></i
					></a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "ImageAndText",

	props: [
		"img_on_right",
		"text",
		"img",
		"title",
		"link",
		"target",
		"alt",
		"phones",
		"mail",
	],

	mounted() {
		this.$nextTick(() => {});
	},
};
</script>

<style scoped>
.imageAndText {
	display: flex;
	align-items: center;
	margin-bottom: 3em;
}

.imageAndText.img_on_right {
	flex-direction: row-reverse;
}

.imageAndText > * {
	flex: 8;
}

.imageAndText h2 {
	font-size: 1.7em;
	margin-bottom: 0.5em;
	color: var(--text-col);
}

.imageAndText .blocImg img {
	max-width: 100%;
	text-align: center;
	border-radius: 2em;
}
.imageAndText .blocTxt .contact {
	display: flex;
	gap: 1rem;
}

.imageAndText .blocTxt .phone {
	display: flex;
	gap: 1rem;
}

.espace_vide {
	flex: 1;
}

@media all and (max-width: 1000px) {
	.imageAndText.img_on_right,
	.imageAndText {
		flex-direction: column;
	}

	.espace_vide {
		display: none;
	}
}
</style>
