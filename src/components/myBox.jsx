import React from "react";
import styled from "styled-components";
import Title from "./myTitle";
import Content from "./myContent";
import Url from "./myUrl";
import Button from "./myButton";

const BoxEach = styled.div`
  width: 500px;
  height: 500px;
  margin: 0;
  border-radius: 30px;
  padding: 0;
  background-color: ${(props) => props.boxColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = (props) => {
  return (
    <>
    <BoxEach boxColor={props.boxColor}>
        <Url />
        <Title text="이건 제목이야" />
        <Content text="이건 내용이야" />
        <Button ButtonColor="orange" text = "다음엔 제대로 할게요 ㅠ"/>
    </BoxEach>
    </>
  );
};

export default Box;
