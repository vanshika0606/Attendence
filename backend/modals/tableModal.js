const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
     name:{
        type:String,
     },
     email:{
         type:String,
     },
     id:{
        type:Number,
     }
})


module.exports = mongoose.model("Table",tableSchema);