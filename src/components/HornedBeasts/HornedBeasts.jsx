import React, {useState} from 'react';
// import Gallery from '../Gallery/Gallery.jsx';
import styles from './HornedBeasts.module.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HornedBeasts(props) {

  const [visible, setVisible] = useState("block");
  const [votes, setVotes] = useState(0);
  function favorite(){
    setVotes(votes+1)
    setVisible("none");
  }

  return (   
    <Col key={props.key} xs="12" md="auto">
      <Card style={{ width: '18rem', height: '35rem', marginBottom: '16px'}}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            <p>Horns: {props.horns}</p>
            {props.description}
          </Card.Text>
          <button onClick={favorite} variant="primary">{'\u2764'}{votes}</button>
        </Card.Body>
      </Card>
    </Col>
      )
    
    }
      /* <div className={styles.hornedBeasts}>
        <h2>{props.title}</h2>
        <img src={props.src} alt={props.description} title={props.title}></img>
        <p>{props.description}</p>
        <p>Horns: {props.horns}</p>
        <p><strong>This animal has {votes} votes!</strong></p>
        <button style={{display: `${visible}`}}onClick={favorite}>{'\u2764'}</button>
      </div> */

export default HornedBeasts;