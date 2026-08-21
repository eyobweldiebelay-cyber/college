const db = require('../db/dbConfig');

const deleteService = async (id) => {

    const [result] = await db.query(
        "DELETE FROM users WHERE userid=?",
        [id]
    );

    if (result.affectedRows === 0) {
        throw new Error("User not found");
    }

    return result;
};

module.exports = {
    deleteService
};