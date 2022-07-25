import { React, useState, useEffect } from "react";
import Cards from "./Card";
import "../../styles/AdminDashboard.css";
import { requestQuery } from "../../apis/firestoreDatabase";

export default function EventsItem() {
  const [queryArr, changeQueries] = useState([]);
  const [queryId, changeQueryId] = useState([]);

  const [dashboardValues, setdashboardValues] = useState({
    totalQueries: 0,
    Completed: 0,
    Pending: 0,
    declined: 0,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await requestQuery(localStorage.getItem("email"));
        const temp = [];
        const tempId = [];
        res.forEach((doc) => {
          temp.push(doc.data());
          tempId.push(doc.id);

          //For Calculating Total Number of Queries

          setdashboardValues({
            ...dashboardValues,
            totalQueries:dashboardValues.totalQueries++,
          });
          
          //For Calculating Number of declined Queries
          if (doc.data().status === "Denied") {
            setdashboardValues({
              ...dashboardValues,
              declined:dashboardValues.declined++,
            });
          
          //For Calculating Number of Verified Queries
          }else if(doc.data().status==="Verified"){
            setdashboardValues({
              ...dashboardValues,
              Completed:dashboardValues.Completed++,
            });
          }

          //For Calculating Number of pending queries
          setdashboardValues({
            ...dashboardValues,
            Pending:dashboardValues.totalQueries-dashboardValues.declined-dashboardValues.Completed,
          });
          
        });

        
        changeQueries(temp);
        changeQueryId(tempId);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div id="mainDashBoardContainer">
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
          <p className="numbersDashboard">
            {dashboardValues.Completed}
          </p>
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
      <div id="Main_Item_Container">
        <div className="main_card_container">
          <h2 className="heading"> Date Received </h2>
          <h2 className="heading"> Query Id </h2>
          <h2 className="heading"> Name </h2>
          <h2 className="heading"> PRN </h2>
          <h2 className="heading" id="btnHeading">
            Details
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
                color={element.Query % 2 === 0 ? "#D1D1D1" : "#FFFFFF"}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
