// service/userService.js

const db = require('../db/dbConfig');

const getUsersByUsername = async(username) => {

    const sql = `
        SELECT userid, username, email,role FROM users WHERE username LIKE ? `;

    const [result] = await db.query(sql, [`%${username}%`]);

    return result;//most be array declaration in async/await function because it will return array of object

};



module.exports = {
    getUsersByUsername
};