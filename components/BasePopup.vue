<template>
	<div class="popupShadow" @click.self="$emit('close')">
		<section class="sectionPopup">
			<slot></slot>
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style>
.popupShadow {
	--shadow-background-color: hsla(0, 0%, 0%, 0.598);
	--popup-background-color: hsl(240, 4%, 89%);
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: var(--shadow-background-color);
	z-index: 500;
	overflow: auto;
	-ms-overflow-style: none;
	scrollbar-width: none;
}
.popupShadow::-webkit-scrollbar {
	display: none;
}
.sectionPopup {
	background-color: var(--popup-background-color);
	width: 70%;
	margin: auto;
	height: fit-content;
	padding: 2rem;
}
@media all and (max-width: 700px) {
	.sectionPopup {
		width: 100%;
		padding: 0.25rem;
	}
}
</style>
