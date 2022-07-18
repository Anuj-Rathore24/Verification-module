import React, { useState } from "react";
import SignUpInfo from "./AgencyInfo.js";
import OtherInfo from "./DocumentVerification.js";
import "../../styles/VerificationForm.css";
import { createQuery } from "../../apis/firestoreDatabase";
import { useNavigate } from "react-router-dom";
import {upload} from "../../apis/firebasecloud"

function Form() {
  const navigate=useNavigate();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    agencyName: "",
    agencyEmail: "",
    Designation: "",
    agencyNo: "",
    firstName: "",
    lastName: "",
    universityName: "",
    progamName: "",
    prn: "",
    graduationDate: "",
    Documents: "",
    queryDate: "",
    NEFT: "",
    paymentSS: "",
    verificationDocument: "",
  });

  const FormTitles = [
    "Ageny-Details",
    "Payement-Info",
    "Document-verification",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    }
    // else if (page === 1) {
    //   return <Payement-page formData={formData} setFormData={setFormData} />;
    // }
    else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          onClick={() => {
            setPage(0);
          }}
          style={{
            backgroundColor:
              page === 0 ? "white" : page === 1 ? "#FFC107" : "#FFC107",
          }}
        ></div>
        <div
          onClick={() => {
            setPage(1);
          }}
          style={{
            backgroundColor:
              page === 0 ? "#FFC107" : page === 1 ? "white" : "#FFC107",
          }}
        ></div>
        <div
          onClick={() => {
            setPage(2);
          }}
          style={{
            backgroundColor:
              page === 0 ? "#FFC107" : page === 1 ? "#FFC107" : "white",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="vf_body">{PageDisplay()}</div>
        <div className="pageChange">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={async () => {
              if (page === FormTitles.length - 1) {
                console.log(formData.Documents)
                try{
                  
                  const Id = await createQuery(formData);
                  await upload(localStorage.getItem("email"),Id);
                  navigate("/userDashboard");
                }catch(err){
                  console.log("new Error =>"+err);
                  alert("Please Fill all the details properly");
                }

              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
