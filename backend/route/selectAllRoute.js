const express=require('express')
const router=express.Router();
//import selectAllcontroller here
const selectAll=require('../controller/selectAllController')
//create route here
router.get("/getall",selectAll);
module.exports=router;