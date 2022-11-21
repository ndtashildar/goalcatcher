const {pool} = require("../db");

module.exports = async () => {
  try {
    const queryResult = await pool.query(
      `SELECT matches.home_score, matches.away_score, plays.away_id FROM matches INNER JOIN plays ON matches.mid = plays.mid INNER JOIN teams ON teams.tid = plays.home_id WHERE teams.team_name = 'England'`
    );
    return queryResult.rows.length > 0 ? queryResult.rows[0] : null;
  } catch (error) {
    throw error;
  }
};
