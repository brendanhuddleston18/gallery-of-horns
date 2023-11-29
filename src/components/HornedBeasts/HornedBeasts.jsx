import React, {useState} from 'react';
// import Gallery from '../Gallery/Gallery.jsx';
import styles from './HornedBeasts.module.css';

function HornedBeasts(props) {

  const [visible, setVisible] = useState("block");
  const [votes, setVotes] = useState(0);
  function favorite(){
    setVotes(votes+1)
    setVisible("none");
  }

  return (
    <>
      <div className={styles.hornedBeasts}>
        <h2>{props.title}</h2>
        <img src={props.src} alt={props.description} title={props.title}></img>
        <p>{props.description}</p>
        <p>Horns: {props.horns}</p>
        <p><strong>This animal has {votes} votes!</strong></p>
        <button style={{display: `${visible}`}}onClick={favorite}>{'\u2764'}</button>
      </div>
    </>
  )

}

export default HornedBeasts;