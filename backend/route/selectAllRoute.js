const express=require('express')
const router=express.Router();
//import selectAllcontroller here
const selectAll=require('../controller/selectAllController');
const authMiddleware = require('../controller/authMiddleware');
const authorize = require('../controller/authRole');
//create route here
router.get("/getall",authMiddleware,authorize("admin"),selectAll);
module.exports=router;