const serviceByID=require('../service/serviceById');
const getById=async(req,res)=>{
    try {
        const id=req.params.id;
        const result=await serviceByID(id);
        if(result.length>0){
            res.status(200).json(result[0]);
        }else{
            res.status(404).json({message:"User not found"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Internal Server Error"});
    }
};
module.exports=getById;