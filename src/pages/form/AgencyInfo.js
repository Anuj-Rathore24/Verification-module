/* eslint-disable */     //To disable rule warnings in an entire file using ESLint comment.
import React from "react";
import {useEffect} from "react";
import docimg from "../../images/documentMan.svg"

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

function AgencyInfo({ formData, setFormData }) {

  useEffect(()=>{
    //Adding all the Selected Checkboxes' name to formdata documents
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var values = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked === true) {
        values.push(checkboxes[i].value);
      }
    }
    let dumb = '';
    for(let i = 0; i<values.length; i++){
      dumb = dumb + values[i] + '  ';
    }
    setFormData({...formData, Documents: dumb});
  },[formData.Documents])

  return (
     <div >
      <div className="Candidate-Info-container name-container">
        <div className="label">
          <p className="data">Full Name: </p>
            <input
              type="text"
              value={formData.candidateName}
              onChange={(e) => {
                setFormData({ ...formData, candidateName: e.target.value });
              }}
            />
        </div>
      </div>
      
      <div className="Ageny-Details-container">
        <div className="form-flex">
      <div className="label">
      <p className="data"> Email: </p>
      <input
        type="text"
        value={formData.email}
        onChange={(event) =>{
          setFormData({ ...formData, email: event.target.value })
          if(isEmail(event.target.value)){
            emailValidity = true;
          }else if(event.target.value.length === 0){
            emailValidity = true;
          }
          else if(!isEmail(event.target.value))
          {
            emailValidity=false;
          }
        } }    
      />
      {!emailValidity && <p className="invalid">Please enter a valid Email Address</p>}
      </div>
       <div className="label">
     <p className="data">Agency Contact No :</p>
      <input
        type="text"
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
      {!agencyPhoneValidity && <p className="invalid">Please enter Phone number of 10 digits</p>}
      </div>
      </div>
      <div className="form-flex">
      <div className="label">
     <p className="data">Name of Agency:</p>
      <input
        type="text"
        value={formData.agencyName}
        onChange={(event) =>
          setFormData({ ...formData, agencyName: event.target.value })
        }
      /></div>
      <div className="label">
     <p className="data">Email Id of Agency : </p>
      <input
      required
        type="text"
        value={formData.agencyEmail}
        onChange={(event) =>{
          setFormData({ ...formData, agencyEmail: event.target.value })
          if(isEmail(event.target.value)){
            agencyEmailValidity = true;
          }else if(event.target.value.length === 0){
            agencyEmailValidity = true;
          }
          else if(!isEmail(event.target.value))
          {
            agencyEmailValidity=false;
          }
        }}
      />
      {!agencyEmailValidity && <p className="invalid">Please enter a valid Email Address</p>}
      </div>
      </div>

      <div className="label">
     <p className="data">Name and Designation:</p>
      <input
        type="text"
        value={formData.Designation}
        onChange={(event) =>
          setFormData({ ...formData,Designation : event.target.value })
        }
      /></div>
     
    </div>
      <div className="Candidate-Info-container">
        <label id="l1"><p className="data">Select Your University:</p></label>
        <div className="form-radios">
          <input id="ur1"
            name="university-radio"
            type="radio"
            value={"MIT WPU, Kothrud Campus"}
            placeholder="Last Name..."
            onChange={(e) => {
              setFormData({ ...formData, universityName: e.target.value });
            }}
          /><label htmlFor="ur1">MIT WPU, Kothrud Campus </label>
        </div>
        <div className="form-radios">
          <input id="ur2"    
            name="university-radio"
            type="radio"
            value={"MITCOE- SPPU, Kothrud Campus"}
            onChange={(e) => {
              setFormData({ ...formData, universityName: e.target.value });
            }}
          /><label htmlFor="ur2">MITCOE- SPPU, Kothrud Campus </label>
        </div>
        <div className="form-radios">

          <input id="ur3"
            name="university-radio"
            type="radio"
            value={"MIT School of Business & MITSOM (Autonomous)"}
            onChange={(e) => {
              setFormData({ ...formData, universityName: e.target.value });
            }}
          />
          <label htmlFor="ur3">MIT School of Business and MITSOM (Autonomous) </label>
        </div>
        <div className="form-flex">
        <div className="label">
        <p className="data">Name of Program:&nbsp;</p>
          <input
            type="text"
            value={formData.progamName}
            onChange={(e) => {
              setFormData({ ...formData, progamName: e.target.value });
            }}
          />
          </div>
          <div className="label">
        <p className="data">Month & Year of Passing:</p>
          <input
            type="date"
            value={formData.graduationDate}
            onChange={(e) => {
              setFormData({ ...formData, graduationDate: e.target.value });
            }}
          />
        </div>
        </div>
        <div className="label">
        <p className="data">Permanent Registration Number(PRN):&nbsp;</p>
          <input
            type="text"
            value={formData.prn}
            onChange={(e) => {
              setFormData({ ...formData, prn: e.target.value });
              
              if(isTenChars(e.target.value)){
                prnValidity = true;
              }else if(e.target.value.length === 0){
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

          <label id="l2" >
            <p className="data">Document(s) To be Verified:</p>
          </label>
          <div className="doc-flex">

        <div className="cb-container">
      <div className="form-checkboxes">
        <input id="fcb1"
          type="checkbox"
          value={"Final Degree Certificate/Final Diploma Certificate"}
           onChange={(e) => {
            
             if(!formData.Documents.includes(e.target.value)){
               setFormData({ ...formData, Documents: formData.Documents+e.target.value });
               
             }
             if(formData.Documents.includes(e.target.value)){
              const updated = formData.Documents.replace(e.target.value,'');
              // console.log(updated);
              setFormData({ ...formData, Documents: updated});
            }
           }}
        />
        <label htmlFor="fcb1">Final Degree Certificate/Final Diploma Certificate</label>

      </div>
      <div className="form-checkboxes">

        <input id="fcb2"
          type="checkbox"
          value={"Provisional Degree Certificate"}
           onChange={(e) => {
             if(!formData.Documents.includes(e.target.value)){
               setFormData({ ...formData, Documents: formData.Documents+e.target.value });
             }
             if(formData.Documents.includes(e.target.value)){
              const updated = formData.Documents.replace(e.target.value,'');
              // console.log(updated);
              setFormData({ ...formData, Documents: updated});
            }
           }}
          
        />
        <label htmlFor="fcb2">Provisional Degree Certificate</label>
      </div>

      <div className="form-checkboxes">

        <input id="fcb3"
          type="checkbox"
          value={"Official Transcript"}
           onChange={(e) => {

           if(!formData.Documents.includes(e.target.value)){
               setFormData({ ...formData, Documents: formData.Documents+e.target.value });
             }
             if(formData.Documents.includes(e.target.value)){
              const updated = formData.Documents.replace(e.target.value,'');
              // console.log(updated);
              setFormData({ ...formData, Documents: updated});
            }
           }}
          
        />
        <label htmlFor="fcb3">Official Transcript</label>
      </div>

      <div className="form-checkboxes">
        <input id="fcb4"
          type="checkbox"
          value={"Grade Card"}
           onChange={(e) => {
             if(!formData.Documents.includes(e.target.value)){
               setFormData({ ...formData, Documents: formData.Documents+e.target.value });
             }
             if(formData.Documents.includes(e.target.value)){
              const updated = formData.Documents.replace(e.target.value,'');
              // console.log(updated);
              setFormData({ ...formData, Documents: updated});
            }
           }}
          
        />
        <label htmlFor="fcb4"> Grade Card </label> 
      </div>

      <div className="form-checkboxes">
        <input id="fcb5"
          type="checkbox"
          value={"Other Educational Document/Certificate"}
           onChange={(e) => {
             if(!formData.Documents.includes(e.target.value)){  
               setFormData({ ...formData, Documents: formData.Documents+e.target.value });
             }
             if(formData.Documents.includes(e.target.value)){
              const updated = formData.Documents.replace(e.target.value,'');
              // console.log(updated);
              setFormData({ ...formData, Documents: updated});
            }
           }}
          />
        <label htmlFor="fcb5"> Other Educational Document/Certificate </label>
      </div>
      </div>
      <div className="payimg-container">
          <img src={docimg} alt="" />
        </div>
        </div>
          </div>
    </div>
  );
}

export default AgencyInfo;
