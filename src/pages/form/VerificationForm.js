import React, { useState } from "react";
import SignUpInfo from "./AgencyInfo.js";
import OtherInfo from "./DocumentVerification.js";
import "../../styles/VerificationForm.css";
import { createQuery } from "../../apis/firestoreDatabase";
import { useNavigate } from "react-router-dom";

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
        <div className="body">{PageDisplay()}</div>
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

                //Function for calling api for storing data on our firestore database
                
                const message = await createQuery(formData);
                alert(message);
                navigate("/userDashboard");

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
