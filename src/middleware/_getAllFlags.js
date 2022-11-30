const {pool} = require("../db");

module.exports = async () => {
  try {
    const queryResult = await pool.query(
      `SELECT tid, flag FROM teams`
    );
    return queryResult.rows.length > 0 ? queryResult.rows : null;
  } catch (error) {
    throw error;
  }
};