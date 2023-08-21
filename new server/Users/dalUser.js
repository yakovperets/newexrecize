//דאל - האפסנאי
const jsonfile = require("jsonfile");
const filePath = "C:/Users/User/Documents/new server/Users/users.json";

//שליחת כל המשתמשים
const getUser = async () => {
  try {
    const users = await jsonfile.readFile(filePath);
    return Promise.resolve(users);
  } catch (error) {
    return Promise.reject(error);
  }
};

//שליחה לג'ייסון
const addUser = (user) => {
  try {
    jsonfile.writeFile(filePath, user);
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = {
  getUser,
  addUser,
};
