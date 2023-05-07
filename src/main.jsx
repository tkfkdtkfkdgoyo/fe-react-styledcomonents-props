import React from "react";
import styled from "styled-components";
import Box from "./components/myBox";

const PageWrapper = styled.div`
  background-color: #D3D3D4;
  padding: 0;
  margin: 0;
  border: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const Page = () => {
  const boxColor = "white";

  return (
    <PageWrapper>
      <Box boxColor={boxColor} />
    </PageWrapper>
  );
};

export default Page;

