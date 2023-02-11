const fs = require("fs");
const addUser = require("./addUser");
const getUser = require("./getUser");
const path = require("path");

const { v4: uuidv4 } = require("uuid");
const USER_FOLDER = path.resolve(__dirname, "../users");

function addDog(data, req = "") {
  const { cookies } = req;
  const token = JSON.parse(cookies.Pawminder_application);
  const user = getUser(token.username);
  const dogToken = uuidv4();
  const dogName = path.join(USER_FOLDER, dogToken + ".json");
  let strdata = JSON.stringify(data);

  fs.writeFileSync(dogName, strdata, {
    encoding: "utf8",
    flag: "w",
  });
  user.dogs.push(dogToken);

  addUser(user, "w", true);
}

module.exports = addDog;
