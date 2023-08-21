const bcrypt = require("bcrypt");

const saltRounds = 10; // Number of salt rounds for bcrypt

// Function to hash a password
async function hashPassword(password) {
  return await bcrypt.hash(password, saltRounds);
}

// Function to compare a password with a hashed password
async function comparePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

module.exports = {
  hashPassword,
  comparePassword,
};
