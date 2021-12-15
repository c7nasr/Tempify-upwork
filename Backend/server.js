const app = require("./app");
const mongoose = require("mongoose");


const port = process.env.PORT || 5000;

const ServerBoot = async () =>{
    try {
        // await mongoose.connect(db, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // })
        // console.info("Database Connected.... Starting Server")
        app.listen(port, () => {
            console.info("Server Booted on port " + port + "...");
        });
    }catch (e) {
        console.error("Server is Down!")
        process.exit()
    }


}

_ = ServerBoot()

