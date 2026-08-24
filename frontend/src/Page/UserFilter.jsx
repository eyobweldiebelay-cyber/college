import React, { useState } from "react";
import '../css/Filter.css'

export default function UserFilter() {

    const [username, setUsername] = useState("");
    const [users, setUsers] = useState([]);

    const filterUsers = async () => {

        try {

            const response = await fetch(
                `http://localhost:4400/api/users/filter?username=${username}`
            );

            const data = await response.json();

            setUsers(data);

        } catch (error) {

            console.error(error);

        }
    };

    return (
        <div className="page">

            <h2>Search Users</h2>

            <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <button onClick={filterUsers} className="button">
                Search
            </button>

            <hr />

           {users.length > 0 && (
  <table className="user-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.userid}>
          <td>{user.userid}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
        </tr>
      ))}
    </tbody>
  </table>
)}

        </div>
    );
}