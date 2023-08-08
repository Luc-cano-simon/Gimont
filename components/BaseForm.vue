<template>
	<section class="theForm">
		<div class="close_bkg" @click="$parent.showForm = false"></div>
		<div class="popupRF">
			<h2 class="titleCat" v-if="title">{{ title }}</h2>

			<form id="contactForm">
				<div class="inputGroup">
					<BaseInput
						:required="true"
						:value="lastname"
						placeholder="Doe"
						label="Nom"
						:error="errors.lastname"
						img="arrow"
						@onValueChange="lastname = $event"
					/>
					<BaseInput
						:required="true"
						:value="firstname"
						placeholder="Jhon"
						label="Prénom"
						:error="errors.firstname"
						img="arrow"
						@onValueChange="firstname = $event"
					/>
				</div>

				<BaseInput
					:required="true"
					:value="email"
					placeholder="j.doe@gonzalez.com"
					label="Email"
					:error="errors.email"
					img="arrow"
					@onValueChange="email = $event"
				/>

				<BaseTextArea
					:nb-rows="8"
					:required="true"
					label="Votre message"
					placeholder="Votre message"
					:value="message"
					:error="errors.message"
					@onValueChange="message = $event"
				/>

				<BaseCheckBox
					class="checkbox"
					:value="true"
					v-model="infosValidConditionUse"
					:checked="infosValidConditionUse"
					@change="infosValidConditionUse = !infosValidConditionUse"
					:error="errors.infosValidConditionUse"
				>
					<span
						>Conditions d'utilisations. Pour en savoir plus et
						exercer vos droits,
						<nuxt-link to="/mentions-legales" class="mentions"
							>cliquez ici</nuxt-link
						></span
					>
				</BaseCheckBox>
				<div class="superCenter">
					<AntiBot
						:hold-time="holdButtonTime"
						@checked="checkForm()"
					/>
				</div>
			</form>
		</div>
	</section>
</template>

<script>
import utils from "@/mixin/utils.vue";
import wsCalls from "@/mixin/wsCalls.vue";

export default {
	name: "BaseForm",
	mixins: [utils, wsCalls],
	data() {
		return {
			address: "",
			errors: {},
			email: "",
			firstname: "",
			holdButtonTime: 0.25,
			infosValidConditionUse: true,
			lastname: "",
			message: "",
		};
	},
	props: {
		title: String,
		pType: {
			type: String,
			default: "web-contact",
		},
		subject: {
			type: String,
			default: "Demande de contact",
		},
	},
	methods: {
		toggleDropdown(event, dropdownToggled) {
			setTimeout(() => {
				this[dropdownToggled] = event;
			}, 100);
		},
		setValue(event, valueToChange) {
			this[valueToChange] = event;
		},
		resetForm() {
			this.email = "";
			this.firstname = "";
			this.infosValidConditionUse = false;
			this.lastname = "";
			this.message = "";
			this.zipcode = "";
		},
		async checkForm() {
			if (
				this.email &&
				this.validEmail(this.email) &&
				this.firstname &&
				this.infosValidConditionUse &&
				this.lastname &&
				this.message
			) {
				const requestMessageBody = {
					pMsgEmail: this.email,
					pMsgFirstname: this.firstname,
					pMsgInfosValidConditionUse: this.infosValidConditionUse,
					pMsgLastname: this.lastname,
					pMsgMessage: this.message,
					pMsgSubject: this.subject,
					pType: this.pType,
				};

				try {
					const response = await this.sendContact(
						this.$axios.defaults.baseURL,
						requestMessageBody
					);

					if (!response && !response[0]) {
						throw new Error(`response is ${response}`);
					}

					if (response[0].statement === "success") {
						this.$store.commit("addMessage_to_user", {
							val: "Votre demande à bien été envoyée.",
							duration: 2000,
						});
					} else {
						throw new Error(response[0]);
					}

					console.log(response);
				} catch (error) {
					console.error(
						`An error as occured at checkForm() in BaseForm.vue ${error}`
					);
				}
			} else {
				this.errors = {};

				if (this.lastname === "") {
					this.errors.lastname = "Veuillez renseigner votre nom.";
				}
				if (this.firstname === "") {
					this.errors.firstname = "Veuillez renseigner votre prénom.";
				}
				if (this.message === "") {
					this.errors.message = "Veuillez écrire un message.";
				}
				if (this.email === "") {
					this.errors.email = "Veuillez renseigner votre email.";
				} else if (!this.validEmail(this.email)) {
					this.errors.email = "Veuillez renseigner un email valide.";
				}
				if (!this.infosValidConditionUse) {
					this.errors.infosValidConditionUse =
						"Veuillez accepter les conditions d'utilisations.";
				}
			}
		},
	},
};
</script>

<style>
.theForm {
	padding: 1rem;
}
.theForm .textareaContainer,
.theForm .inputContainer {
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
}

.theForm .inputContainer input {
	height: 40px;
	border: 0;
	/* background: #eee; */
	font-size: 1rem;
	padding: 0 0.5rem;
	margin-top: 0;
	border-bottom: 1px #aaa solid;
}

.theForm .inputContainer input[type="file"] {
	margin-top: 0.5rem;
}

.theForm .textareaContainer textarea {
	height: 100px;
	background: #fafafa;
	font-family: inherit;
	border: none;
	margin-top: 0.4rem;
	border-bottom: 1px #aaa solid;
}
.theForm .inputGroup {
	display: flex;
	width: 100%;
	gap: 2rem;
}
.theForm .inputContainer.fileInput input {
	border-bottom: 0;
	background: #fff;
}
.theForm .containerDropdown {
	position: relative;
}

.theForm .validForm {
	margin: 1rem auto 0.5rem;
	padding: 0.5rem 1rem;
	border-radius: 1rem;
	border: 2px var(--color-identity) solid;
	background-color: var(--color-identity);
	font-weight: 600;
	font-size: 1rem;
	color: white;
	text-transform: uppercase;
	transition: all 300ms ease-in-out;
	cursor: pointer;
}
.theForm .validForm:hover {
	background-color: var(--text-col);
	color: var(--color-identity);
}
.theForm .mentions {
	transition: all 300ms ease-in-out;
}
.theForm .mentions:hover {
	color: var(--color-identity);
}
@media all and (max-width: 600px) {
	.theForm .inputGroup {
		display: block;
	}
}
</style>
