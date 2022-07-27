const express = require("express");
const bodyParser= require("body-parser");
const app = express();

const table= require("./routes/tableRoute");



app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));



app.use("/" ,table );


module.exports = app;