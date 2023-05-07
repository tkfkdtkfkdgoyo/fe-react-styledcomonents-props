import React from "react";
import styled from "styled-components";


const TitleText = styled.p`
  font-size: 20px;
  font-weight: 200;
  text-align: left;
`;

const Title = (props) => {
  return (
    <>
    <TitleText>{props.text}</TitleText>
    </>
  );
};

export default Title;