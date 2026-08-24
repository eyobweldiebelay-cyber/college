import React, { useState } from 'react';

import axios from 'axios';
import '../css/SendComment.css';

function SendComment() {

    const [receiverRole, setReceiverRole] = useState('');
    const [message, setMessage] = useState('');

    const sendComment = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem('token');

            const response = await axios.post("http://localhost:4400/comments",{
                    receiver_role: receiverRole,
                    message: message
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert(response.data.msg);

            setMessage('');
            setReceiverRole('');

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.msg ||
                "Failed to send comment"
            );
        }
    };


    return (
        <div className='page'>
       <h2>Send Comment</h2>
          <form onSubmit={sendComment}>

                <select className='select'
                    value={receiverRole}
                    onChange={(e) =>
                        setReceiverRole(e.target.value)}>
                    <option value="">
                        To whom
                    </option>

                    <option value="manager">
                        Manager
                    </option>

                    <option value="user">
                        User
                    </option>
                </select >


                <br /><br />


                <textarea
                    value={message}className='textarea'
                    onChange={(e) =>
                        setMessage(e.target.value)
                    }
                    placeholder="Write your comment"
                />


                <br /><br />


                <button type="submit" className='button'>
                    Send Your Comment
                </button>

            </form>

        </div>
    );
}

export default SendComment;