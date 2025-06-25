const crypto = require("crypto");

function generateToken(user) {
  return crypto.randomBytes(16).toString("hex");
}

function isAdmin(user) {
  if (user == "admin") return true;
  else return false;
}

module.exports = { generateToken, isAdmin };
