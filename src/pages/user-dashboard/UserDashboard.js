import React from "react";
import { useNavigate } from "react-router-dom";
import ContainerItem from "./UserContainerItem";
import "../../styles/UserDashboard.css";
import {FormStatus} from '../login-signup/State'

function User() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="main">
        <div className="user-info-label">
          <div className="info-d1"> </div>
          <div className="info-d2"> </div>
        </div>
          <div className="options">
            <button
              href="/form"
              onClick={() => {
                FormStatus.formStatus = true;
                navigate("/form");
              }}
            >
              Submit a query
            </button>
            <button
              href="/#/"
              onClick={() => {
                console.log("help Center")
              }}
            >
              Help Centre
            </button>
          </div>
        <ContainerItem />
      </div>
    </div>
  );
}

export default User;
