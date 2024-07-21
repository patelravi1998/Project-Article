const article =require('../model/articleModel')

const createArticleDao=async(data)=>{
    await article.create(data);
}

const getArticlesDao=async ()=>{
    return await article.findAll()
}

const getArticleByIdDao =async (id)=>{
    const result= await article.findOne({
        where:{
            id:id
        }
    })
    return result
}


const updateArticleDao=async(title,id)=>{
    await article.update({title:title},{
        where:{
            id:id
        }
    })
}

const deleteArticleDao=async(id)=>{
    await article.destroy({
        where:{
            id:id
        }
    })
}


module.exports={createArticleDao,getArticlesDao,getArticleByIdDao,updateArticleDao,deleteArticleDao}
