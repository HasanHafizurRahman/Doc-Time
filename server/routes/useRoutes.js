const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/useClts");

// router object
const router = express.Router();

// routes
router.post("/login", loginController);
router.post("/register", registerController);

module.exports = router;
