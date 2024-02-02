const asyncHandler = require("express-async-handler");

const newLead = asyncHandler(async (req, res, next) => {
  try {
    const newLead = new PotentialMember({
      Email: req.body.Email,
      First_Name: req.body.First_Name,
      Last_Name: req.body.Last_Name,
      Birthday: req.body.Birthday,
      Postal_Code: req.body.Postal_Code,
      Mobile_PhoneNumber: req.body.Mobile_PhoneNumber,
      Objectives: req.body.Objectives,
      Referred_By: req.body.Referred_By,
      Notes: req.body.Notes,
    });
    await newLead.save();
  } catch (err) {
    console.error(err);
  }
  next();
});

module.exports = { newLead };