import React from "react";
import Skill_card from "../skill_card/Skill_card";
import img1 from '../../Assets/Icons/React.png';
import img2 from '../../Assets/Icons/Html.png'
import img3 from '../../Assets/Icons/css-3.png'
import img4 from '../../Assets/Icons/js.png'
import img5 from '../../Assets/Icons/node-js.png'
import img6 from '../../Assets/Icons/database.png'
import img7 from '../../Assets/Icons/Typescript.png'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import classes from './Testmonial.module.css'
import Testcard from "../TestCard/Testcard";

function Testmonial() {
  return <div className={classes.main_container}>
    
      <AwesomeSlider animation="foldOutAnimation"  className={classes.containers}>
        <div style={{background:"transparent"}}>
         <Testcard p="English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." name="jack" college="-silver wale"/>
        </div>
        <div style={{background:"transparent"}}>
        <Testcard p="English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." name="jack" college="-silver wale"/>
        </div>
        <div style={{background:"transparent"}}>
        <Testcard p="English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." name="jack" college="-silver wale"/>
        </div>
      </AwesomeSlider>

  
  </div>;
}

export default Testmonial;
