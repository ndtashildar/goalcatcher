const {pool} = require("../db");

module.exports = async (team_id) => {
  try {
    const queryResult = await pool.query(
      `SELECT matches.mid, home_score, away_score, m_date, h.team_name AS home_team, h.flag AS home_flag, a.team_name AS away_team, a.flag AS away_flag, t_name, region, neutral, city, country, locations.lid, tournaments.toid 
      FROM matches
      INNER JOIN plays ON matches.mid = plays.mid 
      INNER JOIN teams AS h ON plays.home_id=h.tid 
      INNER JOIN teams  AS a ON plays.away_id=a.tid
      INNER JOIN participates ON matches.mid = participates.mid
      INNER JOIN tournaments ON participates.toid = tournaments.toid
      INNER JOIN locates ON matches.mid = locates.mid
      INNER JOIN locations ON locates.lid = locations.lid
      WHERE h.tid = $1 OR a.tid = $1`,
      [team_id]
    );
    return queryResult.rows.length > 0 ? queryResult.rows : null;
  } catch (error) {
    throw error;
  }
};
