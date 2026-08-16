const {selectService}=require('../service/serviceAllRoute');
const selectAll=async(req,res)=>{
   try {
   const result= await selectService();
     
      return res.status(200).json(result)
   
      
    
   } catch (error) {
      console.log(error);
    res.status(500).json({msg:"Database Error ",
         
    })
   }

};
module.exports=selectAll;