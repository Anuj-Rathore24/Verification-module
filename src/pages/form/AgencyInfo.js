import React from "react";

const isTenChars = (value) => value.trim().length === 10;
const regex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const isEmail= (value)=>{
  if(regex.test(value)===false)
  {
    return false;
  }
  else{
    return true;
  }
}
let prnValidity=true;
let agencyEmailValidity=true;
let emailValidity=true;
let agencyPhoneValidity=true;

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
                console.log(e.target.value);
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
        onChange={(event) =>{
          setFormData({ ...formData, email: event.target.value })
          if(isEmail(event.target.value)){
            emailValidity = true;
          }else if(event.target.value.length == 0){
            emailValidity = true;
          }
          else if(!isEmail(event.target.value))
          {
            emailValidity=false;
          }
        } }
      />
      {!emailValidity && <p class="invalid">Please enter a valid Email Address</p>}
      </div>
       <div className="label">
     <p class="data">Agency Contact Number:</p>
      <input
        type="text"
        placeholder="9187532..."
        value={formData.agencyNo}
        onChange={(event) =>{
          setFormData({ ...formData, agencyNo: event.target.value })
          if(isTenChars(event.target.value)){
            agencyPhoneValidity = true;
          }else if(event.target.value.length === 0){
            agencyPhoneValidity = true;
          }
          else if(!isTenChars(event.target.value))
          {
            agencyPhoneValidity=false;
          }
        }}
      />
      {!agencyPhoneValidity && <p class="invalid">Please enter Phone number of 10 digits</p>}
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
        onChange={(event) =>{
          setFormData({ ...formData, agencyEmail: event.target.value })
          if(isEmail(event.target.value)){
            agencyEmailValidity = true;
          }else if(event.target.value.length == 0){
            agencyEmailValidity = true;
          }
          else if(!isEmail(event.target.value))
          {
            agencyEmailValidity=false;
          }
        }}
      />
      {!agencyEmailValidity && <p class="invalid">Please enter a valid Email Address</p>}
      </div>
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
              
              if(isTenChars(e.target.value)){
                prnValidity = true;
              }else if(e.target.value.length == 0){
                prnValidity = true;
              }
              else if(!isTenChars(e.target.value))
              {
                prnValidity=false;
              }
            }}
          />
          {!prnValidity && <p class="invalid">Please enter PRN number of 10 digits</p>}
          </div>
        
      </div>
    </div>
  );
}

export default SignUpInfo;
