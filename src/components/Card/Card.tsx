import React from "react";
import classes from './Card.module.css';
import {FaUserGraduate} from  'react-icons/fa'

function Card(Props:any) {
  return <div className={classes.card_container}>
        <div className={classes.card}>
           <div className={classes.logo}>
            <FaUserGraduate size={40} />
           </div>
           <div className={classes.details}>
            <p>{Props.year}</p>
            <h4>{Props.school}</h4>
            <h5>{Props.field}</h5>
           </div>
        </div>
  </div>;
}

export default Card;
