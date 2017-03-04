const chalk = require("chalk");
const express = require("express");

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Hello World asdasdsd!");
});

app.listen(port, () => {
    console.log(chalk.green(`App listening on port ${port}`)); // eslint-disable-line no-console
});
