import React from "react";
import Button from "../../components/Button";
import axios from "axios";
import HOST from "../../localhost";
import "./index.css";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

const Profile = ({ trigger }) => {
  const [name, setName] = React.useState("");
  const navigate = useNavigate();
  React.useEffect(() => {
    axios
      .post(HOST + "/authorize", { message: "none" })
      .then((response) => setName(response.data.name))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="diplay-profile">
      <p>Hello {name}!</p>
      <Button
        txt="Logout"
        position={{ top: "55vh", left: "15vw" }}
        params={{ navigate, trigger }}
        func={logout}
      />
      <Button path={-1} txt="Back" position={{ top: "65vh", left: "15vw" }} />
    </div>
  );
};

function logout({ navigate, trigger }) {
  axios
    .post(HOST + "/deauth", {})
    .then((resm) => {
      if (!resm.data.validation) {
        trigger();
        navigate("/");
      }
    })
    .catch((error) => console.log(error));
}

export default Profile;
