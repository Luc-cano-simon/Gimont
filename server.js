const express = require("express");
const { loadNuxt } = require("nuxt");
const config = require("./nuxt.config.js");

const app = express();

config.dev = false;

async function start() {
	const nuxt = await loadNuxt("start");
	app.use(nuxt.render);
	app.listen(process.env.PORT || 3000);
}
start();
