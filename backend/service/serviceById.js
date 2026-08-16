const db=require('../db/dbConfig');
const serviceByID=async(id)=>{
const sql="SELECT userid,username,email FROM users WHERE userid=?";
const [rows]=await db.execute(sql,[id]);
return rows;

};
module.exports=serviceByID;