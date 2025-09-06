import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
  });

app.post("/submit", (req, res) => {
    if(req.body["text"]=="Veer"){
  res.render(__dirname+"/public/student_dashboard.ejs",{
    text:"Veer"
  });
    }
    else if(req.body["password"]=="alu"){
        res.sendFile(__dirname+"/public/alumni_dashboard.html");
          }
    else {
        res.sendFile(__dirname+"/public/login.html");
        }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
