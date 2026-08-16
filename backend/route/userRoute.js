const express=require('express')
const router=express.Router()
//import userController here
const userController=require('../controller/userController')
//create route here
router.post("/user",userController.createUser)
//export mlodule
module.exports=router;