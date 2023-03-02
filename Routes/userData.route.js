const express=require("express")
const UserData = require("../Model/userData.model")

const app=express.Router()


 app.post("/",async(req,res)=>
 {
    await UserData.create(req.body)
    res.send("User Added")
 })

 app.get("/",async(req,res)=>
 {
    let data=await UserData.find().sort({score:-1})
    res.send(data)
 })


 module.exports=app