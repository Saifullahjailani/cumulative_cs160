import React, { useContext } from "react";
import "./login.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState } from "react";
import HOST from "../../localhost";
import { useNavigate } from "react-router-dom";

const Login = ({ trigger }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const go = useNavigate();
  function hunddleResponse(data) {
    if (data.validation) {
      trigger();
      go("/home");
    } else {
      setWrong(false);
    }
  }
  async function loginFunc({ username, password }) {
    if (!(username || password)) {
      return;
    }
    const response = await fetch(HOST + "/auth", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    hunddleResponse(data);
  }
  const [wrong, setWrong] = useState(true);
  return (
    <div className="Login">
      {wrong || (
        <p className="myH">
          Wrong Passowrd or Username:
          <br />
          Try Again
        </p>
      )}

      <Input
        def={"Username"}
        setState={setUsername}
        position={{ top: "33vh", left: "15vw" }}
      />
      <Input
        inpType="password"
        def={"Password"}
        setState={setPassword}
        position={{ top: "43vh", left: "15vw" }}
      />

      <Button
        txt="Login"
        position={{ top: "55vh", left: "15vw" }}
        params={{ username, password }}
        func={loginFunc}
      />
      <Button
        path={"/signup"}
        txt="Sign Up"
        position={{ top: "65vh", left: "15vw" }}
      />
    </div>
  );
};

export default Login;
