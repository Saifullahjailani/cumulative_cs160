const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const overWriteDog = require("./algorithms/overWriteDog");
const cors = require("cors");
const fs = require("fs");
const addUser = require("./algorithms/addUser");
const cookieParser = require("cookie-parser");
const hash = require("./algorithms/hash");
const getUser = require("./algorithms/getUser");
const { JSONCookie } = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");
const addDog = require("./algorithms/addDog");
const addRecord = require("./algorithms/addRecord");

const host = "localhost";
const port = 8000;

 var publicPath = path.join(__dirname, "..", "client", "build");

app.use(express.static(publicPath));
app.use(bodyParser.json({ limit: "30mb" }));

// app.use(
//   cors({
//     origin: ["http://localhost:8000", "http://localhost:3000"],
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );
app.use(cookieParser());

app.get("/*", (req, res) => {
  res.sendFile(path.join(publicPath, "/"));
});

app.post("/adduser", (req, res) => {
  // console.log(req.body);
  console.log("pinged adduser");
  const data = {
    username: req.body.username,
    passwordHash: req.body.password,
    email: req.body.password,
    dogs: [],
    uid: uuidv4(),
  };
  const stat = addUser(data, "wx");
  setCookie(res, data);
  res.json(stat);
});

function validateAuth(req, res, next) {
  const { cookies } = req;
  const user = getUser(req.body.username);
  if ("Pawminder_application" in cookies) {
    const token = JSON.parse(cookies.Pawminder_application);
    if (user.username == token.username && token.password == user.password) {
      res.json({ status: 200, validation: true });
    } else {
      res.json({ status: 0, validation: false });
    }
  } else {
    next();
  }
}

app.post("/auth", (req, res) => {
  const user = getUser(req.body.username);
  if (!user) {
    res.json({ status: 0, validation: false });
  }
  if (req.body.password == user.passwordHash) {
    setCookie(res, {
      username: user.username,
      passwordHash: user.password,
      email: user.email,
    });
    res.json({ status: 200, validation: true });
  } else {
    res.json({ status: 0, validation: false });
  }
});

function Auth(req, res, next) {
  const { cookies } = req;
  if ("Pawminder_application" in cookies) {
    const token = JSON.parse(cookies.Pawminder_application);
    const user = getUser(token.username);
    const userdat = {
      username: user.username,
      passwordHash: user.password,
      email: user.email,
    };
    const v = JSON.stringify(userdat);
    const h = hash(v);
    // naives auth for now
    if (user.username == userdat.username) {
      next();
    } else {
      res.json({ status: 0, validation: false, name: "" });
    }
  } else {
    res.json({ status: 0, validation: false, name: "" });
  }
}

app.post("/saveDogInfo", Auth, (req, res) => {
  addDog(req.body, req);
  res.json({ status: 200, validation: true });
});

app.post("/getDogsList", Auth, (req, res) => {
  const user = userFromCookie(req);
  res.json({ dogs: user.dogs, count: user.dogs.length });
});

app.post("/addRemApi", Auth, (req, res) => {
  let user = getUser(req.body.token);
  user.reminders.push(req.body.vacinationRecord);
  overWriteDog(user, req.body.token);
  res.json({ message: "set" });
});

app.post("/getRecordList", Auth, (req, res) => {
  const dog = getUser(req.body.message);
  res.json({ dogs: dog.vacinationRecord, count: dog.vacinationRecord.length });
});

app.post("/getDog", Auth, (req, res) => {
  const dog = getUser(req.body.token);
  res.json(dog);
});

app.post("/getRemsAPI", Auth, (req, res) => {
  const dog = getUser(req.body.token);
  res.json(dog.reminders);
});

app.post("/addVacRecordApi", Auth, (req, res) => {
  if (req.body.recToken) {
    console.log("edit");
    console.log(req.body);
    overWriteDog(req.body.vacinationRecord, req.body.recToken);
    res.json({ message: "mod" });
  } else {
    let dog = getUser(req.body.token);
    dog.vacinationRecord.push(req.body.vacinationRecord);
    addRecord(req.body.vacinationRecord, req.body.token);
    res.json({ message: "set" });
  }
});

app.post("/authorize", Auth, (req, res) => {
  const user = userFromCookie(req);
  console.log(user);
  res.json({ name: user.username, validation: true });
});

app.post("/deauth", Auth, (req, res) => {
  res.clearCookie("Pawminder_application");
  res.json({ validation: false });
});

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

function setCookie(res, value) {
  const data = { username: value.username, password: value.password };
  res.cookie("Pawminder_application", JSON.stringify(data), { maxAge: 8.64e7 });
}

function userFromCookie(req) {
  const { cookies } = req;
  const token = JSON.parse(cookies.Pawminder_application);
  return getUser(token.username);
}
