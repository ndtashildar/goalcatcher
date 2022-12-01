const {pool} = require("../db");

module.exports = async (team_id) => {
  try {
    const queryResult = await pool.query(
      `SELECT COUNT(*) FROM matches 
      INNER JOIN plays ON matches.mid = plays.mid 
      INNER JOIN teams AS h ON plays.home_id=h.tid 
      INNER JOIN teams  AS a ON plays.away_id=a.tid
      WHERE (h.tid=$1 AND matches.home_score >matches.away_score) OR (a.tid=$1 AND matches.away_score >matches.home_score)`,
      [team_id]
    );
    return queryResult.rows.length > 0 ? queryResult.rows[0] : null;
  } catch (error) {
    throw error;
  }
};