import React from "react";
import AddRecord from "../AddRecord";
import { Link, useNavigate, useLocation } from "react-router-dom";

const ModifyRecord = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const { vacine, manuf, date, address, clinic, token, product } =
    location.state;

  return (
    <div>
      <AddRecord
        oldAddress={address}
        oldVaccine={vacine}
        oldManuf={manuf}
        oldDate={date}
        oldClinic={clinic}
        recToken={token}
        oldProduct={product}
        newTitle="Modify Record"
        newBtnText="Confirm"
      />
    </div>
  );
};

export default ModifyRecord;
