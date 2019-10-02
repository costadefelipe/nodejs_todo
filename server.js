const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const todos = require("./routes/todoRoutes")
const app = express();

let mongourl = "mongodb://localhost:27017/todo";

const mongoDb = mongourl;
mongoose.connect(mongoDb);
mongoose.Promisse = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console,"conexão não deu certo"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/api", todos);

const port = 3000
app.listen(port, () => { console.log('Servidor rodando em '+port)})
