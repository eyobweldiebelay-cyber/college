const express=require('express')
const router=express.Router();
//import loginControlller
const loginController=require('../controller/loginController')
//create route ApI
router.post("/login",loginController.login);
module.exports=router;