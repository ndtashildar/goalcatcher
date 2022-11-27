const {pool} = require("../db");

module.exports = async () => {
  try {
    const queryResult = await pool.query(
      `SELECT lid AS value, CONCAT(city,\'\, \',country) AS label FROM locations`
    );
    return queryResult.rows.length > 0 ? queryResult.rows : null;
  } catch (error) {
    throw error;
  }
};
