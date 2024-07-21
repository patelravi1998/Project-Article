const {sequelize}=require('../sequelize')
const {DataTypes}=require('sequelize')

const article= sequelize.define('article',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: true
    },
    content:{
        type: DataTypes.STRING,
        allowNull: true
    },
    userid:{
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    tableName: 'article',
    timestamps: false // Disable timestamps
})

module.exports=article