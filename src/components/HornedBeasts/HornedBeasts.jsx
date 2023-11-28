import React from 'react';
import Gallery from '../Gallery/Gallery.jsx';
import styles from './HornedBeasts.module.css';

function HornedBeasts(props) {

  return (
    <>
      <div className={styles.hornedBeasts}>
        <h2>{props.name}</h2>
        <img src={props.src} alt='alt' title='title'></img>
        <p>{props.description}</p>
      </div>
    </>
  )

}

export default HornedBeasts;