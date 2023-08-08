<script>
export default {
	name: "BaseCheckBox",
	props: {
		checked: Boolean,
		id: String,
		name: String,
		round: Boolean,
		disabled: Boolean,
		indeterminate: Boolean,
		error: String,
		falseValue: {
			type: [Boolean, String, Number],
			default: false,
		},
		trueValue: {
			type: [Boolean, String, Number],
			default: true,
		},
		modelValue: {
			type: [Boolean, String, Number, Array],
		},
		value: [String, Number, Array, Boolean, Object],
	},
	computed: {
		computedValue: {
			get() {
				return this.modelValue;
			},
			set(value) {
				this.$emit("change", value);
			},
		},
	},
};
</script>
<template>
	<div>
		<label class="checkBox" :class="{ checked: checked }">
			<input
				class="checkBox__input"
				:class="{ checked: checked }"
				:id="id"
				v-model="computedValue"
				type="checkbox"
				:name="name"
				:disabled="disabled"
				:indeterminate="indeterminate"
				:true-value="trueValue"
				:false-value="falseValue"
				:value="value"
				:checked="checked"
			/>
			<slot></slot>
		</label>
		<div class="error" v-if="error">
			<p class="content">
				{{ error }}
			</p>
		</div>
	</div>
</template>

<style>
.checkBox {
	display: flex;
	align-items: center;

	padding: 0.3rem 1rem;
	margin: auto;
	margin-bottom: 0.5rem;
	gap: 1rem;
	letter-spacing: 1px;
	color: var(--font-semilight);
	cursor: pointer;
	font-size: 1rem;
}

.checkBox.checked {
	/* color: white; */
}

.checkBox__input[type="checkbox"] {
	position: relative;
	width: 1.5rem;
	height: 1.5rem;
	min-width: 1.5rem;
	border-radius: 5px;
	appearance: none;
	outline: 2px solid var(--color-identity);
	cursor: pointer;
	background-color: white;
	transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
}

.checkBox__input[type="checkbox"]::before {
	position: absolute;
	content: "";
	display: block;
	top: 1px;
	left: 8px;
	width: 6px;
	height: 12px;
	border-style: solid;
	border-color: white;
	border-width: 0 4px 4px 0;
	transform: rotate(45deg);
	opacity: 0;
}

.checkBox__input.checked[type="checkbox"] {
	background: var(--color-secondary);
}

.checkBox__input.checked[type="checkbox"]::before {
	opacity: 1;
}

.error .content {
	margin: 0;
	color: var(--error-color);
	font-size: 0.8rem;
}

.checkboxCGU .checkBox {
	border: none;
	width: fit-content;
	box-shadow: none;
	flex-direction: row-reverse;
	margin-top: 1rem;
}

.selectAll label {
	color: var(--identity-color);
}

@media screen and (max-width: 350px) {
	.checkBox {
		width: 90%;
	}
}
</style>
