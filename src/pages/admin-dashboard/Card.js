import { React, useState, useEffect } from "react";
import "../../styles/UserCard.css";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { getfile, getPaymentFile } from "../../apis/firebasecloud.js";
import { updateQuery } from "../../apis/firestoreDatabase";
import Loader from "../loader";

//for color of status circles
function colorScheme(variable) {
  var color = "yellow";
  if (variable === "Verified") color = "green";
  else if (variable === "Denied") color = "red";
  return color;
}

export default function Card(props) {
  //Use State for invoking close and open button
  const [stateLoader, setStateLoader] = useState("none");
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setDisable(false);
    setShow(false);
    setdeclineButton(false);
  };
  const handleShow = () => setShow(true);

  //for disabling document fetching button

  const [disable, setDisable] = useState(false);
  const [declineButton, setdeclineButton] = useState(false);
  let [declineMessage, setdeclineMessage] = useState(" ");
  let [statusVerify, setstatusVerify] = useState(false);

  //function for sending request to the backend
  async function declineButtonClick(userId, queryId, dmessage) {
    alert("Mailing in progress");
    const element = document.getElementById("inputDelineAddress");
    setStateLoader("block");
    const status = await axios.post("/declineQuery", { message: dmessage });
    await updateQuery("admin@gmail.com", queryId, 0);
    await updateQuery(userId, queryId, 0);
    console.log(status.data);
    alert(status.data);
    setStateLoader("none");
  }
  async function verifyDocument(dataObject) {
    alert("Mailing in progress");
    setStateLoader("block");
    await updateQuery("admin@gmail.com", dataObject.queryId, 1);
    await updateQuery(dataObject.CompEmail, dataObject.queryId, 1);
    const status = await axios.post("/MakeCert", { data: dataObject });
    alert(status.data);
    setStateLoader("none");
  }

  useEffect(() => {
    try {
      if (props.status === "Verified" || props.status === "Denied") {
        setstatusVerify(true);
      }
      const element = document.getElementById("inputDelineAddress");
      element.innerHTML = declineMessage;
    } catch (err) {}
  }, [declineMessage]);

  return stateLoader === "block" ? (
    <Loader />
  ) : (
    <div>
      <div
        className="main_card_container"
        style={{
          background: props.color,
        }}
      >
        <div
          className="rounded-circle"
          style={{
            backgroundColor: colorScheme(props.status),
          }}
        ></div>
        <div className="valueContainer">
          <h2 className="card_heading">{props.date}</h2>
        </div>
        <div
          className="valueContainer"
          style={{
            marginLeft: "7%",
          }}
        >
          <h2 className="card_heading">{props.queryId}</h2>
        </div>
        <div
          className="valueContainer"
          style={{
            marginLeft: "7%",
          }}
        >
          <h2 className="card_heading">{props.name}</h2>
        </div>
        <div className="valueContainer">
          <h2 className="card_heading">{props.prn}</h2>
        </div>
        <div className="valueContainer" style={{
          padding:'0.5%',
          width:'11%',
          // height:'80%',
          backgroundColor:'#316EBC',
          marginLeft:'6%',
          marginRight:'5%',
          borderStyle:'solid',
          borderWidth:'1px',
          borderColor:'white',
          borderRadius:'3px',
          paddingLeft:'1%'
        }}>
          <a className="link-primary_linkViewDocument ViewDocumentButton" variant="primary" onClick={handleShow} style={{
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
            </div>
          </Modal.Body>
          <Modal.Footer style={{ justifyContent: "center" }}>
            <Button
              variant="primary"
              onClick={async () => {
                alert("Mail in Progress!");
                try {
                  setStateLoader("block");
                  const status = await getPaymentFile(
                    props,
                    props.CompEmail,
                    props.queryId
                  );
                  console.log(status);
                  alert(status.data);
                  setStateLoader("none");
                } catch (err) {
                  setStateLoader("none");
                  alert(err);
                }
              }}
            >
              Send to Verify Payment
            </Button>
            <Button
              disabled={declineButton}
              variant="danger"
              onClick={async () => {
                setdeclineButton(true);
                var container = document.getElementById("MainBodyContainer");

                //creating text input
                const inputdecline = document.createElement("textarea");
                inputdecline.rows = 5;
                inputdecline.id = "inputDelineAddress";
                inputdecline.onchange = (e) => {
                  setdeclineMessage(e.target.value);
                };
                container.appendChild(inputdecline);

                //creating button
                const buttonDecline = document.createElement("button");
                buttonDecline.innerHTML = "Send";
                buttonDecline.className = "btn btn-primary";
                buttonDecline.onclick = async () => {
                  declineButtonClick(
                    props.CompEmail,
                    props.queryId,
                    inputdecline.innerHTML
                  );
                };
                container.appendChild(buttonDecline);
              }}
            >
              Decline Query Request
            </Button>
            <Button
              disabled={disable}
              variant="primary"
              onClick={async () => {
                //setLoader(true);
                await getfile(props.CompEmail, props.queryId);
                setDisable(true);
              }}
            >
              View Documents
            </Button>
            <Button
              disabled={statusVerify}
              variant="success"
              onClick={() => {
                verifyDocument(props);
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
