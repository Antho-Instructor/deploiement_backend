const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(3000, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Server is running on port 3000");
	}
});
