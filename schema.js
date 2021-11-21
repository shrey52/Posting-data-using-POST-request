const mongoose = require("mongoose")
const { Schema } = mongoose;

const dataSchema = new Schema({
  StudentName: String, 
  RegistrationNumber: Number,
  Marks: Number
});

module.exports = mongoose.model("myDataSchema",dataSchema,"SL-Lab-DataSchema")