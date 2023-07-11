import React from "react";
import classes from './Aboutus.module.css'
import Card from "../Card/Card";
import img from '../../Assets/Images/book.png'

function Aboutus() {
  return <>
  <div className={classes.main_container}>
   
   <div className={classes.left_container}>
     <h1>Education</h1>
   <Card year="2016-2017" school="Nelson-High-School" field="specilized for legends only"/>
     <Card year="2017-2019" school="Pragati-Higher-Secondary" field="master in science study"/>
     <Card year="2019-2023" school="Silver Oak College " field="Study of Computer Science"/>
   </div>
   <div className={classes.right_container}>
        <div>
        <img src={img}/>
        </div>
   </div>
 
     </div>
  </>;
}

export default Aboutus;
