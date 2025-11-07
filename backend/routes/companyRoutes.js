const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middlewares/authMiddleware");
const { createCompany, listCompanies, getCompany } = require("../controllers/companyController");

router.post("/", protect, authorize("recruiter", "admin"), createCompany);
router.get("/", listCompanies);
router.get("/:id", getCompany);

module.exports = router;
