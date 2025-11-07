const Application = require("../models/Application");

exports.applyToJob = async (req, res) => {
  const { jobId, resumeUrl } = req.body;
  const application = await Application.create({
    job: jobId,
    candidate: req.user._id,
    resumeUrl,
  });
  res.status(201).json({ application });
};

exports.listApplications = async (req, res) => {
  const applications = await Application.find()
    .populate("job", "title")
    .populate("candidate", "name email");
  res.json({ applications });
};
