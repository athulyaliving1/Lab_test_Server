var express = require("express");

const authModule = require("../Module/authModule");
const protect = require("../middleware/authMiddleware.js");
var router = express.Router();

router.post("/register", authModule.registerUser);
router.post("/profile", protect);
router.post("/update", authModule.updateUserProfile);

router.post("/login", authModule.authUser);

module.exports = router;
