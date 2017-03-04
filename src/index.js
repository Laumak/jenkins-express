const chalk = require("chalk");
const express = require("express");

const app = express();
const port = process.env.PORT || 4000;

app.get("/", function(req, res) {
    res.send("Hello World xxxxxxxx asdasd!");
});

app.listen(port, function() {
    console.log(chalk.green("App listening on port " + port)); // eslint-disable-line no-console
});
