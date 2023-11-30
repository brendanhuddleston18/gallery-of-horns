import React, {useState} from "react";
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



  return (
    <>
        <Container className={styles.Container} fluid>
          <Row className={styles.row}>
            {props.beasts.map((beasts, index) => (
              <HornedBeasts
                key={beasts._id}
                src={beasts.image_url}
                title={beasts.title}
                description={beasts.description}
                keyword={beasts.keyword}
                horns={beasts.horns}
                // onClick={handleClick}
                // state={props.state}
                handleClick={props.handleClick}
              />
            ))}
          </Row>
        </Container>
      <SelectedBeasts handleClick={props.handleClick} />
    </>
  );
}

export default Gallery;
