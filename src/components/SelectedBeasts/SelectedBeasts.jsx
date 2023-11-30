import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./SelectedBeasts.module.css";
import { propTypes } from "react-bootstrap/esm/Image";

function BeastsModal(props) {

  
  return (
    <div className={styles.BeastsModal} style={{ display: "block" }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Howdy</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.handleClick}variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default BeastsModal;
