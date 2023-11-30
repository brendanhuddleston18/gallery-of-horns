import React, { useState } from "react";
import HornedBeasts from "../HornedBeasts/HornedBeasts.jsx";
import SelectedBeasts from "../SelectedBeasts/SelectedBeasts.jsx";
import styles from "./Gallery.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Gallery(props) {
  let beastArray = props.beasts.map((value) => {
    return value;
  });



  // let selectedBeast = selectBeasts()
  // console.log(selectedBeast);
  return (
    <div className={styles.Gallery}>
      <Container className={styles.Container} fluid>
        <Row className={styles.row}>
          {props.beasts.map((beast) => (
            <HornedBeasts
              key={beast._id}
              beast={beast}
              // state={props.state}
              selectBeasts={props.selectBeasts}
              showModal={props.showModal}
            />
          ))}
        </Row>
      </Container>
      {/* <SelectedBeasts
        className={styles.Modal}
        // onClick={handleClick}
        // state={props.state}
        showModal={props.showModal}
        display={props.display}
        hideModal={props.hideModal}
        beastArray={beastArray}
        selectedBeast={selectedBeasts}
      /> */}
    </div>
  );
}

export default Gallery;
