<script>
import axios from "axios";
export default {
	methods: {
		async getArticles(baseUrlPath, params) {
			const bodyArticleRequest = {
				endpoint: "EpArticles.ws",
				parameters: {
					pFct: "GetArticles",
					...params,
				},
			};

			try {
				const responseArticleRequest = await axios.post(
					`${baseUrlPath}/api/getWS`,
					bodyArticleRequest
				);

				if (responseArticleRequest.data) {
					return responseArticleRequest.data;
				} else {
					throw new Error(
						`responseArticleRequest.data is ${responseArticleRequest.data}`
					);
				}
			} catch (error) {
				console.error(
					`An error has occured during the API call at getArticles() mixins/wsCalls.vue l:4: ${error}`
				);
			}
		},
		async getArticlesCategories(baseUrlPath) {
			try {
				const bodyArticleCategoryRequest = {
					endpoint: "EpArticles.ws",
					parameters: {
						pFct: "GetArticlesCat",
					},
				};

				const responseArticleCategoryRequest = await axios.post(
					`${baseUrlPath}/api/getWS`,
					bodyArticleCategoryRequest
				);

				if (responseArticleCategoryRequest.data) {
					return responseArticleCategoryRequest.data;
				} else {
					throw new Error(
						"responseArticleCategoryRequest.data is undefined or null"
					);
				}
			} catch (error) {
				console.error(
					`An error has occured during the API call at getArticlesCategories() mixins/wsCalls.vue l:4: ${error}`
				);
			}
		},
		async getAddressBook(baseUrlPath) {
			try {
				const bodyAddressBookRequest = {
					endpoint: "EpAddressbook.ws",
					parameters: {
						pFct: "GetAddressbookWeb",
					},
				};
				const responseAddressBookRequest = await axios.post(
					`${baseUrlPath}/api/getWS`,
					bodyAddressBookRequest
				);

				if (responseAddressBookRequest.data) {
					return responseAddressBookRequest.data;
				} else {
					throw new Error(
						"responseAddressBookRequest.data is undefined or null"
					);
				}
			} catch (error) {
				console.error(
					`An error has occured during the API call at getAddressBook() mixins/wsCalls.vue l:34: ${error}`
				);
			}
		},
		async getCobwebsGroups(baseUrlPath, params) {
			try {
				const bodyCobwebsRequest = {
					endpoint: "EpCobwebs.ws",
					parameters: {
						pFct: "GetCobwebsGroups",
						...params,
					},
				};

				const responseCobwebsRequest = await axios.post(
					`${baseUrlPath}/api/getWS`,
					bodyCobwebsRequest
				);

				if (responseCobwebsRequest.data) {
					return responseCobwebsRequest.data;
				} else {
					throw new Error(
						"responseCobwebsRequest.data is undefined or null"
					);
				}
			} catch (error) {
				console.error(
					`An error has occured during the API call at getCobwebs() mixins/wsCalls.vue l:34: ${error}`
				);
			}
		},
		async getDocuments(baseUrlPath, params) {
			try {
				const bodyDocumentsRequest = {
					endpoint: "EpDirectories.ws",
					parameters: {
						pFct: "GetDirectories",
						...params,
					},
				};

				const responseDocumentsRequest = await axios.post(
					`${baseUrlPath}/api/getWS`,
					bodyDocumentsRequest
				);

				if (responseDocumentsRequest.data) {
					return responseDocumentsRequest.data;
				} else {
					throw new Error(
						"responseDocumentsRequest.data is undefined or null"
					);
				}
			} catch (error) {
				console.error(
					`An error has occured during the API call at getDocuments() mixins/wsCalls.vue l:34: ${error}`
				);
			}
		},
		async sendContact(baseUrlPath, params) {
			try {
				const bodyContactRequest = {
					endpoint: "EpContact.ws",
					parameters: {
						pFct: "SetContact",
						...params,
					},
				};

				const responseContactRequest = await axios.post(
					`${baseUrlPath}/api/getWS`,
					bodyContactRequest
				);

				if (responseContactRequest.data) {
					return responseContactRequest.data;
				} else {
					throw new Error(
						`responseContactRequest.data is ${responseContactRequest.data}`
					);
				}
			} catch (error) {
				console.error(
					`An error has occured during the API call at sendContact() mixins/wsCalls.vue l:142: ${error}`
				);
			}
		},
	},
};
</script>
