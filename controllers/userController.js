const auth = require("../services/auth");
const { log } = require("../utils/utils");

let users = [
  { username: "admin", password: "admin123" },
  { username: "user", password: "password" }
];

function getUsers(req, res) {
  log("Fetching users...");
  res.json(users);
}

function login(req, res) {
  const { username, password } = req.body;
  if (username && password) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == username && users[i].password == password) {
        const token = auth.generateToken(username);
        res.send({ token: token });
        return;
      }
    }
    res.status(401).send("Unauthorized");
  } else {
    res.status(400).send("Missing credentials");
  }
}

module.exports = { getUsers, login };
