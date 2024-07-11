const express = require("express");
const router = express.Router();
const {welcomeUser} = require("../Controllers/User.controllers.js");
const {about, register, login, registerUser, loginUser, dashboard, resetPass, changePassword } = require("../Controllers/User.controllers.js");

router.get("/", welcomeUser);
router.get("/about", about);
router.get("/loginUser", login);
router.get("/dashboard", dashboard);
router.get("/register", register);
router.post("/registerUser", registerUser);
router.post("/login", loginUser)
router.post("/reset_password", resetPass)
router.post("/change_pass", changePassword)

module.exports = router; //exporting the router