const express = require("express");
const router = express.Router();
const {welcomeUser} = require("../Controllers/User.controllers.js");
const {about, register, login, registerUser, loginUser, dashboard } = require("../Controllers/User.controllers.js");

router.get("/", welcomeUser);
router.get("/about", about);
router.get("/loginUser", login);
router.get("/dashboard", dashboard);
router.get("/register", register);
router.post("/registerUser", registerUser);
router.post("/login", loginUser)

module.exports = router; //exporting the router