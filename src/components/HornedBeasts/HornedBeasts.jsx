import React, {useState} from 'react';
// import Gallery from '../Gallery/Gallery.jsx';
import styles from './HornedBeasts.module.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HornedBeasts(props) {

  
  const [rotation, setRotation] = useState(0);
  const [votes, setVotes] = useState(0);

  function rotateImg(){
    setRotation(rotation + 45)
  }

  function favorite(){
    setVotes(votes+1)
    setRotation(360)
  }

  function handleClick(){
   props.selectBeasts(props.beast);  
  }


  return (   
    <Col key={props.key} xs="12" md="auto">
      <Card onClick={props.showModal} className = {styles.card}style={{ width: '18rem', height: 'auto', marginBottom: '16px', cursor: 'pointer'}}>
        {/* chat gpt helped me with image rotation */}
        <Card.Img onClick={()=> handleClick()}variant="top" src={props.beast.image_url} alt={props.beast.description} style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 1.0s' }}/>
       
          <button style ={{width: '3rm', heigh: '3rm'} } onClick={favorite} variant="primary">{'\u2764'}{votes}</button>
      </Card>
    </Col>
      )  
    }

export default HornedBeasts;