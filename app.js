const express = require("express");
const app = express();
const path = require("path");
const Router = require("./routes/router");

app.use(express.static(path.join(__dirname, "public")));
app.set("views", "dynamic");

app.use(Router);

app.listen("3000");
