const Auth = require("../models/auth");

const validate = async (req, res) => {
  
  const { username, password } = req.body;

  try {
    let auths = await Auth.findOne({username});
    
    if (!auths) {
      res.status(400).json({
        message: "User doesn't exists!",
      });
    }

    if (password === auths.password) {
      res.status(200).json({
        user: auths,
        message: "User authentication success",
      });
    } else {
      res.status(500).json({
        message: "Invalid credentials!",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "Something went wrong!",
    });
  }
};

module.exports = { validate };
