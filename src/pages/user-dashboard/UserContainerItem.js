import React from "react";
import Cards from "./UserCard";
import "../../styles/AdminDashboard.css";

let arr = [
  {
    Query:1,
    email: "xyz@gmail.com",
    agencyName: "Oxford Times",
    agencyEmail: "oxford@gmail.com",
    Designation: "",
    agencyNo: "1",
    firstName: "XYZ",
    lastName: "ABC",
    universityName: "MIT WPU",
    progamName: "BTECH",
    prn: "1032190937",
    graduationDate: "07/07/2023",
    document: "",
    queryDate: "10/10/22",
    NEFT: "",
    paymentSS: "",
    verificationDocument: "",
  },
  {
    Query:2,
    email: "xyz@gmail.com",
    agencyName: "Oxford Times",
    agencyEmail: "oxford@gmail.com",
    Designation: "",
    agencyNo: "1",
    firstName: "XYZ",
    lastName: "ABC",
    universityName: "MIT WPU",
    progamName: "BTECH",
    prn: "1032190937",
    graduationDate: "07/07/2023",
    document: "",
    queryDate: "10/10/22",
    NEFT: "",
    paymentSS: "",
    verificationDocument: "",
  },
  {
    Query:3,
    email: "xyz@gmail.com",
    agencyName: "Oxford Times",
    agencyEmail: "oxford@gmail.com",
    Designation: "",
    agencyNo: "1",
    firstName: "XYZ",
    lastName: "ABC",
    universityName: "MIT WPU",
    progamName: "BTECH",
    prn: "1032190937",
    graduationDate: "07/07/2023",
    document: "",
    queryDate: "10/10/22",
    NEFT: "",
    paymentSS: "",
    verificationDocument: "",
  },
  {
    Query:4,
    email: "xyz@gmail.com",
    agencyName: "Oxford Times",
    agencyEmail: "oxford@gmail.com",
    Designation: "",
    agencyNo: "1",
    firstName: "XYZ",
    lastName: "ABC",
    universityName: "MIT WPU",
    progamName: "BTECH",
    prn: "1032190937",
    graduationDate: "07/07/2023",
    document: "",
    queryDate: "10/10/22",
    NEFT: "",
    paymentSS: "",
    verificationDocument: "",
  },
  {
    Query:5,
    email: "xyz@gmail.com",
    agencyName: "Oxford Times",
    agencyEmail: "oxford@gmail.com",
    Designation: "",
    agencyNo: "1",
    firstName: "XYZ",
    lastName: "ABC",
    universityName: "MIT WPU",
    progamName: "BTECH",
    prn: "1032190937",
    graduationDate: "07/07/2023",
    document: "",
    queryDate: "10/10/22",
    NEFT: "",
    paymentSS: "",
    verificationDocument: "",
  },
  {
    Query:6,
    email: "xyz@gmail.com",
    agencyName: "Oxford Times",
    agencyEmail: "oxford@gmail.com",
    Designation: "",
    agencyNo: "1",
    firstName: "XYZ",
    lastName: "ABC",
    universityName: "MIT WPU",
    programName: "BTECH",
    prn: "1032190937",
    graduationDate: "07/07/2023",
    document: "",
    queryDate: "10/10/22",
    NEFT: "",
    paymentSS: "",
    verificationDocument: "",
  },
  
];

export default function EventsItem() {

  return (
    <div id="Main_Item_Container">
      <div id="main_card_header">
      <label for="show" class="show">Show</label>
      <select name="show" id="show">
      <option value="query">Query</option>
      <option value="graph">Graph</option>
      </select>
      <label for="sort" class="sort">Sort By</label>
      <select name="sort" id="sort">
      <option value="date">Date</option>
      <option value="adherence">Adherence</option>
      </select> 
      </div>
      <div className="main_card_container">
        <br></br>
          <h2 className="heading"> Date </h2>  
          <h2 className="heading"> QueryId </h2> 
          <h2 className="heading"> First Name </h2> 
          <h2 className="heading"> PRN Number </h2> 
          <h2 className="heading" id="btnHeading">Show Details</h2> 
        </div>
      {arr.map((element, i) => {
        return (
          <>
            <Cards
              key={i}
              queryDate={element.queryDate}
              queryId={element.Query}
              firstName={element.firstName}
              lastName={element.lastName}
              email={element.email}
              agencyName={element.agencyName}
              agencyEmail={element.agencyEmail}
              designation={element.designation}
              agencyNo={element.agencyNo}
              universityName={element.universityName}
              programName={element.programName}
              prn={element.prn}
              graduationDate={element.graduationDate}
              document={element.document}
              NEFT={element.NEFT}
              paymentSS={element.paymentSS}
              verificationDocument={element.verificationDocument}
              color={element.Query%2===0?("#D1D1D1"):("#FFFFFF")}
            />
          </>
        );
      })}
    </div>
  );
}
