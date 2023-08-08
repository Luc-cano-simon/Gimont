<script>
export default {
	props: {
		isOpen: Boolean,
		listItem: Array,
	},
};
</script>

<template>
	<Transition name="appear">
		<div v-if="isOpen" class="listContainer">
			<template v-for="(item, index) in listItem">
				<p
					v-if="listItem"
					class="list__item"
					@click="$emit('selectItem', item)"
					:key="index"
				>
					{{ item }}
				</p>
				<slot v-else></slot>
			</template>
		</div>
	</Transition>
</template>

<style scoped>
.listContainer {
	position: absolute;
	width: 100%;
	min-height: 100px;
	max-height: 350px;
	z-index: 1;
	overflow: auto;
	background-color: var(--color-secondary);
	bottom: 0;
	transform: translateY(100%);
	border-bottom-left-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
	scrollbar-width: none;
}

.listContainer::-webkit-scrollbar {
	display: none;
}

.listContainer p {
	margin: 0;
	padding: 0.2rem 1rem;
	font-size: 1rem;
	cursor: pointer;
}

.listContainer p:hover {
	color: var(--color-identity);
}

.appear-enter-active {
	transition: all 0.8s ease;
}
.appear-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.appear-enter,
.appear-leave-to {
	max-height: 0;
}
</style>
