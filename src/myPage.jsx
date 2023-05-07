import React from "react";
import Box from "./components/box";
import Circle from "./components/circle";

const Main = () => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];

  return (
    <>
      <Box boxColor = "red" text = "text1"/>
      <Box boxColor = "blue" text = "text2"/>
      <Box boxColor = "green" text = "text3"/>
      <Box boxColor = "pink" text = "text4"/>
      <Circle CircleColor = "pink"/>
      <Circle CircleColor = "red"/>
      <Circle CircleColor = "black"/>
      <Circle CircleColor = "gray"/>
      <Circle CircleColor = "green"/>
      <Circle CircleColor = "blue"/>
      <Circle CircleColor = "orange"/> 
    </>
  );
};

//태그 안에 속성을 넣어야 해! 

export default Main;
