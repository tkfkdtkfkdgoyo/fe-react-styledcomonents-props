import React from "react";
import styled from "styled-components";


const ContentText = styled.p`
  font-size: 15px;
  font-weight: 500;
  text-align: left;
`;

const Content = (props) => {
  return (
    <>
    <ContentText>{props.text}</ContentText>
    </>
  );
};

export default Content;