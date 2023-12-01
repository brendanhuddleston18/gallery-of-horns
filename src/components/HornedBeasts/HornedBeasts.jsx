import React, { useState } from "react";
// import Gallery from '../Gallery/Gallery.jsx';
import styles from "./HornedBeasts.module.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HornedBeasts(props) {
  const [rotation, setRotation] = useState(0);

  function rotateImg() {
    setRotation(rotation + 45);
  }

  function handleClick() {
    props.selectBeasts(props.beast);
    setRotation(360);
  }

  // const filterApplied = handleFilter !== null;

  console.log(props.filterHorns);
  return (
    <Col key={props.key} xs="12" md="auto">
      <Card
        onClick={props.showModal}
        className={styles.card}
        style={{
          width: "18rem",
          height: "auto",
          marginBottom: "16px",
          cursor: "pointer",
        }}
      >
        {/* chat gpt helped me with image rotation */}
        <Card.Img
          onClick={() => handleClick()}
          variant="top"
          src={props.beast.image_url}
          alt={props.beast.description}
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 1.0s",
          }}
        />
      </Card>
    </Col>
  );
}

export default HornedBeasts;
