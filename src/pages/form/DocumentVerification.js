import React from "react";

function OtherInfo({ formData, setFormData }) {
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
        placeholder="NEFT Reference No./ Transaction Id..."
        value={formData.NEFT}
        onChange={(e) => {
          setFormData({ ...formData, NEFT: e.target.value });
        }}
      />
      <p className="data" style={{ width: "400px"}}>Screenshot of Payment Aknowledgement</p>
      <div className="select-image-btn">
      <input
        type="file"
        placeholder="Attach PNG/JPG/PDF Files"
      />
      </div>
      <label id="l2" ><p className="data">Documents To be Verified:</p></label>
      <div className="checkboxes">
        <input
          type="checkbox"
          value={"Final Degree Certificate/Final Diploma Certificate"}
          onChange={(e) => {
            if(!formData.Documents.includes(e.target.value)){

              setFormData({ ...formData, Documents: formData.Documents+e.target.value });
            }
          }}
        />
        <label>Final Degree Certificate/Final Diploma Certificate</label>
        {/* <input className="doc-inp"
        type="file"
      /> */}
      </div>
      <div className="checkboxes">

        <input
          type="checkbox"
          value={"Provisional Degree Certificate"}
          onChange={(e) => {
            if(!formData.Documents.includes(e.target.value)){
              setFormData({ ...formData, Documents: formData.Documents+e.target.value });
            }else{
              
              console.log(formData.Documents.includes(e.target.value))
              console.log("working in outside")
            }
          }}
          
        />
        <label>Provisional Degree Certificate</label>
        {/* <input className="doc-inp"
        type="file"
      /> */}
      </div>
      <div className="checkboxes">

        <input
          type="checkbox"
          value={"Official Transcript"}
          onChange={(e) => {
            if(!formData.Documents.includes(e.target.value)){

              setFormData({ ...formData, Documents: formData.Documents+e.target.value });
            }
          }}
          
        />
        <label>Official Transcript</label>
        {/* <input className="doc-inp"
        type="file"
      /> */}
      </div>
      <div className="checkboxes">
        <input
          type="checkbox"
          value={"Grade Card"}
          onChange={(e) => {
            if(!formData.Documents.includes(e.target.value)){

              setFormData({ ...formData, Documents: formData.Documents+e.target.value });
            }
          }}
          
        />
        <label> Grade Card </label> 
        {/* <input className="doc-inp"
        type="file"
      /> */}
      </div>
      <div className="checkboxes">
        <input
          type="checkbox"
          value={"Other Edcational Document/Certificate"}
          onChange={(e) => {
            if(!formData.Documents.includes(e.target.value)){

              setFormData({ ...formData, Documents: formData.Documents+e.target.value });
            }
          }}
        />
        <label> Other Edcational Document/Certificate </label>
        {/* <input className="doc-inp"
        type="file"
      /> */}
      </div>
      <p className="data">Attach Document To be Verified</p>
      <div className="select-image-btn">
      <input
        type="file"
        multiple
        placeholder="Attach PNG/JPG/PDF Files"
      />
      </div>
    </div>
    </div>    
  );
}

export default OtherInfo;
