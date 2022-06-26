import { React, useState } from "react";
import "../../styles/Card.css";
import { Button, Modal } from "react-bootstrap";
import { Label } from "semantic-ui-react";

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
        <h2 className="card_heading">{props.date}</h2>
        <h2 className="card_heading">{props.queryId}</h2>
        <h2 className="card_heading">{props.name}</h2>

        {/* Modal for Showing Full Information */}

        <Button variant="primary" onClick={handleShow}>
          Show
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>

          {/* Header for the modal */}
          
          <Modal.Header closeButton>
            <Modal.Title>Id : {props.queryId}</Modal.Title>
          </Modal.Header>

          {/*Main Body of the Modal */}

          <Modal.Body>
            <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">Name :</p>
              <p className="content">{props.name}</p>
            </div>
            <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">Date :</p>
              <p className="content">{props.date}</p>
            </div>
            <div style={{display:"flex",flexDirection:"row"}}>
              <p className="content">QueryId :</p>
              <p className="content">{props.queryId}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              View Documents
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Verify Documents
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
