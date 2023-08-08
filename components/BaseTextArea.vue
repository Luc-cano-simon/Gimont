<script>
export default {
	props: {
		required: Boolean,
		value: String,
		nbColumns: Number,
		nbRows: Number,
		spellCheck: Boolean,
		autoComplete: String,
		required: Boolean,
		readOnly: Boolean,
		placeholder: {
			type: String,
			default: "Exemple...",
		},
		error: String,
		label: String,
	},
};
</script>
<template>
	<div class="inputContainer">
		<p class="label" v-if="label">
			{{ label }}<span class="required" v-if="required"> *</span>
		</p>
		<label class="baseTextarea">
			<span class="inputWrapper">
				<textarea
					:class="{ input__invalid: error }"
					@keydown.prevent.enter="
						$emit('enterDown', $event.target.value)
					"
					@input="$emit('onValueChange', $event.target.value)"
					:value="value"
					:required="required"
					:readonly="readOnly"
					:autocomplete="autoComplete"
					:placeholder="placeholder"
					:spellcheck="spellCheck"
					:rows="nbRows"
					:cols="nbColumns"
				/>
			</span>
		</label>
		<div class="error" v-if="error">
			<p class="content">
				{{ error }}
			</p>
		</div>
	</div>
</template>

<style scoped>
.inputContainer {
	margin-top: 1rem;
	height: fit-content;
	margin: auto;
}

.label {
	margin: 0;
	font-size: 1rem;
}

.baseTextarea {
	display: block;

	margin-bottom: 0.15rem;
}

.inputWrapper {
	display: flex;
	align-items: center;
	position: relative;
}

.inputWrapper textarea {
	width: 100%;
	min-height: 40px;
	border: 1px solid var(--color-identity);
	padding: 0.2rem 1rem;
	border-radius: 0.5rem;
	font-size: 1rem;
	letter-spacing: 0.5px;
}

.inputWrapper :is(textarea:focus, textarea:hover) {
	outline: 2px solid var(--color-identity);
}

.inputWrapper textarea::placeholder {
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
	.inputWrapper textarea::placeholder {
		font-size: 0.8rem;
	}
}
</style>
