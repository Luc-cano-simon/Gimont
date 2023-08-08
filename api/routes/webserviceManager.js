import { Router } from "express";
import { post } from "axios";

const router = Router();
const apiKey = "";

router.post("/getWS", async (req, res, next) => {
	if (!req.body || req.body === {}) {
		return res.status(400).send("no body");
	}
	if (!req.body.endpoint) {
		return res
			.status(400)
			.send("definir un endpoint pour votre WS ex: EpArticle.ws");
	}

	try {
		const fullRequest = {
			pKey: apiKey,
			// pKey: process.env.PRIVATE_TEST_KEY,

			...req.body.parameters,
		};

		const response = await post(
			"https://ws2-gbbu02.graphibox.eu/" + req.body.endpoint,
			fullRequest,
			{
				headers: {
					"content-type": "application/json; charset=utf-8",
					referer: process.env.PUBLIC_SITE_PATH,
				},
			}
		);

		const data = await response?.data;

		if (!data) {
			return res.status(400).send("Erreur au retour du ws");
		}
		return res.status(200).send(data);
	} catch (error) {
		return res.status(500).send(`Error on fetch on /getWS : ${error}`);
	}
});

router.post("/getClient", (req, res, next) => {
	post("https://ws-gbbu02.graphibox.eu/GetIP.aspx").then((response) => {
		if (!response.data) {
			return response.status(400).send("Erreur au retour du ws");
		}
		return res.send(response.data);
	});
});

export default router;
