/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const path = require("path");

const app = express();
const publicpath = path.join(__dirname, "..", "dist");

app.use(express.static(publicpath));

app.get("*", (req, res) => {
	res.sendFile(path.join(publicpath, "index.html"));
});

app.listen(process.env.PORT || 3000, () => {
	console.log("Server is running on port " + process.env.PORT || 3000);
});
