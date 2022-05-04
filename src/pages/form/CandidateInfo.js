import React from "react";

function PersonalInfo({ formData, setFormData }) {

  return (
    <div className="Candidate-Info-container">
      <div className="name">
        <label>First Name:&nbsp;
          <input
            type="text"
            placeholder="First Name..."
            value={formData.firstName}
            onChange={(e) => {
              setFormData({ ...formData, firstName: e.target.value });
            }}
          />
        </label>
        <label>Middle Name:&nbsp;
        <input
            type="text"
            placeholder="Middle Name..."
            value={formData.lastName}
            onChange={(e) => {
              setFormData({ ...formData, lastName: e.target.value });
            }}
          />
        </label>
        <label>Last Name:&nbsp;
          <input
            type="text"
            placeholder="Last Name..."
            value={formData.lastName}
            onChange={(e) => {
              setFormData({ ...formData, lastName: e.target.value });
            }}
          />
        </label>
      </div>
      <label>Select Your University:&nbsp;</label>
      <div className="radios">
        <input
          name= "university-radio"
          type="radio"
          value={"MIT WPU, Kothrud Campus"}
          placeholder="Last Name..."
          onChange={(e) => {
            setFormData({ ...formData, universityName: e.target.value });
          }}
        /><label>MIT WPU, Kothrud Campus </label>
      </div>
      <div className="radios">
        <input
          name= "university-radio"
          type="radio"
          value={"MITCOE- SPPU, Kothrud Campus"}
          onChange={(e) => {
            setFormData({ ...formData, universityName: e.target.value });
          }}
        /><label>MITCOE- SPPU, Kothrud Campus </label>
      </div>
      <div className="radios">

        <input
          name= "university-radio"
          type="radio"
          value={"MIT School of Business & MITSOM (Autonomous)"}
          onChange={(e) => {
            setFormData({ ...formData, universityName: e.target.value });
          }}
        />
        <label>MIT School of Business and MITSOM (Autonomous) </label>
      </div>
      <label>Name of Program:&nbsp;
        <input
          type="text"
          placeholder="MBA/B.Tech "
          value={formData.progamName}
          onChange={(e) => {
            setFormData({ ...formData, progamName: e.target.value });
          }}
        />
      </label>
      <label>Permanent Registration Number(PNR):&nbsp;
        <input
          type="text"
          placeholder="Permanent Registration Number..."
          value={formData.prn}
          onChange={(e) => {
            setFormData({ ...formData, prn: e.target.value });
          }}
        />
      </label>
      <label>Month & Year of Passing:
        <input
          type="date"
          placeholder="Date of graduation..."
          value={formData.graduationDate}
          onChange={(e) => {
            setFormData({ ...formData, graduationDate: e.target.value });
          }}
        />
      </label>
      <label>Documents To be Verified:</label>
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



    </div>
  );
}

export default PersonalInfo;
