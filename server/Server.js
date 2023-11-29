const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin: "*"}));

app.get("*", (req, res) => {
	res.redirect("https://biuro-zbylut.pl");
	res.end();
});

app.listen(3001, () => console.log("Listening on port 3001..."));