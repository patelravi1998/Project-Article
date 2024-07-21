const userInfo =require('../model/userModel')

const registerUserDao=async(data)=>{
    await userInfo.create(data);
}

const getUserDataByUserName=async (username)=>{
    const result=await userInfo.findOne({
        where:{
            username:username
        }
    })
    return result
}

module.exports={registerUserDao,getUserDataByUserName}

