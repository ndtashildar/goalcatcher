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


//@route GET hid:aid
//@desc Get match history between two teams
//@access private
router.get("/:hid/:aid", async (req,res) => {
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

//Export router
module.exports = router;
