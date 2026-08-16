const {userService}=require('../service/userService')
exports.createUser=async(req,res)=>{
    try {
        const{username,email,password}=req.body;
        
  const result= await userService(username,
                                  email,
                                password); 
    
     res.status(200).json({
        message:"Inserted is Successfull Eyob",
         success:true
        
    });
    } catch (error) {
          if (error.message=="Email Aleardy Exist") {
            res.status(400).json({message:message.error});
            
          }
     res.status(500).json({message:"server Error",
                   error:error.message
     })

    }}