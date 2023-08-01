import express from "express";
import path from "path";

import route from "./routes/route.js";
import { connectDb } from "./database/database.js";

const app = express();

connectDb(); //connect the database

app.use(express.static(path.resolve("./views")));
app.set("view engine", "ejs");
app.set(path.resolve("./views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', route);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server lisiting at port " + PORT));
