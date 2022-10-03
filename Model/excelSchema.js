import mongoose from "mongoose";
 
const { Schema } = mongoose;
 

const excelSchema = new Schema({
    name: String,
    class: Number,
    subject: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
     
});
 
const excelModel = mongoose.model("excelData", excelSchema);
export default excelModel;
