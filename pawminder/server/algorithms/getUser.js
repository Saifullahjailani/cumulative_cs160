var fs = require("fs");
const path = require("path");
const USER_FOLDER = path.resolve(__dirname, "../users");

function getUser(username) {
  const file = path.join(USER_FOLDER, username + ".json");
  if (!fs.existsSync(file)) {
    console.log(username + " User not found");
    return false;
  }
  var obj = JSON.parse(fs.readFileSync(file, "utf8"));
  return obj;
}

module.exports = getUser;
