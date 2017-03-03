import chalk from "chalk";
import express from "express";

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Hello World asdads!");
});

app.listen(port, () => {
    console.log(chalk.green(`App listening on port ${port}`)); // eslint-disable-line no-console
});
