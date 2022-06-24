import React from "react";
import styles from './../../styles/Card.css';
import arrow from '../images/arrow.svg'
export default function Card(props) {
  return (
    <div>
      <div className={styles.main_card_container}>
          <h2 className={styles.card_heading}>{props.date}</h2>  
          <h2 className={styles.card_heading}>{props.queryId}</h2> 
          <h2 className={styles.card_heading}>{props.name}</h2> 
          <button className= {styles.card_button}>
          <img src={arrow} alt="" /> 
          </button>
        
        </div>
      </div>

  );
}