import mongoose, { Schema } from "mongoose";
import dotenv from 'dotenv/config.js';

export const connectDb = async () => {
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("Database Connected");
    }catch(err){
        console.log({message : 'Database not connected', error : err});
    }
    
}

const DBSchema = new mongoose.Schema({
  //rules
    originalUrl: {
      type: String,
      required: true,
    },
  
    urlID: {
      type: String,
      required: true,
    },
});

export const ShortUrls = mongoose.model("shorturls", DBSchema);