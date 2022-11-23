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

//@route GET match/:hid
//@desc Get match history between two teams
//@access private
router.get("/match/:hid", async (req,res) => {
  try {
    const { hid } = req.params
    const history = await mw.getIndividualHistory(hid)

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
// We can also feed the name straight into the url rather than doing ids
// router.get("/flag/country", async (req,res) => {
//   try {
//     const { country } = req.params
//     const flag = await mw.getTeamFlag(country)

//     return res.status(200).json({
//         message: "Flag Found",
//         payload: flag,
//     });

//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       message: "Internal Server Error",
//       payload: error,
//     });
//   }
// });


//Export router
module.exports = router;
