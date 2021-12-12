const Mailjs = require("@cemalgnlts/mailjs");
const MailService = new Mailjs();
exports.GetAllMessages = async (req,res) => {
    try {
        const {token} = req.query
        MailService.token = token
        const messages = await MailService.getMessages()

        return res.json(messages);
    }catch (e) {

        console.log("ServerDown, "+e)
        return res.json({status:"failed",error:e.toString()})
    }
}

exports.GetMessage = async (req,res) => {
    try {
        const {message} = req.params
        const {token} = req.query
        MailService.token = token

        const messages = await MailService.getMessage(message)

        return res.json(messages);
    }catch (e) {

        console.log("ServerDown, "+e)
        return res.json({status:"failed",error:e.toString()})
    }
}

exports.DeleteMessage = async (req,res) => {
    try {
        const {message} = req.params
        const {token} = req.query
        MailService.token = token

        const messages = await MailService.deleteMessage(message)

        return res.json(messages);
    }catch (e) {

        console.log("ServerDown, "+e)
        return res.json({status:"failed",error:e.toString()})
    }
}

exports.SeenMessage = async (req,res) => {
    try {
        const {message} = req.params
        const {token} = req.query
        MailService.token = token

        const messages = await MailService.setMessageSeen(message)

        return res.json(messages);
    }catch (e) {

        console.log("ServerDown, "+e)
        return res.json({status:"failed",error:e.toString()})
    }
}