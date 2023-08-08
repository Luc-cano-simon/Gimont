<script>
export default {
	methods: {
		getLastParamInUrlBySplitter(url, splitter) {
			const lastIndex = url.lastIndexOf(splitter);
			return url.slice(lastIndex + 1);
		},
		validEmail(email) {
			var regEmail =
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return regEmail.test(email);
		},
		validPhone(telephone) {
			telephone.trim();
			telephone = telephone.split(" ").join("");
			var regPhone = /^0[1-9][0-9]{8}$/;
			return regPhone.test(telephone);
		},
		fileList(documentString) {
			return documentString.split("|");
		},
		formatFileName(file) {
			const pathFile = this.getPathFile(file);
			const fileName = pathFile.split("/")[1];
			const regex = /[-_.]+/gi;
			if (fileName) {
				return fileName.replace(regex, " ");
			} else {
				return pathFile.replace(regex, " ");
			}
		},
		getPathFile(file) {
			const extensionIndex = file.lastIndexOf(".");
			return file.split(file[extensionIndex])[0];
		},
		getExtensionFile(file) {
			const extensionIndex = file.lastIndexOf(".");
			return file.split(file[extensionIndex])[1];
		},
		currentYearDocumentList(documents) {
			return documents.filter(
				(document) =>
					new Date(document.upDateD).getFullYear() >=
					new Date().getFullYear()
			);
		},
		archiveDocumentList(documents) {
			return documents.filter(
				(document) =>
					new Date(document.upDateD).getFullYear() <
					new Date().getFullYear()
			);
		},
	},
};
</script>
