const mongoose = require("mongoose");
const connection = mongoose.connect(process.env.DB_CONNECTION);

const schema = new mongoose.Schema({
  Email: String,
  First_Name: String,
  Last_Name: String,
  Birthday: String,
  Postal_Code: Number,
  Mobile_PhoneNumber: Number,
  Objectives: String,
  Referred_By: String,
  Notes: String,
});

const PotentialMember = connection.model("lead", schema);

module.exports = PotentialMember;
