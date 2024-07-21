const {Pool}=require('pg')

const pool=new Pool({
    password:'Startup@1998',
    port:5432,
    database:'article',
    userName:'postgres',
    host:'localhost'
})

module.exports={pool}