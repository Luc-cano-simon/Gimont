<script>
export default {
	props: {
		inputType: {
			type: String,
			default: "text",
		},
		required: Boolean,
		value: String,
		img: String,
		placeholder: {
			type: String,
			default: "Exemple...",
		},
		readonly: {
			type: Boolean,
			default: false,
		},
		error: String,
		label: String,
		listItem: Array,
	},
	data() {
		return {
			isFocused: false,
			isOpen: false,
			currentChoice: "",
		};
	},
	computed: {
		computedValue: {
			get() {
				return this.value;
			},
			set(newValue) {
				this.currentChoice = newValue;
				this.$emit("onValueChange", newValue);
			},
		},
		openDropdown: {
			get() {
				return this.isOpen;
			},
			set(value) {
				setTimeout(() => {
					this.isOpen = value;
				}, 100);
			},
		},
	},
};
</script>
<template>
	<div class="containerDropdown">
		<div class="inputContainer">
			<p class="label" v-if="label">
				{{ label }}<span class="required" v-if="required"> *</span>
			</p>
			<label class="baseInput">
				<span class="inputWrapper">
					<input
						:class="{ input__invalid: error }"
						:readonly="readonly"
						:type="inputType"
						@keydown.prevent.enter="
							$emit('enterDown', $event.target.value)
						"
						@input="$emit('onValueChange', $event.target.value)"
						v-model="currentChoice"
						:value="computedValue"
						:placeholder="placeholder"
						@mousedown="
							!isFocused ? (isFocused = !isFocused) : isFocused;
							$emit('isFocused', isFocused);
							openDropdown = true;
						"
						@focusout="
							isFocused ? (isFocused = !isFocused) : isFocused;
							$emit('isFocused', isFocused);
							openDropdown = false;
						"
					/>
					<svg
						class="arrow"
						:class="{ rotate: isFocused }"
						v-if="img"
					>
						<use :href="`/img/sprite.svg#${img}`"></use>
					</svg>
				</span>
			</label>

			<div class="error" v-if="error">
				<p class="content">
					{{ error }}
				</p>
			</div>
		</div>

		<BaseListDropdown
			:is-open="listItem && openDropdown"
			@selectItem="computedValue = $event"
			:list-item="listItem"
		/>
	</div>
</template>

<style scoped>
.containerDropdown {
	position: relative;
	width: 100%;
}
.inputContainer {
	margin: auto;
	margin-top: 0.7rem;
}
.label {
	margin: 0;
	font-size: 1rem;
}
.baseInput {
	display: block;
	max-height: 100px;
	margin-bottom: 0.15rem;
}
.inputWrapper {
	display: flex;
	align-items: center;
	position: relative;
}
.inputWrapper input {
	display: block;
	width: 100%;
	min-height: 40px;
	border: 1px solid var(--color-identity);
	padding: 0.2rem 1rem;
	border-radius: 0.5rem;
	font-size: 1rem;
	letter-spacing: 0.5px;
}
.inputWrapper :is(input:focus, input:hover) {
	outline: 2px solid var(--color-identity);
}
.inputWrapper input::placeholder {
	color: var(--placeholder-color);
	font-size: 0.8rem;
	font-family: var(--default-font);
	letter-spacing: 0.5px;
}
.inputWrapper svg {
	position: absolute;
	right: 2%;
	width: 20px;
	height: 20px;
	transition: transform 400ms ease-out;
	cursor: pointer;
}
.rotate {
	transform: rotateZ(90deg);
}
.error {
	margin-bottom: 0.5rem;
}
.error .content {
	margin: 0;
	color: var(--error-color);
	font-size: 0.8rem;
}
.inputWrapper .input__invalid {
	border: 2px solid var(--error-color);
}
.required {
	color: var(--error-color);
}
@media screen and (max-width: 400px) {
	.inputWrapper input::placeholder {
		font-size: 0.8rem;
	}
}
</style>
