
const express = require("express");
const { GetAllMessages,GetMessage,DeleteMessage,SeenMessage, GetAllDomains } = require("../controllers/messages");
const {LookIP} = require("../libs/middlewares/IPLook");

const router = express.Router();

router.route("/").get(LookIP,GetAllMessages)
router.route("/:message").post(LookIP,GetMessage)
router.route("/:message/delete").post(LookIP,DeleteMessage)
router.route("/:message/seen").post(LookIP,SeenMessage)
router.route("/domains").get(LookIP,GetAllDomains)




module.exports = router;
