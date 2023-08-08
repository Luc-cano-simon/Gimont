<template>
	<a
		class="linkButton"
		:href="href"
		:target="target"
		:rel="rel"
		:title="title"
		><i class="fa-light fa-globe"></i>{{ value }}</a
	>
</template>

<script>
export default {
	props: {
		target: String,
		rel: String,
		href: {
			type: String,
			default: "/",
		},
		title: String,
		value: String,
	},
};
</script>

<style scoped>
.linkButton {
	display: flex;
	align-items: center;
	gap: 1.5rem;
	background-color: white;
	width: fit-content;
	border-radius: 0.5rem;
	padding: 0.5rem;
	color: var(--text-col);
}
.linkButton i {
	font-size: 1.6rem;
}
.linkButton:hover {
	background-color: var(--color-identity);
}
</style>
