import React from "react";
import styled from "styled-components";
import img1 from "../components/asset/땅훈1.jpg"
import img2 from "../components/asset/땅훈2.jpg"
import img3 from "../components/asset/땅훈3.jpg"
import img4 from "../components/asset/땅훈4.jpg"
import img5 from "../components/asset/땅훈5.jpg"

// 랜덤한 이미지 추출을 위해서 배열을 만들고, 랜덤 인덱스 할당 
const imgArr = [img1, img2, img3, img4, img5]

//이미지 파일 
const ImageItem = styled.div`
    width: 400px;
    height: 250px;
    background-image: ${(props) => `url(${props.image})`};
    background-position: center !important;
    background-size: cover;
    padding: 0;
`;

// 커다란 네모와 그 속에 이미지 파일을 컴포넌트로 구성 
const MyUrl = () => {
    const randomIndex = Math.floor(Math.random() * imgArr.length)
    const image = imgArr[randomIndex]

  return (
    <>
      <ImageItem image = {image}></ImageItem>
    </>
  );
};

export default MyUrl;