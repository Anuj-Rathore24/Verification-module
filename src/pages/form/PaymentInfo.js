import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="Payement-Info-container">
      <label id="l2">Documents To be Verified:</label>
      <div className="checkboxes">

        <input
          type="checkbox"
          value={"Final Degree Certificate/Final Diploma Certificate"}
          onChange={(e) => {
            setFormData({ ...formData, document: e.target.value });
          }}
        />
        <label>Final Degree Certificate/Final Diploma Certificate</label>
      </div>
      <div className="checkboxes">

        <input
          type="checkbox"
          value={"Provisional Degree Certificate"}
          onChange={(e) => {
            setFormData({ ...formData, document: e.target.value });
          }}
        />
        <label>Provisional Degree Certificate</label>
      </div>
      <div className="checkboxes">

        <input
          type="checkbox"
          value={"Official Transcript"}
          onChange={(e) => {
            setFormData({ ...formData, document: e.target.value });
          }}
        />
        <label>Official Transcript</label>
      </div>
      <div className="checkboxes">
        <input
          type="checkbox"
          value={"Grade Card"}
          onChange={(e) => {
            setFormData({ ...formData, document: e.target.value });
          }}
        />
        <label> Grade Card </label>
      </div>
      <div className="checkboxes">
        <input
          type="checkbox"
          value={"Other Edcational Document/Certificate"}
          onChange={(e) => {
            setFormData({ ...formData, document: e.target.value });
          }}
        />
        <label> Other Edcational Document/Certificate </label>
      </div>


      <h4>Payement Date</h4>
      <input
        type="date"
        value={formData.queryDate}
        onChange={(e) => {
          setFormData({ ...formData, queryDate: e.target.value });
        }}
      />
      
      <h4>NEFT Reference No./ Transaction Id</h4>
      <input
        type="text"
        placeholder="NEFT Reference No./ Transaction Id..."
        value={formData.NEFT}
        onChange={(e) => {
          setFormData({ ...formData, NEFT: e.target.value });
        }}
      />
      <h4 style={{ width: "400px"}}>Attach Screenshot of Payment Aknowledgement</h4>
      <input
        type="file"
        placeholder="Attach PNG/JPG/PDF Files"
      />
      <h4>Attach Document To be Verified</h4>
      <input
        type="file"
        multiple
        placeholder="Attach PNG/JPG/PDF Files"
      />
    </div>
  );
}

export default OtherInfo;
