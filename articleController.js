const {createArticleDao,getArticlesDao,getArticleByIdDao,updateArticleDao,deleteArticleDao}=require("../dao/articleDao")
const {isEmpty}=require("lodash")
const jwt=require("jsonwebtoken")
const SECRETKEY="asdfff@13455"
const createArticle=async(req,res,next)=>{
    try{
        const token=req.headers.token
        const isTokenVerified=jwt.verify(token,SECRETKEY)
        if(!isEmpty(isTokenVerified)){
            await createArticleDao(req.body)
            res.status(200).json({ message: 'Article Created Successfully'});
        }else{
            return next({status:404,message:"Invalid Token"})
        }
    }catch(error){
        next({ status: 404, message: "Error In Creating Article Data" });
    }
}


const getArticles=async(req,res,next)=>{
    try{
        const result= await getArticlesDao()
        if(!isEmpty(result)){
            res.status(200).json({data:result});
        }else{
            return next({status:404,message:"No Data Found"})
        }
    }catch(error){
        next({ status: 404, message: "Error In Finding Article Data" });
    }
}


const getArticleById=async(req,res,next)=>{
    try{
        const articleId=req.params.id
        const result= await getArticleByIdDao(articleId)
        if(!isEmpty(result)){
            res.status(200).json({data:result});
        }else{
            return next({status:404,message:"No Data Found"})
        }
    }catch(error){
        next({ status: 404, message: "Error In Finding Article Data" });
    }
}

const updateArticle=async(req,res,next)=>{
    try{
        const token=req.headers.token
        const articleId=req.params.id
        const title=req.query.title
        const isTokenVerified=jwt.verify(token,SECRETKEY)
        if(!isEmpty(isTokenVerified)){
            await updateArticleDao(title,articleId)
            res.status(200).json({ message: 'Article Updated Successfully'});
        }else{
            return next({status:404,message:"Invalid Token"})
        }
    }catch(error){
        next({ status: 404, message: "Error In Updating data" });
    }
}

const deleteArticle=async(req,res,next)=>{
    try{
        const token=req.headers.token
        const articleId=req.params.id
        const isTokenVerified=jwt.verify(token,SECRETKEY)
        if(!isEmpty(isTokenVerified)){
            await deleteArticleDao(articleId)
            res.status(200).json({ message: 'Article Deleted Successfully'});
        }else{
            return next({status:404,message:"Invalid Token"})
        }
    }catch(error){
        next({ status: 404, message: "Error In Deleted data" });
    }
}

module.exports={createArticle,getArticles,getArticleById,updateArticle,deleteArticle}