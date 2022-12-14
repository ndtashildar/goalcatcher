const express = require("express"),
 router = express.Router(),
 mw = require("../middleware")

//@route GET test
//@desc test route
//@access private
router.get("/test", async (req,res) => {
  try {
    const test = await mw.test()
    console.log("Here")

    return res.status(200).json({
        message: "Test successful",
        payload: test,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      payload: error,
    });
  }
});

//@route GET teams
//@desc Fetch all teams to fill dropdowns on Landing page
//@access private
router.get("/teams", async (req,res) => {
  try {
    const teams = await mw.getTeams()

    return res.status(200).json({
        message: "Teams Fetched",
        payload: teams,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      payload: error,
    });
  }
});

//@route GET teams/away/:tid
//@desc Fetch all teams to fill dropdowns on Landing page
//@access private
router.get("/teams/away/:tid", async (req,res) => {
  try {
    const { tid } = req.params
    const awayTeams = await mw.getAwayTeams(tid)

    return res.status(200).json({
        message: "Teams Fetched",
        payload: awayTeams,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      payload: error,
    });
  }
});

//@route GET teams/home/:tid
//@desc Fetch all teams to fill dropdowns on Landing page
//@access private
router.get("/teams/home/:tid", async (req,res) => {
  try {
    const { tid } = req.params
    const homeTeams = await mw.getHomeTeams(tid)

    return res.status(200).json({
        message: "Teams Fetched",
        payload: homeTeams,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      payload: error,
    });
  }
});

//@route GET loctions
//@desc Fetch all locations to fill dropdowns on Landing page
//@access private
router.get("/locations", async (req,res) => {
  try {
    const locations = await mw.getLocations()

    return res.status(200).json({
        message: "Locations Fetched",
        payload: locations,
      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Internal Server Error",
        payload: error,
      });
    }
});

//@route GET tournaments
//@desc Fetch all tournaments to fill dropdowns on Landing page
//@access private
router.get("/tournaments", async (req,res) => {
  try {
    const tournaments = await mw.getTournaments()

    return res.status(200).json({
        message: "Tournaments Fetched",
        payload: tournaments,
      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Internal Server Error",
        payload: error,
      });
    }
});

//@route GET match/:hid/:aid
//@desc Get match history between two teams
//@access private
router.get("/match/:hid/:aid", async (req,res) => {
  try {
    const { hid, aid } = req.params
    const history = await mw.getMatchHistory(hid, aid)

    return res.status(200).json({
        message: "Matches Found",
        payload: history,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      payload: error,
    });
  }
});

//@route GET wins/:hid/:aid
//@desc Get match history between two teams
//@access private
router.get("/wins/:hid/:aid", async (req,res) => {
  try {
    const { hid, aid } = req.params
    const wins = await mw.getVSWinCount(hid, aid)

    return res.status(200).json({
        message: "Wins Found",
        payload: wins,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      payload: error,
    });
  }
});

//@route GET games/:hid/:aid
//@desc Get match history between two teams
//@access private
router.get("/games/:hid/:aid", async (req,res) => {
  try {
    const { hid, aid } = req.params
    const games = await mw.getVSGameCount(hid, aid)

    return res.status(200).json({
        message: "Games Found",
        payload: games,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      payload: error,
    });
  }
});

//@route GET match/:tid
//@desc Get match history between two teams
//@access private
router.get("/match/:tid", async (req,res) => {
  try {
    const { tid } = req.params
    const history = await mw.getIndividualHistory(tid)

    return res.status(200).json({
        message: "Matches Found",
        payload: history,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      payload: error,
    });
  }
});

//@route GET flag/:tid
//@desc Get flag url of a certain team
//@access private
router.get("/flag/:tid", async (req,res) => {
  try {
    const { tid } = req.params
    const flag = await mw.getTeamFlag(tid)

    return res.status(200).json({
        message: "Flag Found",
        payload: flag,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      payload: error,
    });
  }
});

//@route GET flags
//@desc Get flags url of all teams
//@access private
router.get("/flags", async (req,res) => {
  try {
    const flags = await mw.getAllFlags()

    return res.status(200).json({
        message: "Flags Found",
        payload: flags,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      payload: error,
    });
  }
});

//@route GET intlWins/:tid
//@desc international win count for a team
//@access private
router.get("/intlWins/:tid", async (req,res) => {
  try {
    const { tid } = req.params
    const awayTeams = await mw.getWinCount(tid)

    return res.status(200).json({
        message: "Intl Wins Fetched",
        payload: awayTeams,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      payload: error,
    });
  }
});

//@route GET teams/away/:tid
//@desc International Games count for a team
//@access private
router.get("/intlGames/:tid", async (req,res) => {
  try {
    const { tid } = req.params
    const awayTeams = await mw.getTotalGamesPlayed(tid)

    return res.status(200).json({
        message: "Intl Games Fetched",
        payload: awayTeams,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      payload: error,
    });
  }
});





//Export router
module.exports = router;
