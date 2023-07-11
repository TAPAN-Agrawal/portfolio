import React from "react";
import classes from './Skill.module.css'

import Skill_card from "../skill_card/Skill_card";
import img1 from '../../Assets/Icons/React.png';
import img2 from '../../Assets/Icons/Html.png'
import img3 from '../../Assets/Icons/css-3.png'
import img4 from '../../Assets/Icons/js.png'
import img5 from '../../Assets/Icons/node-js.png'
import img6 from '../../Assets/Icons/database.png'
import img7 from '../../Assets/Icons/Typescript.png'


function Skill() {
  return <>
    <h1>Skills</h1>
  <div className={classes.main_container}>
    <div className={classes.container}>
     <Skill_card image={img1} name="React js" />
      <Skill_card image={img2} name="HTML" />
      <Skill_card image={img3} name="CSS" />
      <Skill_card image={img4} name="JAVASCRIPT"/>
      <Skill_card image={img5} name="Node js" />
      <Skill_card image={img6} name="MongoDb" />
      <Skill_card image={img7} name="Typescript" />


    </div>
  </div>
  </>;
}

export default Skill;
