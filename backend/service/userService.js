 const db=require('../db/dbConfig')
 const bcrypt=require('bcrypt');
 const userService = async(username,email,password) => {

   //check email 
   const[emailExist]=await db.query(`SELECT * FROM users WHERE email=?`,[email]);
   if (emailExist.length > 0) {
       throw new Error("Email aleardy exist");
      
   }
   //hash password
   const hashPassord=await bcrypt.hash(password,10);
   
      const [result]= await db.query(`INSERT INTO users (username,email,password) Values(?,?,?)`,[username,email,hashPassord]); 
      return result;
   };
  

module.exports={userService}