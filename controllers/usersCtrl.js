
const User = require("../models/user");

module.exports = {
  me,
};

 async function me (req, res)  {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};
