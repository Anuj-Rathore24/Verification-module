import React from "react";
import Cards from "./UserCard";
import "../../styles/AdminDashboard.css";
import { requestQuery } from "../../apis/firestoreDatabase";
import { useState, useEffect } from "react";


/*
Documents: ""
Email: ""
NEFTrefNumber: ""
PRN: ""
PassingYear: ""
PaymentDate: ""
Program: ""
Univerity: ""
candidateName: ""
companyContactNumber: ""
companyContactPersonal: ""
companyEmail: ""
companyName: ""
status:""
*/


export default function EventsItem() {
  const [queryArr, changeQueries] = useState([]);
  const [queryId, changeQueryId] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await requestQuery("anuj@gmail.com");
        const temp=[];
        const tempId=[];
        res.forEach((doc)=>{
          temp.push(doc.data())
          tempId.push(doc.id)
        })
        changeQueries(temp);
        changeQueryId(tempId);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div id="Main_Item_Container">
      <div className="main_card_container">
        <h2 className="heading"> Date </h2>
        <h2 className="heading"> QueryId </h2>
        <h2 className="heading"> Name </h2>
        <h2 className="heading" id="btnHeading">
          Show Details
        </h2>
      </div>
      {
        

        queryArr.map((element, i) => {
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
        })
      }
    </div>
  );
}
