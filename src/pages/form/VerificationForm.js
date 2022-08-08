import React, { useState } from "react";
import AgencyInfo from "./AgencyInfo";
import PaymentInfo from "./PaymentInfo";
import "../../styles/VerificationForm.css";
import { createQuery } from "../../apis/firestoreDatabase";
import { useNavigate } from "react-router-dom";
import {upload} from "../../apis/firebasecloud"
import { auth } from '../Firebase/Firebase';


function Form() {
  const navigate=useNavigate();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    agencyName: "",
    agencyEmail: "",
    Designation: "",
    agencyNo: "",
    candidateName: "",
    universityName: "",
    progamName: "",
    prn: "",
    graduationDate: "",
    Documents: "",
    queryDate: "",
    NEFT: "",
    paymentSS: "",
    verificationDocument: "",
    status:"Not Verified",
    statusDate:"NA"
  });

  const FormTitles = [
    "Ageny-Details",
    "Payement-Info",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <AgencyInfo formData={formData} setFormData={setFormData} />;
    }
    else {
      return <PaymentInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar-container">
        <div className="progressbar-title">
          <p>Form</p>
          <p>Payment Details</p>
        </div>
        <div className="progressbar">
          <div className="progress-form"
            onClick={() => {
              setPage(0);
              document.querySelector('.pageChange-btn1').focus();
              document.querySelector('.form-submit-btn').style.display = 'none';
            }}
            style={{
              backgroundColor:
                page === 0 ? "#E77455" : page === 1 ? "#E8EDFF" : "#E77455",
            }}
          ></div>

          <div className="progress-payment"
            onClick={() => {
              setPage(1);
              document.querySelector('.pageChange-btn2').focus();
              document.querySelector('.pageChange-btn1').classList.remove('focus');
              document.querySelector('.form-submit-btn').style.display = 'block';
            }}
            style={{
              backgroundColor:
                page === 0 ? "#E8EDFF" : page === 1 ? "#E77455" : "#E77455",
            }}
          ></div>
        </div>
      </div>
      <div className="form-container">
        <div className="form-body">{PageDisplay()}</div>
        <button className="form-submit-btn" style={{ display: 'none' }}
          onClick={async () => {

            // console.log(formData.Documents)
            try{     
              const Id = await createQuery(formData);
              await upload(auth.currentUser.email,Id);

              navigate("/userDashboard");
            }
            catch(err){
              console.log("new Error =>"+err);
              alert("Please Fill all the details properly");
            }
          }}
        >Submit
        </button>
        <div className="pageChange">
          <button className="pageChange-btn1 focus"
            onClick={() => {
              if (page === FormTitles.length - 1)
                setPage((currPage) => currPage - 1);
              document.querySelector('.form-submit-btn').style.display = 'none';
              document.querySelector('.pageChange-btn2').classList.remove('focus');
              document.querySelector('.pageChange-btn1').classList.add('focus');
            }}
          >
            1
          </button>
          <button className="pageChange-btn2"
            onClick={async () => {
                setPage((currPage) => currPage + 1);
                document.querySelector('.pageChange-btn1').classList.remove('focus');
                document.querySelector('.pageChange-btn2').classList.add('focus');
                document.querySelector('.form-submit-btn').style.display = 'block';
            }}
          >
          2
        </button>

      </div>
    </div>
    </div >
  );
}

export default Form;
