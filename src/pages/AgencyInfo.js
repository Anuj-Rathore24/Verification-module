import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="Ageny-Details-container">
     <label>Email:&nbsp;
      <input
        type="text"
        placeholder="email@example.com ..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
        
      /></label>
     <label>Name of Agency:
      <input
        type="text"
        placeholder="SCET..."
        value={formData.agencyName}
        onChange={(event) =>
          setFormData({ ...formData, agencyName: event.target.value })
        }
      /></label>
     <label>Email Id of Agency :
      <input
      required
        type="text"
        placeholder="agency@email.com ..."
        value={formData.agencyEmail}
        onChange={(event) =>
          setFormData({ ...formData, agencyEmail: event.target.value })
        }
      /></label>
     <label>Name and Designation:
      <input
        type="text"
        placeholder="Name and Designation..."
        value={formData.Designation}
        onChange={(event) =>
          setFormData({ ...formData,Designation : event.target.value })
        }
      /></label>
     <label>Agency Contact No :
      <input
        type="text"
        placeholder="9187532..."
        value={formData.agencyNo}
        onChange={(event) =>
          setFormData({ ...formData, agencyNo: event.target.value })
        }
      />
      </label>
    </div>
  );
}

export default SignUpInfo;
