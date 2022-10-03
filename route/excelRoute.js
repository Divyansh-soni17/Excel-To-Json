import express from "express";
import multer from "multer";
import { homepage,exceltojson } from "../controller/excelcontroller.js";
const router = express.Router();

//Using multer 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },  
  });
const upload = multer({ storage: storage });



//API calls
router.get("/",homepage);
router.post("/",upload.single("excel"),exceltojson);

export default router;
