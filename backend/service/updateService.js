const db = require('../db/dbConfig');

const updateService = async (id, username, email, password) => {

    const [rows] = await db.query(
        `UPDATE users
         SET username = ?, email = ?, password = ?
         WHERE userid = ?`,
        [username, email, password, id]
    );

    if (rows.affectedRows === 0) {
        throw new Error("User not found or nothing was updated");
    }

    return rows;
};

module.exports = {
    updateService
};