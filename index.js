import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true })); // replaces body-parser

// Set view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.post("/submit", (req, res) => {
  const { name, password } = req.body;

  if (password === "stu") {
    res.render("student_dashboard", { text: name });
  } else if (password === "alu") {
    res.render("alumni_dashboard", { text: name });
  } else {
    res.sendFile(__dirname + "/public/login.html");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
