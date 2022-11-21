const {pool} = require("../db");

module.exports = async (tid) => {
  try {
    const queryResult = await pool.query(
      `SELECT flag FROM teams WHERE tid = $1`,
      [tid]
    );
    return queryResult.rows.length > 0 ? queryResult.rows : null;
  } catch (error) {
    throw error;
  }
};
