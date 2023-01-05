const express = require("express");
const { CheckIn, checkOut, studentInSchool } = require("../controller/studentController");

const router = express.Router();


router.route("/").post(CheckIn);
router.route("/check-out").post(checkOut);
router.route("/students-in-school").get(studentInSchool)

module.exports = router;