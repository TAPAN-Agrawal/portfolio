import React from "react";
import classes from './Project_card.module.css'

function Project_card(Props:any) {
  return <div>
    <div className={classes.card_container}>
        <div className={classes.Title}>
        {Props.title}
        </div>
        <div className={classes.Description}>
       {Props.description}
        </div>
        <div className={classes.Technology}>
         {Props.technology}
        </div>
    </div>
  </div>;
}

export default Project_card;
