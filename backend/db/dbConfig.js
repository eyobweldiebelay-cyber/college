const mysql=require('mysql2')
//create parammeter 
const config={
  user:"college",
  host:"localhost",
  password:"college",
   database:"college"

};
//establish connection
const db=mysql.createPool(config);
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