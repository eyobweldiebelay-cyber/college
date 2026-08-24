const mysql=require('mysql2')
const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, '../.env')
});
console.log("DATABASE:", process.env.DB_NAME);
console.log("DB:", process.env.DB_NAME);
console.log("USER:", process.env.USER_NAME);
console.log("HOST:", process.env.HOST_NAME);
//create parammeter 
const configg={
  user:process.env.USER_NAME,
  host:process.env.HOST_NAME,
  password:process.env.PASS,
   database:process.env.DB_NAME

};
console.log("CONFIG DATABASE:", configg.database);
//establish connection
const db=mysql.createPool(configg);
//check connection
db.getConnection(function(err){
    if (err) {
        console.log("faield");
        
    }
    else{
        console.log("connected")
    }
})
module.exports=db.promise();