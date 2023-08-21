const express = require("express");
const routerUser = express.Router();
const { addUser, getUserId } = require("./controllerUser");
//כניסת משתמש קיים
routerUser.post("/login", getUserId);
//כניסת משתמש חדש
routerUser.post("/singup", addUser);
//רשימה של משתמשים
// routerUser.get("/", userController.getUsers);

//משתמש ע"פ איי די
routerUser.get("//:id", (req, res) => {
  //code..
});
//עדכון משתמש
routerUser.put("//:id", (req, res) => {
  //code..
});
//מחיקת משתמש
routerUser.delete("//:id", (req, res) => {
  //code..
});
//ייצוא הראוטר לאפליקציה
module.exports = routerUser;
