const express = require('express');
const cors = require('cors');
const app = express();

const FormMailer = require("./components/mailer/form/Sender");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin: "*"}));

app.post("/api/mailer/form", async (req, res) => {
	res.json(
		{
			"sent": await FormMailer.sendEmail(req.body)
		}
	);
});

app.get("*", (req, res) => {
	res.redirect("https://biuro-zbylut.pl");
	res.end();
});

app.listen(3001, () => console.log("Listening on port 3001..."));