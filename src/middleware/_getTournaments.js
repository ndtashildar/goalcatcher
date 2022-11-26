const {pool} = require("../db");

module.exports = async () => {
  try {
    const queryResult = await pool.query(
      `SELECT * FROM tournaments`
    );
    return queryResult.rows.length > 0 ? queryResult.rows : null;
  } catch (error) {
    throw error;
  }
};
