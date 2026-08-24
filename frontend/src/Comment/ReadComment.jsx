import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/ReadeComment.css';

function ReadComment() {

    const [comments, setComments] = useState([]);

    useEffect(() => {

        const getComments = async () => {

            try {

                const token = localStorage.getItem('token');

                const response = await axios.get('http://localhost:4400/comments',{
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
             
              setComments(response.data);

            } catch (error) {

                console.log(error);
            }
        };

        getComments();

    }, []);


    return (
        <div className='page'>

            <h2>Read Comment Here </h2>
            <h1>{comments.length}</h1>
            <div className='map'>

            {comments.map((comment) => (

                <div key={comment.comment_id}>

                    <h4>
                        From: {comment.sender_username}
                    </h4>

                    <p>
                        {comment.message}
                    </p>

                    <small className='date'>
                        {comment.created_at}
                    </small>

                    <hr />

                </div>
                

            ))}
            </div>

        </div>
    );
}

export default ReadComment;