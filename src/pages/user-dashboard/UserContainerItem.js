import React from "react";
import Cards from "./UserCard";
import "../../styles/AdminDashboard.css";

let arr = [
  {
    Number: 0,
    Date: "10/10/21",
    Query: 1,
    Name: "XYZ", 
  },
  {
    Number: 1,
    Date: "10/10/21",
    Query: 2,
    Name: "XYZ",
  },
  {
    Number: 2,
    Date: "10/10/21",
    Query: 3,
    Name: "XYZ",
  },
  {
    Number: 2,
    Date: "10/10/21",
    Query: 4,
    Name: "XYZ",
  },
  {
    Number: 2,
    Date: "10/10/21",
    Query: 5,
    Name: "XYZ",
  },
  {
    Number: 2,
    Date: "10/10/21",
    Query: 6,
    Name: "XYZ",
  },
  
];

export default function EventsItem() {

  return (
    <div id="Main_Item_Container">
      <div className="main_card_container">
          <h2 className="heading"> Date </h2>  
          <h2 className="heading"> QueryId </h2> 
          <h2 className="heading"> Name </h2> 
          <h2 className="heading" id="btnHeading">Show Details</h2> 
        </div>
      {arr.map((element, i) => {
        return (
          <>
            <Cards
              key={i}
              date={element.Date}
              queryId={element.Query}
              name={element.Name}
              color={element.Query%2===0?("#D1D1D1"):("#FFFFFF")}
            />
          </>
        );
      })}
    </div>
  );
}
