const express = require("express");
const exphbs = require("express-handlebars");
const con = require("./db/conn");
const User = require("./models/User");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3000;


app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(express.static("public"));

//conexao com as rotas

con
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Esta rodando na porta: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
  