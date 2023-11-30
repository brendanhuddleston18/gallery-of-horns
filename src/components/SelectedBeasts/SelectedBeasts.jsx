import React, { useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./SelectedBeasts.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { propTypes } from "react-bootstrap/esm/Image";
// import { useState } from "react";

function BeastsModal(props) {
  console.log(props);

  const [votes, setVotes] = useState(0);

  function favorite(){
    setVotes(votes+1)
  }
  return (
    <Modal show={props.display}onHide={props.hideModal} className={styles.BeastsModal} style={{ display: props.display}}>
      <Modal.Header>
        <Modal.Title>{props.selectedBeast?.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body style={{width: 'auto'}}>
        <img
          src={props.selectedBeast?.image_url}
          alt={props.selectedBeast?.title}
          style={{ width: "25rem" }}
        />
        <ul>
          <li>{props.selectedBeast?.description}</li>
          <li>Horns: {props.selectedBeast?.horns}</li>
        </ul>
        <button style ={{width: '3rm', heigh: '3rm'} } onClick={favorite} variant="primary">{'\u2764'}{votes}</button>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.hideModal} variant="primary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BeastsModal;
// show={props.display}