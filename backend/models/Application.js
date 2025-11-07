const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  candidate: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  resumeUrl: { type: String, required: true },
  status: { type: String, enum: ["applied", "shortlisted", "declined"], default: "applied" },
  appliedAt: { type: Date, default: Date.now },
});

appSchema.index({ job: 1, candidate: 1 }, { unique: true });
module.exports = mongoose.model("Application", appSchema);
