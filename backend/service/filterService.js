// service/userService.js

const db = require('../db/dbConfig');

const getUsersByUsername = async(username) => {

    const sql = `
        SELECT userid, username, email
        FROM users
        WHERE username LIKE ?
    `;

    const [result] = await db.query(sql, [`%${username}%`]);

    return result;

};



module.exports = {
    getUsersByUsername
};