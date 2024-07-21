const bcrypt=require("bcrypt")
const {registerUserDao,getUserDataByUserName}=require("../dao/userDao")
const {isEmpty}=require("lodash")
const jwt=require("jsonwebtoken")
const SECRETKEY="asdfff@13455"

const registerUser=async(req,res,next)=>{
    try{
        const {username,password}=req.body
        const saltRound=10
        const hashPassword=await bcrypt.hash(password,saltRound)
        await registerUserDao({username,password:hashPassword})
        res.status(200).json({ message: 'User Registered Successfully'});
    }catch(error){
        next({ status: 404, message: "Error In Registering data" });
    }
}

const loginUser=async(req,res,next)=>{
    try{
        const {username,password}=req.body
        if(isEmpty(username)){
           return next({status:404,message:"Please Fill UserName"})
        }
        if(isEmpty(password)){
            return next({status:404,message:"Please Fill Password"})
        }
        const userData=await getUserDataByUserName(username)
        if(isEmpty(userData)){
            return next({status:404,message:"UserName is Incorrect"})
        }
        const isPasswordMatched= await bcrypt.compare(password,userData.password)
        console.log("isPasswordMatched",isPasswordMatched)
        if(!isPasswordMatched){
            return next({status:404,message:"Passowrd is Incorrect"})
        }
        const token=jwt.sign(req.body,SECRETKEY,{ expiresIn: '5m' })
        res.status(200).send({message:"User Logged In SuccessFully",token:token})
    }catch(error){
        next({status:404,message:error.message})
    }
}


const getUserByUserName=async(req,res,next)=>{
    try{
        const token=req.headers.token
        const isTokenVerified=jwt.verify(token,SECRETKEY)
        if(!isEmpty(isTokenVerified)){
            const username=req.query.username
            if(isEmpty(username)){
               return next({status:404,message:"UserName Is Not Present"})
            }
            const userData=await getUserDataByUserName(username)
            if(isEmpty(userData)){
                return next({status:404,message:`User  ${username} Is Not Present`})
            }
            return res.status(200).send({data:userData})
        }else{
            return next({status:404,message:"Invalid Token"})
        }

    }catch(error){
        next({status:404,message:error.message})
    }
}

module.exports={registerUser,loginUser,getUserByUserName}