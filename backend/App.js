const express=require('express')
const db=require('./db/dbConfig')
const cors=require('cors')
const bcrypt=require('bcrypt')

console.log("DATABASE:", process.env.DB_NAME);

const port=4400;
const app=express()
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({
    extended: true
}));


// Uploaded files
app.use(
    "/uploads",
    express.static("uploads")
);

//add userRout to main
const userRoute= require('./route/userRoute')
app.use("/api",userRoute);
//selectAll
const selectAllRoute=require('./route/selectAllRoute')
app.use("/api",selectAllRoute);
//ById
const routeById=require('./route/routeById')
app.use("/api",routeById);
//filter
const filterRoute=require('./route/filterRoute')
app.use('/api/users',filterRoute)
//loginRoute
const loginRoute=require('./route/loginRoute')
app.use("/api",loginRoute);
//update Route
const updateUser=require('./route/updateRoute')
app.use("/api",updateUser);
//delete user
const deleteUser=require('./route/deleteRoute')
app.use("/api",deleteUser);
//commentRoute 
const commentRoute = require('./route/commentRoute')
app.use(commentRoute);



app.listen(port,()=>{
    console.log(`Server is Running Eyob ${port}`);

})