const express=require('express')
const db=require('./db/dbConfig')
const cors=require('cors')
const port=4400;
const app=express()
app.use(express.json());
app.use(cors());
//add userRout to main
const userRoute= require('./route/userRoute')
app.use("/api",userRoute);
//selectAll
const selectAllRoute=require('./route/selectAllRoute')
app.use("/api",selectAllRoute);
//ById
const routeById=require('./route/routeById')
app.use("/api",routeById);
app.listen(port,()=>{
    console.log(`Server is Running Eyob ${port}`);

})