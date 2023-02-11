const { createHash } = require("crypto");
function hash(string) {
  console.log("Password hash", string);
  console.log(string);
  return createHash("sha256").update(string).digest("hex");
}

module.exports = hash;
