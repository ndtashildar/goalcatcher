const {pool} = require("../db");

module.exports = async () => {
  try {
    const queryResult = await pool.query(
      `SELECT toid AS value, CONCAT(t_name, \' \(\', region,\'\) \') AS label FROM tournaments`
    );
    return queryResult.rows.length > 0 ? queryResult.rows : null;
  } catch (error) {
    throw error;
  }
};
