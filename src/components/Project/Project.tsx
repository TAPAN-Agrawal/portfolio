import React from "react";
import classes from './Project.module.css'
import Project_card from "../Project_card/Project_card";

function Project() {
  return <div className={classes.main_container}>
    <div className={classes.container} >

   <Project_card title="Maps" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus. Justo nec ultrices dui sapien eget mi proin sed. In est ante in nibh mauris cursus. Tempus urna et pharetra pharetra massa." technology="React+Typescript"   / >
   <Project_card title="Chatfree" description="Augue ut lectus arcu bibendum at varius vel pharetra vel. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Suspendisse faucibus interdum posuere lorem ipsum dolor." technology="Html+Css" />
   <Project_card title="Library Management" description="Eros donec ac odio tempor orci dapibus. Id diam vel quam elementum pulvinar etiam non quam lacus. Tellus rutrum tellus pellentesque eu tincidunt tortor. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis." technology="Python+Django" />
   <Project_card title="Home Buy Sell" description="Quis ipsum suspendisse ultrices gravida dictum. Fringilla phasellus faucibus scelerisque eleifend donec. Posuere ac ut consequat semper viverra nam libero justo laoreet." technology="Chatgpt+OpenAi" />
   <Project_card title="i Restaurant" description="Eros donec ac odio tempor orci dapibus. Id diam vel quam elementum pulvinar etiam non quam lacus. Tellus rutrum tellus pellentesque eu tincidunt tortor. " technology="GoLang" />
   <Project_card title="Clubing " description="Eros donec ac odio tempor orci dapibus. Id diam vel quam elementum pulvinar etiam non quam lacus. Tellus rutrum tellus pellentesque eu tincidunt tortor." technology="Node+Mongodb+ReactNative" />

    </div>
    </div>;
}

export default Project;
