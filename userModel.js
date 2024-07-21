const {sequelize}=require('../sequelize')
const {DataTypes}=require('sequelize')

const userInfo= sequelize.define('userinfo',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: true
    },
    username:{
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    tableName: 'userinfo',
    timestamps: false // Disable timestamps
})

module.exports=userInfo