import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{props.selectedBeast?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={props.selectedBeast?.image_url}
            alt={props.selectedBeast?.title}
            style={{ width: "40rem" }}
          />
          <ul>
            <li>{props.selectedBeast?.description}</li>
            <li>Horns: {props.selectedBeast?.horns}</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
