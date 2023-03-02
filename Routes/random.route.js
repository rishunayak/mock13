const express=require("express")

const app=express.Router()

app.get("/",(req,res)=>
{
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let first=Math.random()*char.length
    let sec=Math.random()*char.length

    if(first>sec)
    {
        res.send(char.substring(sec,first))
    }
    else
    {
        res.send(char.substring(first,sec))
    }


})



module.exports=app