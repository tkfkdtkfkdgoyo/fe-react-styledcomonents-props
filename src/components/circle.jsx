import React from "react";
import styled from "styled-components";

const CircleEach = styled.div`
  width: 200px;
  height: 200px;
  margin: 50px;
  border-radius: 100px;
  background-color: ${(props) => (props.CircleColor ? props.CircleColor : "green")};
  display: inline-block;
  align-items: center;
  justify-content: center;
`;

const Circle = (props) => {
  return (
    <>
      <CircleEach CircleColor={props.CircleColor}>
      </CircleEach>
    </>
  );
};

export default Circle;
