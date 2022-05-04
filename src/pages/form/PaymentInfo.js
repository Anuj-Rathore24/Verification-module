import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="Payement-Info-container">
      <label>Payement Date</label>
      <input
        type="date"
        value={formData.queryDate}
        onChange={(e) => {
          setFormData({ ...formData, queryDate: e.target.value });
        }}
      />
      <label>NEFT Reference No./ Transaction Id</label>
      <input
        type="text"
        placeholder="NEFT Reference No./ Transaction Id..."
        value={formData.NEFT}
        onChange={(e) => {
          setFormData({ ...formData, NEFT: e.target.value });
        }}
      />
      <label style={{ width: "400px"}}>Attach Screenshot of Payment Aknowledgement</label>
      <input
        type="file"
        placeholder="Attach PNG/JPG/PDF Files"
      />
      <label>Attach Document To be Verified</label>
      <input
        type="file"
        multiple
        placeholder="Attach PNG/JPG/PDF Files"
      />
    </div>
  );
}

export default OtherInfo;
