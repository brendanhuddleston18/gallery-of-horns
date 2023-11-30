import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./SelectedBeasts.module.css";
import { propTypes } from "react-bootstrap/esm/Image";

function BeastsModal(props) {

  console.log(props)
  return (
    <div className={styles.BeastsModal} style={{ display:props.display }}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{props.selectedBeast?.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* <Modal.Img src={props.selectedBeast?.image_url}/> */}
          <p>{props.selectedBeast?.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.hideModal}variant="primary">Close</Button>
          
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default BeastsModal;
