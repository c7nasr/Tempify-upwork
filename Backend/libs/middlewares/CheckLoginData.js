exports.CheckLoginData = (req, res, next) =>{
    const {email,name,image} = req.body

    if (!email) return res.json({status:"failed",error:"Wrong Credentials"})

    next()
}
