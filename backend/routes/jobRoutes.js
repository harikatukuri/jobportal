const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middlewares/authMiddleware");
const { createJob, listJobs, getJob, updateJob, deleteJob } = require("../controllers/jobController");

router.post("/", protect, authorize("recruiter", "admin"), createJob);
router.get("/", listJobs);
router.get("/:id", getJob);
router.put("/:id", protect, authorize("recruiter", "admin"), updateJob);
router.delete("/:id", protect, authorize("recruiter", "admin"), deleteJob);

module.exports = router;
