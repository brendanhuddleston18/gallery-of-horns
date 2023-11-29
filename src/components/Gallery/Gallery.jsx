import React from "react";
import HornedBeasts from "../HornedBeasts/HornedBeasts.jsx";
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
      <div className={styles.whatever}>
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
              />
            ))}
          </Row>
        </Container>
      </div>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
}

export default Gallery;
