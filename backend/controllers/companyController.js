const Company = require("../models/Company");

exports.createCompany = async (req, res) => {
  const company = await Company.create(req.body);
  res.status(201).json({ company });
};

exports.listCompanies = async (req, res) => {
  const companies = await Company.find();
  res.json({ companies });
};

exports.getCompany = async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company) return res.status(404).json({ message: "Not found" });
  res.json({ company });
};
