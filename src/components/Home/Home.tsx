import React from "react";
import classes from './Home.module.css'
import img from '../../Assets/Images/person.png'

function Home() {
  return <div className={classes.main_container} >
            <div className={classes.intro}>
                <div className={classes.txt}>
                   <h1>Hi There !</h1>
                   <h1>I'AM <span className={classes.color}>TAPAN AGRAWAL</span></h1>
                   <h3 className={classes.colors}>FULL-STACK DEVELOPER</h3>
                </div>
            </div>
            <div className={classes.img}>

              <div > <img src={img} className={classes.img_inside}/></div>
            </div>
    </div>;
}

export default Home;
