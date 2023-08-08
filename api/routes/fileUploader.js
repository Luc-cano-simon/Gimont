// Creer un dossier uploadimg en racine du projet
// faire npm i express-fileupload
import { Router } from "express";
import fileUpload from "express-fileupload";
import { existsSync } from "fs";

const router = Router();

const size_limit = 3 * 1024 * 1024; //3MO
const accepted_mimetype = ["application/pdf", "image/png", "image/jpeg"];

router.use(fileUpload());

router.post("/upload", function (req, res) {
	if (!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).send("No files were uploaded.");
	}

	let sampleFile = req.files.fileUp;
	let uploadPath;

	let file_name = sampleFile.name
		.trim()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.split(" ")
		.join("_")
		.replace(/[&\/\\#,+()$~%'":*?’<>{}]/g, "")
		.toLowerCase();
	if (process.env.NODE_ENV === "development") {
		uploadPath = process.cwd() + "/uploadimg/" + file_name;
	} else {
		uploadPath = __dirname + "\\..\\uploadimg\\" + file_name;
	}

	// Fichier trop lourd
	if (sampleFile.size > size_limit) {
		return res.send("size too big");
	}
	// extension interdites
	if (!accepted_mimetype.find((el) => el === sampleFile.mimetype)) {
		return res.send("forbidden mimetype");
	}
	// le fichier existe deja
	if (existsSync(uploadPath)) {
		return res.send("file already exist");
	}
	// Use the mv() method to place the file somewhere on your server
	sampleFile.mv(uploadPath, function (err) {
		if (err) return res.status(500).send(err);
		const response = { success: true, filename: file_name };
		res.send(response);
	});
});

export default router;
