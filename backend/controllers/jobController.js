const Job = require("../models/Job");

exports.createJob = async (req, res) => {
  const { title, desc, location, expLevel, skills, company } = req.body;
  const job = await Job.create({
    title,
    desc,
    location,
    expLevel,
    skills,
    company,
    postedBy: req.user._id,
  });
  res.status(201).json({ job });
};

exports.listJobs = async (req, res) => {
  const jobs = await Job.find().populate("company", "name");
  res.json({ jobs });
};

exports.getJob = async (req, res) => {
  const job = await Job.findById(req.params.id).populate("company postedBy", "name email");
  if (!job) return res.status(404).json({ message: "Not found" });
  res.json({ job });
};

exports.updateJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ job });
};

exports.deleteJob = async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
