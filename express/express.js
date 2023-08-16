//יבוא האקספרס
// const { json } = require("body-parser");
const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();
const port = 3000;
const uuid = require("uuid");
//אקספורט לתקיית ג'ייסון
const jsonfile = require("jsonfile");
const filePath = "./data.json";
//קריאה מתקיית הג'ייסון
const readingFromData = () => {
  jsonfile.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(data);
  });
};
readingFromData();
// שליחת דאטא לג'ייסון
const newData = {
  name: "Alice",
  age: 25,
  city: "London",
};
const writingToData = (newData) => {
  jsonfile.writeFile(filePath, newData, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data has been written to the file.");
    return "Data has been written to the file.";
  });
};
writingToData(newData);

//הצפנה
const bcrypt = require("bcrypt");
const saltRounds = 10;
const hashing = (object) => {
  bcrypt.hash(object.password, saltRounds, function (err, hash) {
    object.password = hash;
    return object;
  });
};
const hashingOnArray = (array) => {
  array.forEach((element) => {
    hashing(element);
  });
};

//יכולת לקרוא קבצי ג'ייסון
app.use(express.json());

//מערך משתמשים
const users = [
  {
    id: "0",
    email: "a@gmail.com",
    password: "123",
  },
  {
    id: "1",
    email: "b@gmail.com",
    password: "456",
  },
  {
    id: "2",
    email: "c@gmail.com",
    password: "789",
  },
];
writingToData(users);
//ניהול שגיאות בשלב היירוט
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "Internal Server Error";
  res.status(statusCode).json({ error: errorMessage });
});
//הדפסת היוזרס
app.get("/users", (req, res) => {
  hashingOnArray(users);
  res.send(users);
});
// //הדפסת יוזר על פי id
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.send(user);
});
//שלב לא גמור - בדיקת הסיסמא בעת ההתחברות
//
//
//
// //יצירת משתמש חדש
app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  hashingOnArray(users);
  res.send(users);
});
//יצירת משתמש חדש בעל איי די ייחודי
app.post("/newidusers", (req, res) => {
  const newUser = req.body;
  const newUserId = uuid.v4();
  newUser.id = newUserId;
  users.push(newUser);
  hashingOnArray(users);
  res.send(users);
});
//יצירת משתמש חדש ובדיקה אם הסיסמה והאימייל נכונים
app.post(
  "/create-user",
  [
    body("password")
      .matches(/^(?=(?:[^0-9]*[0-9]){3})(?=(?:[^\w]*\w){4})(?=.*[$@]).*$/)
      .withMessage("Invalid password format"),
    body("email")
      .isEmail()
      .withMessage("Invalid email address")
      .isLength({ min: 6 })
      .withMessage("Email must be at least 6 characters long")
      .matches(/example\.com$/)
      .withMessage("Email must be from example.com domain"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json({ message: "User created successfully" });
  }
);

// //עדכון משתמש
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;
  const i = users.findIndex((user) => user.id === userId);
  if (i === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  //מיזוג אובייקטים
  users[i] = { ...users[i], ...updatedUserData };
  hashingOnArray(users);
  res.send(users);
});
//מחיקת משתמש
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  const delteUserData = req.body;
  const i = users.findIndex((user) => user.id === userId);
  if (i === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  users.splice(i, 1);
  res.send(users);
});
//שלב ג - בדיקה אם משתמש קיים על פי אימייל וסיסמה
app.get("/users/:email/:password", (req, res) => {
  const userId = req.params.id;
  const userPassword = req.params.password;
  const user = users.find(
    (user) => user.id === userId && user.pasword === userPassword
  );

  if (!user) {
    return res.status(404).json({ error: "wrong credentials" });
  }
  res.send("User is connected");
});
//שלב ח' קבלת מידע ושליחת מידע לשרתים חיצוניים
//קבלת מידע משרת חיצוני
async function gettingFromUrl(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

async function sendingUrl() {
  const url = "https://dummyjson.com/products";
  const x = await gettingFromUrl(url);
  console.log(x);
}

sendingUrl();

//הרצת פורט
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
