require("dotenv").config()

const express=require("express")
const cors=require("cors")
const connect=require("./Config/Config")
const random=require("./Routes/random.route")

const userData=require("./Routes/userData.route")
//routes


const app=express()

app.use(express.json())
app.use(cors())


app.use("/random",random)
app.use("/data",userData)
//route use






app.get("/",(req,res)=>
{
    res.send("Welecome to server")
})


app.listen(process.env.PORT,async()=>
{
    await connect
    console.log("Server started")
})