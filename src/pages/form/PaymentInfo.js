import React from "react";
import Payimg from "../../images/pay.svg";
// import { useState } from "react";

function PaymentInfo({ formData, setFormData }) {

  return (
    <div>
      <div className="document-container">
        <p className="data">Payment Date</p>
        <input
          type="date"
          value={formData.queryDate}
          onChange={(e) => {
            setFormData({ ...formData, queryDate: e.target.value });
          }}
        />

        <p className="data">NEFT Reference No./ Transaction Id</p>
        <input
          type="text"
          value={formData.NEFT}
          onChange={(e) => {
            setFormData({ ...formData, NEFT: e.target.value });
          }}
        />


        <div className="document-upload-container payementSS">
          <p className="data" >Attach screenshot of Payment Acknowlegment </p>
          <input
            type="file" id="inputPayment"
            accept='application/pdf, images/png, images/jpg'
          />
          <label htmlFor="inputPayment" className="payement-image-btn">Upload</label>
        </div>

        <div className="document-upload-container">
          <p className="data">Attach Document To be Verified <br/><span style={{ fontSize: 12 }}>(Note : Documents should be in PDF format only)</span> </p>
          <input
            type="file" id="inputFiles" multiple
            accept='application/pdf'
          />
          <label htmlFor="inputFiles" className="document-upload-btn" > Choose File
          </label>

        </div>


        <p className="data">Verification Charges</p>
        <div className="verification-info">

          <div className="charges-details">
            <p>Per student charges are Rs. 1000/- and GST  18% i.e. Rs. 180/- i.e Total 1180/-</p>

            <p>Mode of payment - online </p>

            <p>Payment Details -</p>
            <p>In favor of MIT World peace university</p>
            <p>Bank name : Bank of India</p>
            <p>Branch name : Pune MIT Branch</p>
            <p>Account no. : </p>
            <p>IFCS Code : </p>

            <p>Processing Tenure : Maximum 7 working days from date of application with all required documents</p>
          </div>
          <div className="payimg-container">
            <img src={Payimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
