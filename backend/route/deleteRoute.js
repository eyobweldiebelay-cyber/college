const express=require('express')
const router=express.Router();
const authorize=require('../controller/authRole')
const authmiddleware=require('../controller/authMiddleware')
//import delete controller
const deleteController=require('../controller/deleteController')
router.delete("/delete/:id",authmiddleware,deleteController.deleteUser)
module.exports=router;
