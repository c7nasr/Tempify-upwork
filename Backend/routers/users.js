
const express = require("express");
const {CreateUser, GetUser,LoginUser,DeleteUser} = require("../controllers/users");
const {LookIP} = require("../libs/middlewares/IPLook");

const router = express.Router();

router.route("/auth/new").post(LookIP,CreateUser)
router.route("/auth/login").post(LookIP,LoginUser)
router.route("/auth/delete").post(LookIP,DeleteUser)
router.route("/auth").get(LookIP,GetUser)


module.exports = router;
