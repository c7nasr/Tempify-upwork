
const Mailjs = require("@cemalgnlts/mailjs");
const MailService = new Mailjs();

exports.CreateUser = async (req,res) => {
    try {
        const {email,password} = req.body
        let user
        if (!email || !password) {
            user = await  MailService.createOneAccount()
        }else{
            user = await MailService.register(email,password)
        }
        

        return res.json(user);
    }catch (e) {

        console.log("ServerDown, "+e)
        return res.json({status:"failed",error:e.toString()})
    }
}

exports.LoginUser = async (req,res) => {
    try {
        const {mail,pass} = req.body
        const user = await  MailService.login(mail,pass)

        return res.json(user);
    }catch (e) {

        console.log("ServerDown, "+e)
        return res.json({status:"failed",error:e.toString()})
    }
}

exports.GetUser = async (req,res) => {
    try {
        const {id,token} = req.query
        MailService.token = token
        const user = await  MailService.getAccount(id)


        return res.json(user);
    }catch (e) {

        console.log("ServerDown, "+e)
        return res.json({status:"failed",error:e.toString()})
    }
}


exports.DeleteUser = async (req,res) => {
    try {
        const {id} = req.body
        const user = await MailService.deleteAccount(id)

        return res.json(user);
    }catch (e) {

        console.log("ServerDown, "+e)
        return res.json({status:"failed",error:e.toString()})
    }
}