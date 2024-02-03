var express = require("express");
var router = express.Router();
const PotentialMember = require("../models/LeadModel");
const asyncHandler = require("express-async-handler");
const leadsController = require("../controllers/leadsController");

router.post("/", leadsController.newLead);

router.get("/records", leadsController.findAllLeads);

module.exports = router;
