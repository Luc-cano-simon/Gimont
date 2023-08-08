import express from "express";
import fileUploader from "./routes/fileUploader";
import webserviceManager from "./routes/webserviceManager";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(webserviceManager);
app.use(fileUploader);

export default {
	path: "/api",
	handler: app,
};
