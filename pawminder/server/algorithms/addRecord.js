const fs = require("fs");
const overWriteDog = require("./overWriteDog");
const getUser = require("./getUser");
const path = require("path");

const { v4: uuidv4 } = require("uuid");
const USER_FOLDER = path.resolve(__dirname, "../users");

function addRecord(data, token) {
  const dog = getUser(token);
  const fileToken = uuidv4();
  const fileName = path.join(USER_FOLDER, fileToken + ".json");
  let strdata = JSON.stringify(data);
  dog.vacinationRecord.push(fileToken);
  fs.writeFileSync(fileName, strdata, {
    encoding: "utf8",
    flag: "w",
  });
  overWriteDog(dog, token);
}

module.exports = addRecord;
