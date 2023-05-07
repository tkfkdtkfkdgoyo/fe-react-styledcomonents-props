import React from "react";
import styled from "styled-components";

const ButtonEach = styled.div`
  width: 430px;
  height: 70px;
  margin: 20px;
  border-radius: 50px;
  background-color: ${(props) => (props.ButtonColor)};
  display: flex;
  align-items: center;
  justify-content: center;
;
`

const ButtonText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: white;
`;

const Button = (props) => {
  return (
    <>
      <ButtonEach ButtonColor={props.ButtonColor}>
        <ButtonText>{props.text}</ButtonText>
      </ButtonEach>
    </>
  );
};

export default Button;
