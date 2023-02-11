const fs = require("fs");
const addUser = require("./addUser");
const getUser = require("./getUser");
const path = require("path");

const USER_FOLDER = path.resolve(__dirname, "../users");

function overWriteDog(data, dogToken) {
  const dogName = path.join(USER_FOLDER, dogToken + ".json");
  let strdata = JSON.stringify(data);
  fs.writeFileSync(dogName, strdata, {
    encoding: "utf8",
    flag: "w",
  });
}

module.exports = overWriteDog;
