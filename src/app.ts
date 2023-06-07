import express from "express";
import BodyParser from "body-parser";
import path from "path";

import router from "./routes";

const app = express();

app.use(BodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use(router);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Ouvindo a porta 3000");
});