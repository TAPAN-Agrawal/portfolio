import React from "react";
import classes from './Testcard.module.css'
import img from '../../Assets/Icons/man.jpg'
import img2 from '../../Assets/Icons/left-quote.png'

function Testcard(Props:any) {
    return <div className={classes.main_container}>


        <div className={classes.main}>
           <div className={classes.h1}>
            <img src={img2} className={classes.icon}/>
           </div>
           <p className={classes.p}>{Props.p}</p>
           <div className={classes.info}>
           <h5 className={classes.h5}>{Props.name}</h5>
           <h6 className={classes.h6}>{Props.college} </h6>
           </div>
        </div>
        <div className={classes.circle}>
            <img src={img} className={classes.img}/>
        </div>
    </div>;
}

export default Testcard;
