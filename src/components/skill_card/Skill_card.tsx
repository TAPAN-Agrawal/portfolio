import React from "react";
import classes from './Skill_card.module.css';
// import img1 from '../../Assets/Icons/React.png'

function Skill_card(Props:any) {
  return <div >
    <div className={classes.card_container}>
        <div className={classes.logo}>
            <img src={Props.image} />
        </div>
        <div className={classes.name}>
            {Props.name}
        </div>
    </div>
    </div>;
}

export default Skill_card;
