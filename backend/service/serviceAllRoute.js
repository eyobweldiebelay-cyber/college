const db=require('../db/dbConfig');
const selectService=async()=>{
    const sql=`SELECT userid,username,email,password FROM users`;
     const[rows,fields]=await db.query(sql);
     return rows;

};
        
    

module.exports={selectService};