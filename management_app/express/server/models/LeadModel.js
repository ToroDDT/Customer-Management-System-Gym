const mongoose = require("mongoose");

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

const PotentialMember = mongoose.model("lead", schema);

module.exports = PotentialMember;
