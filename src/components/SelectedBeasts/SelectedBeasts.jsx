import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./SelectedBeasts.module.css";
import { propTypes } from "react-bootstrap/esm/Image";

function BeastsModal(props) {

  console.log(props)
  return (
    <div className={styles.BeastsModal} style={{ display:props.display }}>
      
        <Modal.Header>
          <Modal.Title>{props.selectedBeast?.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <img src={props.selectedBeast?.image_url} alt={props.selectedBeast?.title} style={{ width: '100%' }} />
          <ul>
          <li>{props.selectedBeast?.description}</li>
          <li>Horns: {props.selectedBeast?.horns}</li>

          </ul>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.hideModal}variant="primary">Close</Button>
          
        </Modal.Footer>
      
    </div>
  );
}

export default BeastsModal;
