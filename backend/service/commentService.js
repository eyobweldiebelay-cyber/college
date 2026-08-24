const db = require('../db/dbConfig');

const createCommentService = async (
    sender_id,
    receiver_role,
    message
) => {
const sql = `
        INSERT INTO comments(sender_id, receiver_role, message)VALUES (?, ?, ?) `;
 const [result] = await db.query(sql, [sender_id,receiver_role,message]);
   
    return result;
};

const getCommentsService = async (receiver_role) => {

    const sql = `
        SELECT
            c.comment_id,
            c.message,
            c.receiver_role,
            c.created_at,
            u.userid AS sender_id,
            u.username AS sender_username,
            u.role AS sender_role

        FROM comments c

        JOIN users u ON c.sender_id = u.userid WHERE c.receiver_role = ?
        ORDER BY c.created_at DESC `;
      const[rows,fields]=await db.query(sql,[receiver_role]);
     

    return rows;
};


module.exports = {
    createCommentService,
    getCommentsService
};