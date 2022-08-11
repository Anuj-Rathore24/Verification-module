import { React, useState } from "react";
import "../../styles/UserCard.css";
import { Button, Modal } from "react-bootstrap";
import { getfile } from "../../apis/firebasecloud.js";

function colorScheme(variable) {
  var color = "yellow";
  if (variable === "Verified") color = "green";
  else if (variable === "Denied") color = "red";
  return color;
}
export default function Card(props) {
  //Use State for invoking close and open button

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setDisable(false);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  //for disabling document fetching button
  const [disable, setDisable] = useState(false);

  return (
    <div>
      <div
        className="main_card_container"
        style={{
          backgroundColor:props.color,
          padding:"2px",
        }}
      >
        <div
          className="rounded-circle"
          style={{
            backgroundColor: colorScheme(props.status),
            width: "15px",
            height: "15px",
            marginLeft:'-3%'
          }}
        ></div>
        <div className="valueContainer" style={{
          marginLeft:'-2%'
        }}>
          <h2 className="card_heading">{props.date}</h2>
        </div>
        <div className="valueContainer" style={{
          marginLeft:'-3%'
        }}>
          <h2 className="card_heading">{props.queryId}</h2>
        </div>
        <div className="valueContainer" style={{
          marginLeft:'7%',
          width:'10%'
        }}>
          <h2 className="card_heading">{props.name}</h2>
        </div>
        <div className="valueContainer" style={{
          marginLeft:'-1%'
        }}>
          <h2 className="card_heading">{props.prn}</h2>
        </div>
        <div className="valueContainer" style={{
          padding:'0.5%',
          width:'11%',
          height:'80%',
          backgroundColor:'#316EBC',
          marginLeft:'6%',
          borderStyle:'solid',
          borderWidth:'1px',
          borderColor:'white',
          borderRadius:'3px', 
        }}>
        <a className="link-primary_linkViewDocument ViewDocumentButton"  variant="primary" onClick={handleShow} style={{
          textDecoration: "none",
          color: "white",
        }}>
            View document
          </a>
        </div>

        {/* Modal for Showing Full Information */}

        <Modal show={show} onHide={handleClose} animation={false}>
          {/* Header for the modal */}
          <div>
            <Modal.Header closeButton>
              <Modal.Title style={{ fontSize: "1.25rem" }}>
                ID : {props.queryId}
              </Modal.Title>
              <p
                style={{ fontSize: "0.95rem", margin: 0, marginLeft: "2.6vw" }}
              >
                {props.status}
              </p>
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
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="content">Status Date :</p>
                <p className="content">{props.statusDate}</p>
              </div>
              <hr></hr>
            </div>
          </Modal.Body>
          <Modal.Footer style={{ justifyContent: "center" }}>
            <Button
              style={{
                width:'100%'
              }}
              disabled={disable}
              variant="primary"
              onClick={async () => {
                await getfile(props.CompEmail,props.queryId);
                setDisable(true);
              }}
            >
              View Documents
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
