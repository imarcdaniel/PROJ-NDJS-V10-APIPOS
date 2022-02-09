const router = require("express").Router();
const userCtrl = require("../controllers/usersCtrl.js");
const User = require("../models/user");


//GET USER
router.get("/find/:id", userCtrl.me) / 

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
