const express=require("express")
const app=express()
require('dotenv').config();
app.use(express.json())
const router=require('./router/router')
app.use('/',router)
const {isEmpty}=require("lodash")


app.use((err,req,res,next)=>{
    console.log("sdcgvnm,.dfghbn")
    if(isEmpty(err)){
        next()
    }else{
        res.status(err.status).json(err.message)
    }
})

app.listen(process.env.PORT)