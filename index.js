const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const category = require("./data/category.json");
const chefData = require('./data/chef-data.json');

app.use(cors());

app.get("/", (req, res) => {
	res.send("Server is running");
});

app.get("/category", (req, res) => {
	res.send(category);
});

app.get("/chef-data", (req, res) => {
	res.send(chefData);
});

app.listen(port, () => {
	console.log(`API is running on port: ${port}`);
});
