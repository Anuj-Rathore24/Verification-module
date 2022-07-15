import { React, useState } from "react";
import "../../styles/Card.css";
import { Button, Modal } from "react-bootstrap";
import getfile from "../../apis/firebasecloud.js";
// import { MakeCertificate } from "../../apis/appsScriptApi";
import axios from "axios"

function verifyDocument(){
  axios.get("/MakeCert").then((res)=>{
    console.log("response -> "+res)
  })

}



export default function Card(props) {
  //Use State for invoking close and open button

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setDisable(false)
    setShow(false)
  };
  const handleShow = () => setShow(true);
  const [disable,setDisable]=useState(false);

  return (
    <div>
      <div
        className="main_card_container"
        style={{
          backgroundColor: `${props.color}`,
          margin: 5,
        }}
      >
        <div className="valueContainer">
          <h2 className="card_heading">{props.date}</h2>
        </div>
        <div className="valueContainer">
          <h2 className="card_heading">{props.queryId}</h2>
        </div>
        <div className="valueContainer">
          <h2 className="card_heading">{props.name}</h2>
        </div>
        <div className="valueContainer">
          <Button variant="primary" onClick={handleShow}>
            Show
          </Button>
        </div>

        {/* Modal for Showing Full Information */}

        <Modal show={show} onHide={handleClose} animation={false}>
          {/* Header for the modal */}
          <div>
            <Modal.Header closeButton>
              <Modal.Title>ID : {props.queryId}</Modal.Title>
            </Modal.Header>
          </div>
          {/*Main Body of the Modal */}

          <Modal.Body
            id="MainBodyContainer"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                overflow: "auto",
                height: "300px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="content">Query Date :</p>
                <p className="content">{props.date}</p>
              </div>
              <hr></hr>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="content">Name :</p>
                <p className="content">{props.name}</p>
              </div>
              <hr></hr>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="content">Email :</p>
                <p className="content">{props.email}</p>
              </div>
              <hr></hr>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="content">Agency Number :</p>
                <p className="content">{props.compContactNumber}</p>
              </div>
              <hr></hr>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="content">Agency Name :</p>
                <p className="content">{props.CompName}</p>
              </div>
              <hr></hr>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="content">Agency Email :</p>
                <p className="content">{props.CompEmail}</p>
              </div>
              <hr></hr>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="content">Designation :</p>
                <p className="content">{props.compContactPersonal}</p>
              </div>
              <hr></hr>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="content">University Name :</p>
                <p className="content">{props.Uni}</p>
              </div>
              <hr></hr>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="content">Program Name :</p>
                <p className="content">{props.Prog}</p>
              </div>
              <hr></hr>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="content">PRN :</p>
                <p className="content">{props.prn}</p>
              </div>
              <hr></hr>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="content">Graduation Date :</p>
                <p className="content">{props.PYear}</p>
              </div>
              <hr></hr>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="content">Document :</p>
                <p className="content">{props.docs}</p>
              </div>
              <hr></hr>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="content">NEFT :</p>
                <p className="content">{props.NEFT}</p>
              </div>
              <hr></hr>
            </div>
          </Modal.Body>
          <Modal.Footer style={{ justifyContent: "center" }}>
            <Button
              variant="primary"
              onClick={() => {
                console.log("working");
                return (
                  <>
                    <input key={1} value={"some Value"} />
                  </>
                );
              }}
            >
              Send to Verify Payment
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                console.log("decline");
              }}
            >
              Decline Query Request
            </Button>
            <Button disabled={disable}
              variant="primary"
              onClick={async () => {
                await getfile();
                setDisable(true)

              }}
            >
              View Documents
            </Button>
            <Button
              variant="success"
              onClick={async () => {
                verifyDocument()
                
              }}
            >
              Verify Request
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
