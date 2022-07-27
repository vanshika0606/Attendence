const express = require("express");
const {Tabledata, GetData, deleteA, Edit} = require("../controller/tableController");
const router = express.Router();


router.route("/").post(Tabledata);
router.route("/data").get(GetData);
router.route("/:id").delete(deleteA).put(Edit);

module.exports = router;