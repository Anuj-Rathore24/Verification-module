import React from "react";
import { useNavigate } from "react-router-dom";
import ContainerItem from "./UserContainerItem";
import "../../styles/UserDashboard.css";

function User() {
  const navigate = useNavigate();
  return (
    <div>
      <div id="UserDashBoardContainer">
        <div className="user-info-label">
          <div className="info-d1"> </div>
          <div className="info-d2"> </div>
        </div>
        <div id="User-Info-container" className="User-flex">
        <div className="User-details-container User-flex">
        <div className="options">
            <button
              href="/form"
              onClick={() => {
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
        </div>
        <div className="User-Logout-btn-container User-flex">
          <button className="User-Logout-btn">Logout</button>
        </div>
      </div>
        <ContainerItem />
      </div>
    </div>
  );
}

export default User;
