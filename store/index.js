import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const actions = {
	async nuxtServerInit(store, context) {
		if (!context.isDev) {
			context.$axios.defaults.baseURL = process.env.PUBLIC_SITE_PATH;
		}
		const res = await context.$axios.post("/api/getClient");
		if (res.data) {
			store.commit("setUserInfos", res.data);
		}
	},
};

export const state = () => ({
	window_width: null,
	mobile_width: 768,
	rapidAcess: false,
	ws_actus: [],
	position: {
		latitude: 0,
		longitude: 0,
		place_name: "",
	},
	showMenu: false /**Montrer menu */,
	message_to_user:
		[] /**messages globaux, email envoyé, connexion réussie,... */,
	user_infos: null,
	scrollY: 0,
});

export const mutations = {
	setWindowScrollPosition(state, val) {
		state.scrollY = +val;
	},
	toggleBoolean(state, val) {
		state[val] = !state[val];
	},
	setWindowWidth(state, val) {
		state.window_width = +val;
	},
	addMessage_to_user(state, { val, duration = 50000, type = "" }) {
		let position = -1;
		if (state.message_to_user.length) {
			position = state.message_to_user.findIndex((el) => el.val === val);
		}
		if (position !== -1) {
			state.message_to_user.splice(position, 1);
		} else {
			state.message_to_user.push({ val, duration, type });
		}
	},
	cleanGlobalMessage(state) {
		state.message_to_user = [];
	},
	setUserInfos(state, val) {
		state.user_infos = val;
	},
	setUserPosition(state, val) {
		state.position = val;
		if (process.client) {
			localStorage.setItem("pos", JSON.stringify(val));
		}
	},
	setStoredWS(state, { key, value }) {
		// console.log(value.length);
		for (let index = 0; index < value.length; index++) {
			let position = -1;
			const element = value[index];
			position = state[key].findIndex((el) => el.idA === element.idA);
			if (position === -1) {
				state[key].push(element);
			}
		}
	},
};
