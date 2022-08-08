import React from "react";
import { useNavigate } from "react-router-dom";
import Cards from "./UserCard";
// import "../../styles/AdminDashboard.css";
import "../../styles/UserDashboard.css";
import { requestQuery } from "../../apis/firestoreDatabase";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { auth } from "../Firebase/Firebase";

export default function EventsItem() {
  const navigate = useNavigate();
  const [queryArr, changeQueries] = useState([]);
  const [queryId, changeQueryId] = useState([]);
  //Use State for invoking close and open button

  const [show, setShow] = useState(false);
  const handleClose = () => { 
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [dashboardValues, setdashboardValues] = useState({
    totalQueries: 0,
    Completed: 0,
    Pending: 0,
    declined: 0,
  });

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
        try {
          const res = await requestQuery(user.email);
          const temp = [];
          const tempId = [];
          res.forEach((doc) => {
            temp.push(doc.data());
            tempId.push(doc.id);

            setdashboardValues({
              ...dashboardValues,
              totalQueries: dashboardValues.totalQueries++,
            });

            //For Calculating Number of declined Queries
            if (doc.data().status === "Denied") {
              setdashboardValues({
                ...dashboardValues,
                declined: dashboardValues.declined++,
              });

              //For Calculating Number of Verified Queries
            } else if (doc.data().status === "Verified") {
              setdashboardValues({
                ...dashboardValues,
                Completed: dashboardValues.Completed++,
              });
            }

            //For Calculating Number of pending queries
            setdashboardValues({
              ...dashboardValues,
              Pending:
                dashboardValues.totalQueries -
                dashboardValues.declined -
                dashboardValues.Completed,
            });
          });
          changeQueries(temp);
          changeQueryId(tempId);
        } catch (err) {
          console.log(err);
        }
      
    });
  }, []);

  async function logOut() {
    navigate("/");
    await auth.signOut();
  }

  return (
    <div 
      id="Main_Item_Container_page">
      <div id="DashBoard">
        <div
          className="DashBoardContainers"
          style={{ borderRight: "1px solid #DEDEDE" }}
        >
          <p className="headingDashboard">Total Queries</p>
          <p className="numbersDashboard">{dashboardValues.totalQueries}</p>
        </div>
        <div
          className="DashBoardContainers"
          style={{ borderRight: "1px solid #DEDEDE" }}
        >
          <p className="headingDashboard">Completed</p>
          <p className="numbersDashboard">{dashboardValues.Completed}</p>
        </div>
        <div
          className="DashBoardContainers"
          style={{ borderRight: "1px solid #DEDEDE" }}
        >
          <p className="headingDashboard">Pending</p>
          <p className="numbersDashboard">{dashboardValues.Pending}</p>
        </div>
        <div className="DashBoardContainers">
          <p className="headingDashboard">Declined</p>
          <p className="numbersDashboard">{dashboardValues.declined}</p>
        </div>
      </div>

      <div className="options">
        <button
          className="btn btn-primary"
          href="/form"
          onClick={() => {
            navigate("/form");
          }}
        >
          Submit a query
        </button>
        <button
          className="btn btn-primary"
          href="/#/"
          onClick={handleShow}
        >
          Help Centre
        </button>
      </div>

      
         {/* Modal for help center */}

         <Modal show={show} onHide={handleClose} animation={false}>
          {/* Header for the modal */}
          <div>
            <Modal.Header closeButton>
              <Modal.Title style={{ fontSize: "1.25rem",marginLeft:"40%"}}>
               Help Center
              </Modal.Title>
            </Modal.Header>
          </div>
          {/*Main Body of the Modal */}

          <Modal.Body
            id="ModalBodyContainer"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                overflow: "auto",
                height: "200px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="contactInfo">Helpline Number :</p>
                <p className="contactInfo"></p>
              </div>
              <hr></hr>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="contactInfo">Contact Email :</p>
                <p className="contactInfo"></p>
              </div>
              <hr></hr>
            
            </div>
          </Modal.Body>
         
        </Modal>

      <div id="User-Info-container" className="User-flex">
        <div className="User-details-container User-flex">
          <div className="Option-detail Admin-flex">
            <p className="Info-property">Showing</p>
            <p className="Info-value">Query</p>
          </div>
          <div className="Option-detail Admin-flex">
            <p className="Info-property">Sort By</p>
            <p className="Info-value">Date</p>
          </div>
        </div>
        <div className="User-Logout-btn-container User-flex">
          <button className="btn btn-primary" onClick={logOut}>
            Logout
          </button>
        </div>
      </div>
      <div id="Main_Item_Container">
        <div className="main_card_container mainHeaderContainer">
          <h2 className="heading"> Date </h2>
          <h2 className="heading"> Query Id </h2>
          <h2 className="heading"> Name </h2>
          <h2 className="heading"> PRN </h2>
          <h2 className="heading" id="btnHeading">
            Show Details
          </h2>
        </div>
        {queryArr.map((element, i) => {
          return (
            <>
              <Cards
                key={i}
                date={element.PaymentDate}
                docs={element.Documents}
                email={element.Email}
                NEFT={element.NEFTrefNumber}
                prn={element.PRN}
                PYear={element.PassingYear}
                Prog={element.Program}
                Uni={element.Univerity}
                compContactNumber={element.companyContactNumber}
                compContactPersonal={element.companyContactPersonal}
                CompEmail={element.companyEmail}
                CompName={element.companyName}
                queryId={queryId[i]}
                name={element.candidateName}
                status={element.status}
                statusDate={element.statusDate}
                color={i % 2 === 0 ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)"}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
