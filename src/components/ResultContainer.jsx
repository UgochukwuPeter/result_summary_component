import React from 'react'
import iconReaction from '../assets/images/icon-reaction.svg';
import iconMemory from '../assets/images/icon-memory.svg';
import iconVisual from '../assets/images/icon-visual.svg';
import iconVerbal from '../assets/images/icon-verbal.svg';
import Result from './Result'
import Summary from './Summary'
import styles from './ResultContainer.module.css';
import dataItem from '../data.json';
export default function ResultContainer() {
  const style_Reaction = {
    color: 'hsl(0, 100%, 67%)',
  }
  const style_Memory ={
    color: 'hsl(39, 100%, 56%)',
  }
  const style_Verbal ={
    color: 'hsl(166, 100%, 37%)',
  }
  const style_Visual ={
    color: 'hsl(234, 85%, 45%)',
  }
  return (
    <div>
        <div className={`${styles.container_wrapper}`}>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.left}`}>
                <Result/>
                </div>
                <div className={`${styles.right}`}>
                <h2 className={`${styles.heading}`}>Summary</h2>
                <div className={`${styles.bg} ${styles.bg_reaction}`}>
                <Summary style={style_Reaction}  title = 'Reaction' src = {iconReaction} score = '80' />
                </div>
                <div className={`${styles.bg} ${styles.bg_memory}`}>
                <Summary style={style_Memory}  title = 'Memory' src = {iconMemory} score = '92' />
                </div>
                <div className={`${styles.bg} ${styles.bg_verbal}`}>
                <Summary style={style_Verbal}  title = 'Verbal' src = {iconVerbal} score = '61' />
                </div>
                <div className={`${styles.bg} ${styles.bg_visual}`}>
                <Summary style={style_Visual}   title = 'Visual' src = {iconVisual} score = '72' />
                </div>
               
                <button className={`${styles.btn}`}>Continue</button>
                
                
                </div>
            </div>
       
        </div>
       
    </div>
  )
}
