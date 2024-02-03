const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoDB = process.env.DB_CONNECTION;
const db = mongoose.connection;
mongoose.connect(mongoDB);
db.on("connected", console.error.bind(console, "mongo connection open"));

const PotentialMember = mongoose.model(
  "Lead",
  new Schema({
    Email: { type: String, required: true },
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    PostalCode: { type: String, required: true },
    MobilePhone: { type: String, required: true },
    Objectives: { type: String, required: true },
    RefferedBy: { type: String, required: true },
    Notes: { type: String, required: true },
  })
);

module.exports = PotentialMember;
