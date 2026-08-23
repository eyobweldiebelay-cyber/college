const {deleteService}=require('../service/deleteService')
const deleteUser=async(req,res)=>{
    try {
       
        const {id}=req.params;
        const result=await deleteService(id);
        res.status(200).json({msg:"deleted successfull",
           

            
        });

        
    } catch (error) {
        console.log(error)
        res.status(401).json({msg:"catch block Error"})
        
    }
}
module.exports={deleteUser}