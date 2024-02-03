const asyncHandler = require("express-async-handler");
const PotentialMember = require("../models/LeadModel");

const newLead = async (req, res, next) => {
  try {
    const newLead = new PotentialMember({
      Email: req.body.Email,
      FirstName: req.body.First_Name,
      LastName: req.body.Last_Name,
      PostalCode: req.body.PostalCode,
      MobilePhone: req.body.Mobile_Phone,
      Objectives: req.body.Objectives,
      RefferedBy: req.body.Reffered_By,
      Notes: req.body.Notes,
    });
    await newLead.save();
  } catch (err) {
    console.error(err);
    next(err);
  }
  next();
};

module.exports = { newLead };
