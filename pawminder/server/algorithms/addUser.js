var fs = require("fs");
const hash = require("./hash");
const path = require("path");
const USER_FOLDER = path.resolve(__dirname, "../users");
const { v4: uuidv4 } = require("uuid");

function addUser(cred, permission, overwrite = false) {
  const file = path.join(USER_FOLDER, cred.username + ".json");
  let res = {};
  console.log(file);
  if (!fs.existsSync(file)) {
    const data = JSON.stringify(cred);
    try {
      fs.writeFileSync(file, data, { encoding: "utf8", flag: permission });
      res.status = "successfully added user";
      res.passwordHash = cred.password;
      res.username = cred.username;
    } catch (e) {
      console.log(e);
    }
    return res;
  } else if (overwrite) {
    const data = JSON.stringify(cred);
    fs.writeFileSync(file, data, { encoding: "utf8", flag: permission });
    res.status = "successfully added user";
    res.passwordHash = cred.password;
    res.username = cred.username;
    return res;
  } else {
    res.status = "A User With This Username Exists";
    return res;
  }
}

module.exports = addUser;
