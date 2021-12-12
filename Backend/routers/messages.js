
const express = require("express");
const { GetAllMessages,GetMessage,DeleteMessage,SeenMessage } = require("../controllers/messages");
const {LookIP} = require("../libs/middlewares/IPLook");

const router = express.Router();

router.route("/").get(LookIP,GetAllMessages)
router.route("/:message").post(LookIP,GetMessage)
router.route("/:message/delete").post(LookIP,DeleteMessage)
router.route("/:message/seen").post(LookIP,SeenMessage)



module.exports = router;
