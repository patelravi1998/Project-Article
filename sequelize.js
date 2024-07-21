const {Sequelize}=require ('sequelize')

const sequelize=new  Sequelize('article','postgres','Startup@1998',{
    host:'localhost',
    dialect:"postgres"
})

const testDbConnection=async()=>{
    await sequelize.authenticate()
}

module.exports={sequelize,testDbConnection}
