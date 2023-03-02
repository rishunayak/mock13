const mongoose=require("mongoose")


const userDataSchema=mongoose.Schema({
    name:String,
    level:String,
    score:Number,
})

const UserData=mongoose.model("userDatas",userDataSchema)

module.exports=UserData