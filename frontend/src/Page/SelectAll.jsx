import React from 'react'
import api from '../api';
import{useEffect,useState}from 'react'

 function SelectAll() {
    const[students,setStudents]=useState([]);
    useEffect(()=>{
    api.get("/getall")
       .then(response=>{
        console.log(response.data);
        setStudents(response.data);
        
        
       })
       .catch((error)=>{
        console.log("Error",error);

       });
       

    },[]);
  return (
    <div>
      <table>
        <tr>
          <thead>
            <th>Stu ID</th>
            <th>Stu username</th>
            <th>Stu Email</th>
            <th>Stu password</th>
          </thead>
        </tr>
        <tbody>
          
              <h1>Total Student: {students.length}</h1>
              
    {students.map((student)=>(
      <div key={student.userid}>
        <p>{student.userid}</p>
        <p>{student.username}</p>
         <p>{student.email}</p>
          <p>{student.password}</p>

      </div>
    ))}
          
        </tbody>
      
      </table>
      {/*
         <h1>Total Student: {students.length}</h1>
    {students.map((student)=>(
      <div key={student.userid}>
        <p>{student.userid}</p>
        <p>{student.username}</p>
         <p>{student.email}</p>
          <p>{student.password}</p>

      </div>
    ))}
      */}
    

   
  
    </div>
  )
  //   <pre>{JSON.stringify(students, null, 2)}</pre>
}

export default SelectAll