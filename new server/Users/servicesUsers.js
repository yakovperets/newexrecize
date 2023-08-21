//סרביסס - הלוגיקה
const userDal = require("./dalUser");
//הוספת משמש חדש
const addUser = async (newUser) => {
  try {
    const users = await userDal.getUser();
    users.push(newUser);
    userDal.addUser(users);
    return Promise.resolve(users);
  } catch (error) {
    return Promise.reject(error);
  }
};
//משתמש קיים
const getUserId = async (id) => {
  try {
    const users = await userDal.getUser();
    let user = false;
    products.forEach((useralias) => {
      if (useralias.id === id) {
        user = true;
      }
    });
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};
module.exports = { addUser, getUserId };
