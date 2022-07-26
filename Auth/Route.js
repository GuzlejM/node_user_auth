const express = require("express");
const router = express.Router();
const { adminAuth } = require("../middleware/auth");
const {
  deleteUser,
  isLoggedIn,
  login,
  register,
  sendResetPassword,
  updateRole,
  updatePassword,
} = require("./auth");

router.route("/deleteUser").delete(deleteUser);
router.route("/is_logged_in").get(isLoggedIn);
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/reset_password").post(sendResetPassword);
router.route("/reset_password/:id/:token").put(updatePassword);
router.route("/update").put(updateRole);

router.route("/updateRole").put(adminAuth, updateRole);
router.route("/deleteUser").delete(adminAuth, deleteUser);

module.exports = router;
