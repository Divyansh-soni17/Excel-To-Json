import excelModel from "../Model/excelSchema.js";
import XLSX from "xlsx";


export const homepage = async (req, res) => {
  excelModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data != "") {
        res.render("home", { result: data });
      } else {
        res.render("home", { result: {} });
      }
    }
  });
};


export const exceltojson = (req, res) => {
  var workbook = XLSX.readFile(req.file.path);
  var sheet_namelist = workbook.SheetNames;
  var x = 0;
  sheet_namelist.forEach((element) => {
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[x]]);

    xlData.forEach(async (item) => {
      let user = await excelModel.find({ email: item.email });
      if (!user[0]) {
        await excelModel.create(item);
        console.log(item);
      }
    });
    x++;
  });

  res.redirect("/");
};
