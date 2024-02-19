const asyncHandler = require("express-async-handler");
const PotentialMember = require("../models/LeadModel");

const newLead = asyncHandler(async (req, res, next) => {
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
});

const findAllLeads = asyncHandler(async (req, res, next) => {
  const ListOfLeads = await PotentialMember.find({});
  res.json(ListOfLeads);
});

const updateLeadInfo = asyncHandler(async (req, res, next) => {
  const leadFirstName = req.body.FirstName;
  const lead = await PotentialMember.findOne({ FirstName: leadFirstName });
});

module.exports = { newLead, findAllLeads };
