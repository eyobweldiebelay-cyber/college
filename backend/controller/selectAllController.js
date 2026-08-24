const {selectService}=require('../service/serviceAllRoute');
const selectAll=async(req,res)=>{
   try {
        const username = req.user.username;
        const userid = req.user.userid;
        const email = req.user.email;
        const role=req.user.role;
   const result= await selectService();
     
      return res.status(200).json({
         username,
      userid,
      email,
      role,
      data:result
      
      })
   
      
    
   } catch (error) {
      console.log(error);
    res.status(500).json({msg:"Database Error ",
         
    })
   }

};
module.exports=selectAll;