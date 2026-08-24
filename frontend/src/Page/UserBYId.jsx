import React,{useState} from 'react'
import '../css/UserByID.css';

function UserBYId() {
   const [id,setId]= useState("");
     const [users, setUsers] = useState(null);
 
     const search = async () => {
 
         try {
 
             const response = await fetch(
                 `http://localhost:4400/api/${id}`
             );
 
             const data = await response.json();
 
             setUsers(data);
 
         } catch (error) {
 
             console.error(error);
 
         }
     };
 
     return (
         <div className='page'>
 
             <h2> Users ByID</h2>
 
             <input
                 type="text"
                 placeholder="Enter Id"
                 value={id}
                 onChange={(e) => setId(e.target.value)}
             />
 
             <button onClick = {search} className='button'>
                 Search
             </button>
 
             <hr />
 {users && (
  <table className='user-table'>
    <thead>
      <tr>
        <th>User ID</th>
        <th>Username</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{users.userid}</td>
        <td>{users.username}</td>
        <td>{users.email}</td>
          <td>{users.role}</td>
      </tr>
    </tbody>
  </table>
)}
 
         </div>
     );
}

export default UserBYId