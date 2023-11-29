import React from 'react';
import HornedBeasts from '../HornedBeasts/HornedBeasts.jsx';
import styles from './Gallery.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Gallery(props) {



return (
  <> 
  <Container fluid>
  <Row className={styles.row}>
    {
      props.beasts.map((beasts, index) =>
        <HornedBeasts 
        key={beasts._id} 
        src={beasts.image_url} 
        title={beasts.title}
        description={beasts.description}
        keyword={beasts.keyword}
        horns={beasts.horns}
        />
      )
    }
    
  </Row>
  </Container>
 </>
 )
}

export default Gallery;