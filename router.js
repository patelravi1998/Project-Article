const express=require("express")
const router=express.Router()
const {registerUser,loginUser,getUserByUserName}=require('../controller/userController')
const {createArticle,getArticles,getArticleById,updateArticle,deleteArticle}=require('../controller/articleController')


router.post('/register',registerUser)

router.post('/login',loginUser)

router.get('/get-profile',getUserByUserName)   // here i am passing username in query parameter

router.post('/articles',createArticle)

router.get('/articles',getArticles)

router.get('/articles/:id',getArticleById)

router.put('/articles/:id',updateArticle)   // here i am passing title in query parameter

router.delete('/articles/:id',deleteArticle)

module.exports=router