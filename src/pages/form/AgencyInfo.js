import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div >
      <div className="Candidate-Info-container name-container">
        <div className="name">
        <div className="label-name">
          <p class="data">First Name: </p>
            <input
              type="text"
              placeholder="First Name..."
              value={formData.firstName}
              onChange={(e) => {
                setFormData({ ...formData, firstName: e.target.value });
              }}
            />
         </div>
         <div className="label-name">
          <p class="data">Middle Name: </p>
            <input
              type="text"
              placeholder="Middle Name..."
              value={formData.lastName}
              onChange={(e) => {
                setFormData({ ...formData, lastName: e.target.value });
              }}
            />
            </div>
          <div className="label-name">
          <p class="data">Last Name: </p>
            <input
              type="text"
              placeholder="Last Name..."
              value={formData.lastName}
              onChange={(e) => {
                setFormData({ ...formData, lastName: e.target.value });
              }}
            />
            </div>
        </div>
      </div>
      
      <div className="Ageny-Details-container">
        <div className="flex">
      <div className="label">
      <p class="data"> Email: </p>
      <input
        type="text"
        placeholder="email@example.com ..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }      
      /></div>
       <div className="label">
     <p class="data">Agency Contact No :</p>
      <input
        type="text"
        placeholder="9187532..."
        value={formData.agencyNo}
        onChange={(event) =>
          setFormData({ ...formData, agencyNo: event.target.value })
        }
      />
      </div>
      </div>
      <div className="flex">
      <div className="label">
     <p class="data">Name of Agency:</p>
      <input
        type="text"
        placeholder="SCET..."
        value={formData.agencyName}
        onChange={(event) =>
          setFormData({ ...formData, agencyName: event.target.value })
        }
      /></div>
      <div className="label">
     <p class="data">Email Id of Agency : </p>
      <input
      required
        type="text"
        placeholder="agency@email.com ..."
        value={formData.agencyEmail}
        onChange={(event) =>
          setFormData({ ...formData, agencyEmail: event.target.value })
        }
      /></div>
      </div>

      <div className="label label2">
     <p class="data">Name and Designation:</p>
      <input
        type="text"
        placeholder="Name and Designation..."
        value={formData.Designation}
        onChange={(event) =>
          setFormData({ ...formData,Designation : event.target.value })
        }
      /></div>
     
    </div>
      <div className="Candidate-Info-container">
        <label id="l1"><p class="data">Select Your University:</p></label>
        <div className="radios">
          <input
            name="university-radio"
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
            name="university-radio"
            type="radio"
            value={"MITCOE- SPPU, Kothrud Campus"}
            onChange={(e) => {
              setFormData({ ...formData, universityName: e.target.value });
            }}
          /><label>MITCOE- SPPU, Kothrud Campus </label>
        </div>
        <div className="radios">

          <input
            name="university-radio"
            type="radio"
            value={"MIT School of Business & MITSOM (Autonomous)"}
            onChange={(e) => {
              setFormData({ ...formData, universityName: e.target.value });
            }}
          />
          <label>MIT School of Business and MITSOM (Autonomous) </label>
        </div>
        <div className="flex">
        <div className="label label2">
        <p class="data">Name of Program:&nbsp;</p>
          <input
            type="text"
            placeholder="MBA/B.Tech "
            value={formData.progamName}
            onChange={(e) => {
              setFormData({ ...formData, progamName: e.target.value });
            }}
          />
          </div>
          <div className="label label2">
        <p class="data">Month & Year of Passing:</p>
          <input
            type="date"
            placeholder="Date of graduation..."
            value={formData.graduationDate}
            onChange={(e) => {
              setFormData({ ...formData, graduationDate: e.target.value });
            }}
          />
        </div>
        </div>
        <div className="label label2">
        <p class="data">Permanent Registration Number(PRN):&nbsp;</p>
          <input
            type="text"
            placeholder="Permanent Registration Number..."
            value={formData.prn}
            onChange={(e) => {
              setFormData({ ...formData, prn: e.target.value });
            }}
          />
          </div>
        
      </div>
    </div>
  );
}

export default SignUpInfo;
