const express = require("express");
const bodyParser= require("body-parser");
const app = express();

const student= require("./routes/studentRoute");



app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));



app.use("/" , student );


module.exports = app;