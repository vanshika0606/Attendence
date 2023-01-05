const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
     name:{
        type:String,
     },
     rollNo:{
         type:Number,
     },
     DateOfCheckIn:{
      type:String,
     },

     checkIn:{
        type:String,
     },
     checkOut:{
      type:String
     }
     
})


module.exports = mongoose.model("Student",studentSchema);