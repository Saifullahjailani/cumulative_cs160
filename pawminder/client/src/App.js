import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddInfo from "./pages/AddInfo";
import SelectDog from "./pages/SelectedDog";
import HealthTracking from "./pages/HealthTracking";
import ActivityTraking from "./pages/ActivityTracking";
import AskExpert from "./pages/AskExpert";
import DietTraking from "./pages/DietTracking";
import HealthRecords from "./pages/HealthRecords";
import VacRecord from "./pages/VacRecord";
import AddRecord from "./pages/AddRecord";
import ViewRecord from "./pages/ViewRecords";
import ModifyRecord from "./pages/ModifyRecord";
import Appointment from "./pages/Appointments";
import Feces from "./pages/Feces";
import Sleep from "./pages/Sleep";
import Exercises from "./pages/Exercises";
import Grooming from "./pages/Grooming";
import Shower from "./pages/Shower";
import AddReminder from "./pages/AddReminders";
import Profile from "./pages/Profile";
import axios from "axios";
import HOST from "../src/localhost";
axios.defaults.withCredentials = true;

function App() {
  const [logedIn, setLogin] = React.useState(false);
  const [change, onChange] = React.useState(false);
  function triggerFunc() {
    onChange(!change);
  }
  React.useEffect(() => {
    axios
      .post(HOST + "/authorize", { message: "none" })
      .then((response) => setLogin(response.data.validation))
      .catch((error) => console.log(error));
  }, [change]);
  return (
    <Router>
      <Routes>
        {logedIn && <Route path="/" element={<Home trigger={triggerFunc} />} />}
        {!logedIn && (
          <Route path="/" element={<Login trigger={triggerFunc} />} />
        )}
        {!logedIn && (
          <Route path="/signup" element={<Signup trigger={triggerFunc} />} />
        )}

        {logedIn && (
          <Route path="/home" element={<Home trigger={triggerFunc} />} />
        )}
        {logedIn && (
          <Route path="/signup" element={<Signup trigger={triggerFunc} />} />
        )}
        {logedIn && (
          <Route path="/addInfo" element={<AddInfo trigger={triggerFunc} />} />
        )}
        {logedIn && (
          <Route
            path="/selectDog/:obj"
            element={<SelectDog trigger={triggerFunc} />}
          />
        )}
        {logedIn && (
          <Route
            path="/healthRecords/:obj"
            element={<HealthRecords trigger={triggerFunc} />}
          />
        )}
        {logedIn && (
          <Route
            path="/askExperts"
            element={<AskExpert trigger={triggerFunc} />}
          />
        )}
        {logedIn && (
          <Route
            path="/dietTracking/:obj"
            element={<DietTraking trigger={triggerFunc} />}
          />
        )}
        {logedIn && (
          <Route
            path="/activityTracking/:obj"
            element={<ActivityTraking trigger={triggerFunc} />}
          />
        )}
        {logedIn && (
          <Route
            path="/healthTraking/:obj"
            element={<HealthTracking trigger={triggerFunc} />}
          />
        )}
        {logedIn && (
          <Route
            path="/vaccination/:obj"
            element={<VacRecord trigger={triggerFunc} />}
          />
        )}
        {logedIn && (
          <Route
            path="/addVacRecord/:obj"
            element={<AddRecord trigger={triggerFunc} />}
          />
        )}
        {logedIn && (
          <Route
            path="/editRecord"
            element={<ModifyRecord trigger={triggerFunc} />}
          />
        )}
        {logedIn && (
          <Route
            path="/recordsView"
            element={<ViewRecord trigger={triggerFunc} />}
          />
        )}
        {logedIn && (
          <Route
            path="/reminders/:obj"
            element={<Appointment trigger={triggerFunc} />}
          />
        )}
        {logedIn && (
          <Route
            path="/addreminder/:obj"
            element={<AddReminder trigger={triggerFunc} />}
          />
        )}
        {logedIn && (
          <Route
            path="/dietTracking"
            element={<DietTraking trigger={triggerFunc} />}
          />
        )}
        {logedIn && (
          <Route path="/feces" element={<Feces trigger={triggerFunc} />} />
        )}
        {logedIn && (
          <Route path="/sleep" element={<Sleep trigger={triggerFunc} />} />
        )}
        {logedIn && (
          <Route path="/shower" element={<Shower trigger={triggerFunc} />} />
        )}
        {logedIn && (
          <Route
            path="/exercise"
            element={<Exercises trigger={triggerFunc} />}
          />
        )}
        {logedIn && (
          <Route
            path="/grooming"
            element={<Grooming trigger={triggerFunc} />}
          />
        )}
        {logedIn && (
          <Route path="/" element={<Login trigger={triggerFunc} />} />
        )}
        {logedIn && (
          <Route path="/profile" element={<Profile trigger={triggerFunc} />} />
        )}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
