const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middlewares/authMiddleware");
const { applyToJob, listApplications } = require("../controllers/applicationController");

router.post("/", protect, authorize("candidate"), applyToJob);
router.get("/", protect, authorize("recruiter", "admin"), listApplications);

module.exports = router;
