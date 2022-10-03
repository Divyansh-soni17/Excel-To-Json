import express from "express";
import bodyParser from "body-parser";
import path from "path";

import connectToMongo from "./db.js";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// Route import.
import excelsheet from "./route/excelRoute.js";

//connect to db
connectToMongo();

//init app
const app = express();

//set the template engine
app.set("view engine", "ejs");

//fetch data from the request
app.use(bodyParser.urlencoded({ extended: false }));

//static folder path
app.use(express.static(path.resolve(__dirname, "public")));

app.use("/", excelsheet);

//assign port
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`server is working on https://localhost:${port}`)
);
