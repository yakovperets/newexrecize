const userService = require("./servicesUsers");
const errors = require("../errorhandler");

//כניסת משתמש חדש
const addUser = async (req, res) => {
  try {
    const newUser = req.body;
    await userService.addUser(newUser);
    res.send("your request complete!");
  } catch (error) {
    errors.handelError(res, 500, error.message);
  }
};
//כניסת משתמש קיים
const getUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const isExist = await userService.getUserId(id);
    res.send(isExist);
  } catch (error) {
    errors.handelError(res, 500, error.message);
  }
};
module.exports = { addUser, getUserId };
