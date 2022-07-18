import {React,useState,useEffect} from "react";
import Cards from "./Card";
import "../../styles/AdminDashboard.css";
import { requestQuery } from "../../apis/firestoreDatabase";

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
  const [queryArr, changeQueries] = useState([]);
  const [queryId, changeQueryId] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await requestQuery(localStorage.getItem("email"));
        const temp = [];
        const tempId = [];
        res.forEach((doc) => {
          temp.push(doc.data());
          tempId.push(doc.id);
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
    <div id="Main_Item_Container">
      <div className="main_card_container">
        <h2 className="heading"> Date </h2>
        <h2 className="heading"> QueryId </h2>
        <h2 className="heading"> Name </h2>
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
              color={element.Query % 2 === 0 ? "#D1D1D1" : "#FFFFFF"}
            />
          </>
        );
      })}
    </div>
  );
}
