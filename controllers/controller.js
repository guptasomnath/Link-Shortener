import { uid } from "uid";
import { ShortUrls } from "../database/database.js";

export const getHomePage = (req, res) => {
    res.render("homePage/index");
}

export const createShortUrl = async (req, res) => {
    const dataToSave = new ShortUrls({
      originalUrl: req.body.url,
      urlID: uid(5),
    });
  
    try {
      const response = await dataToSave.save();
      res.render("homePage/index", {
        response: response,
      });
    } catch (err) {
      res.render('errorPage/error', {
        errorTitle : "400 - BAD REQUEST",
        errorMessage : err.message
      });
    }
  }

export const redirectUrl = async (req, res) => {
    try {
      const response = await ShortUrls.findOne({ urlID: req.params.id });
      if(response != null) return res.redirect(response.originalUrl);
      
      res.render('errorPage/error', {
        errorTitle : "404 - ID NOT FOUND",
        errorMessage : "This is not a valid id. short a link first and then try again."
      });
      
    } catch (err) {
      res.json({ error: err });
    }
  }

 export const getErrorPage = (req, res) => {
   res.render('errorPage/error');
}