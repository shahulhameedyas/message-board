const mongoose = require("mongoose")
const connectDb = async () => {
    await mongoose.connect(process.env.DB).then(()=>{
        console.log("MongoDb connected")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDb;