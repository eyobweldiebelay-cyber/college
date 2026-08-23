const express=require('express')
const router=express.Router()
//import update controller
const updateController=require('../controller/updateController')
//create route for update
router.put('/:id',updateController.updateUser)

module.exports=router