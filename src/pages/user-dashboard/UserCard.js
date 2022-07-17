import { React, useState } from "react";
import "../../styles/UserCard.css";
import { Button, Modal } from "react-bootstrap";
import getfile from "../../apis/firebasecloud.js"


export default function Card(props) {
  //Use State for invoking close and open button

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div>
      <div
        className="main_card_container"
        style={{
          backgroundColor: `${props.color}`,
          margin: 5,
        }}
      >
        <h2 className="card_heading">{props.queryDate}</h2>
        <h2 className="card_heading">{props.queryId}</h2>
        <h2 className="card_heading">{props.firstName}</h2>
        <h2 className="card_heading">{props.prn}</h2>

        {/* Modal for Showing Full Information */}

        <Button variant="primary" onClick={handleShow}>
          Show
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>

          {/* Header for the modal */}
          <div style={{border:"2px solid grey"}}>
          <Modal.Header closeButton>
            <Modal.Title>ID : {props.queryId}</Modal.Title>
          </Modal.Header>
          </div>
          {/*Main Body of the Modal */}

          <Modal.Body id="MainBodyContainer" style={{display:"flex",flexDirection:"column"}}>
          <div style={{overflow:"auto",height:"300px"}}>
          <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">Query Date :</p>
              <p className="content">{props.queryDate}</p>
            </div>
            <hr></hr>
            <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">First Name :</p>
              <p className="content">{props.firstName}</p>
            </div>
            <hr></hr>
            <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">Last Name :</p>
              <p className="content">{props.lastName}</p>
            </div>
            <hr></hr>
            <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">Email :</p>
              <p className="content">{props.email}</p>
            </div>
            <hr></hr>
            <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">Agency Number :</p>
              <p className="content">{props.agencyNo}</p>
            </div>
            <hr></hr>
            <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">Agency Name :</p>
              <p className="content">{props.agencyName}</p>
            </div>
            <hr></hr>
            <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">Agency Email :</p>
              <p className="content">{props.agencyEmail}</p>
            </div>
            <hr></hr>
            <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">Designation :</p>
              <p className="content">{props.designation}</p>
            </div>
            <hr></hr>
            <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">University Name :</p>
              <p className="content">{props.universityName}</p>
            </div>
            <hr></hr>
            <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">Program Name :</p>
              <p className="content">{props.programName}</p>
            </div>
            <hr></hr>
            <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">PRN :</p>
              <p className="content">{props.prn}</p>
            </div>
            <hr></hr>
            <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">Graduation Date :</p>
              <p className="content">{props.graduationDate}</p>
            </div>
            <hr></hr>
            <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">Document :</p>
              <p className="content">{props.document}</p>
            </div>
            <hr></hr>
            <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">NEFT :</p>
              <p className="content">{props.NEFT}</p>
            </div>
            <hr></hr>
            <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">Payment Screenshot :</p>
              <p className="content">{props.paymentSS}</p>
            </div>
            <hr></hr>
            <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">Verification Document :</p>
              <p className="content">{props.verificationDocument}</p>
            </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={async ()=>{
              await getfile()
              }}>
              View Documents
            </Button>
            
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
