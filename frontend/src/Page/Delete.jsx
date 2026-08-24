import axios from 'axios';
import React, { useState } from 'react';
import '../css/Delete.css';

function Delete() {

    const [id, setId] = useState("");

    const deleteuser = async() => {

        try {

            if (!id) {
                alert("Please enter user ID");
                return;
            }
            const token = localStorage.getItem("token");

            const response = await axios.delete(
                `http://localhost:4400/api/delete/${id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

          

            console.log("Backend response:", response.data);

            alert(response.data.message ||"User deleted successfully");

            setId("");

        } catch (error) {

            console.error("Delete error:", error.message);

        const errorMessage = error.response?.data?.message || "Delete failed";
            alert(errorMessage);
    };
    }
    return (
        <div className='page'>

            <h2>Delete User</h2>

            <input
                type="text"
                placeholder="Enter ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />

            <button onClick={deleteuser} className='button'>
                Delete
            </button>

        </div>
    );
}


export default Delete;