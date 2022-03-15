require("./models/db");
const express = require("express");
const path = require("path");

const exphbs = require("express-handlebars");
const app = express();
const bodyparser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

app.use(bodyparser.json());

app.set("views", path.join(__dirname, "/views/"));
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutDir: __dirname + "/views/layouts/",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);

app.set("view engine", "handlebars");
app.set("view engine", "hbs");

const employeeController = require("./controllers/employeeController");

app.listen(3000, () => {
  console.log("express server started");
});

app.use("/employee", employeeController);
