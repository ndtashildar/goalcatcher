const {pool} = require("../db");

module.exports = async (home_id) => {
  try {
    const queryResult = await pool.query(
      `SELECT * FROM matches
      INNER JOIN plays ON matches.mid = plays.mid 
      INNER JOIN teams ON plays.home_id=teams.tid 
      WHERE teams.tid = $1`,
      [home_id]
    );
    return queryResult.rows.length > 0 ? queryResult.rows : null;
  } catch (error) {
    throw error;
  }
};
