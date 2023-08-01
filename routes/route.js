import {getHomePage, createShortUrl, redirectUrl, getErrorPage} from "../controllers/controller.js";
import express from "express";
const route = express.Router();

route
  .get("/", getHomePage)
  .get("/error", getErrorPage)
  .post("/", createShortUrl)
  .get("/:id", redirectUrl);

export default route;
