import React from "react";
import "./signup.css";
import Button from "../../components/Button";
import { useState } from "react";
import Input from "../../components/Input";
import HOST from "../../localhost";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

const Signup = ({ trigger }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [email, setEmail] = useState("");
  const [warn, setWarn] = useState("");
  const navigator = useNavigate();

  async function hunddleResponse(data) {
    if (data.status == "successfully added user") {
      trigger();
      navigator("/home");
    }
    setWarn(data.status);
  }
  async function createAccount({ username, password, confPassword, email }) {
    if (
      !(username || password || confPassword || email) ||
      password != confPassword
    ) {
      console.log();
      return;
    } else {
      const data = {
        username,
        password,
        email,
      };

      const body = JSON.stringify(data);

      axios
        .request({
          method: "POST",
          url: HOST + "/adduser",
          data: {
            username,
            password,
            email,
          },
        })
        .then((data) => hunddleResponse(data.data))
        .catch((err) => console.error(err));
    }
  }
  return (
    <div className="signup">
      <Input
        def={"Username"}
        setState={setUsername}
        position={{ top: "23vh", left: "15vw" }}
      />
      <Input
        def={"Email"}
        setState={setEmail}
        position={{ top: "33vh", left: "15vw" }}
      />
      <Input
        inpType="password"
        def={"Password"}
        setState={setPassword}
        position={{ top: "43vh", left: "15vw" }}
      />
      <Input
        inpType="password"
        def={"Password"}
        setState={setConfPassword}
        position={{ top: "53vh", left: "15vw" }}
      />

      <Button
        txt="Create Account"
        position={{ top: "68vh", left: "15vw" }}
        params={{ username, password, confPassword, email }}
        func={createAccount}
      />
      <p className="warn">{warn}</p>
    </div>
  );
};

export default Signup;
