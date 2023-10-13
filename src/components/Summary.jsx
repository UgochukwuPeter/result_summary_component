import React from 'react'
// import star from '../assets/images/icon-visual.svg';
import styles from './Summary.module.css';
// import dataItem from '../data.json';

export default function Summary(props) {
  return (
    <div>
      <div className={`${styles.content_element}`}>
      <div className={`${styles.result_title}`} style={props.style}>
        <img src= {props.src} alt="star" />
        <h3>{props.title}</h3>
        </div>
        <p className={`${styles.result_amount}`}><span>{props.score}</span>/100</p>
      </div>
      {/* {
        dataItem.map((item)=>(
          <div className={`${styles.content_element}`} key={item.id}>
        <div className={`${styles.result_title}`}>
        <img src={item.icon} alt="star" />
        <h3>{item.category}</h3>
        </div>
        <p className={`${styles.result_amount}`}><span>{item.score}</span>/100</p>
      </div>
        ))
      } */}
      
      </div>
  )
}
