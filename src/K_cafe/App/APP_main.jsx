import React, {useState, useEffect} from 'react'
import styled, { keyframes } from "styled-components"
import {Row, Col} from 'reactstrap'
import AOS from "aos"
import "aos/dist/aos.css"

const BoxSlide1 = keyframes`
  0% {left: -1000px;}
  100% {left: 0px;}
`
const BoxSlide2 = keyframes`
  0% {right: -1000px;}
  100% {right: 0px;}
`
const ani1 = keyframes`
  0% {opacity: 1;}
  100% {
    opacity: 0;
    visibility: hidden;
  }
`
const ani2 = keyframes`
  0% {opacity: 0;}
  100% {
    opacity: 1;
    visibility: visible;
  }
`
const Container = styled.div`
  width: 80%;
  height: 1800px;
  margin: auto;
`
const Header = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  font-size: 25px;
  padding-left: 30px;
  border-bottom: 1px solid black;
`
const Main = styled.div`
  height: 1000px;
`
const MainBox1 = styled.div`
  height: 500px;
`
const MainBox1Top = styled.div`
  height: 50%;
  padding: 20px;
  display:flex;
  justify-content: space-around;
  overflow: hidden;
`
const MainBox1Bottom = styled.div`
  height: 50%;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
`
const SelectBox1 = styled.div`
  width: 300px;
  height: 200px;
  animation: ${BoxSlide1} 2s 0s;
  background-color: yellow;
  position: relative;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  &:hover{  
    transform: scale(1.2);
    transition: .5s;
  } 
`
const Step = styled.div`
  width: 100px;
  margin-top: 30px;
  font-size: 20px;
  border-bottom: 2px solid red;
  color: red;
`
const Content = styled.div`
  margin-top: 40px;
  font-size: 25px;
`
const SelectBox2 = styled.div`
  width: 300px;
  height: 200px;
  background-color: yellow;
  animation: ${BoxSlide2} 2s 0s;
  position: relative;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;

  &:hover{  
    transform: scale(1.2);
    transition: transform .5s; 
  } 
`
const MainBox2 = styled.div`
  width: 100%;
  height: 745px;
  border: 3px solid black;
  border-radius: 15px;
  overflow: hidden;
  background-color: black;
`
const MainBox2Top = styled.div`
  flex: 0 0 100%;
  height: 705px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const Box1 = styled.div`
  width: 150px;
  border: 1px solid black;
  height: 300px;
  margin-top: 30px;
  cursor: pointer;

`
const MainBox2Bottom = styled.div`
  flex: 0 0 100%;
  display: flex;
  align-items: center;
  height: 40px;
  color: white;
  justify-content: center;

  div{
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 33px;
    cursor: pointer;
    color: white;

    &:hover{
      background-color: gray;
      border-radius: 15px;
    }
  }
  
`
const MainBox3 = styled.div`
  height: 300px;
  background-color: skyblue;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;  
`
const InfoBox1 = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
  visibility: hidden;
  position: absolute;
  left: 0;
  display: flex;

  animation: ${props => props.active ? ani2 : ani1};
  animation-duration: 3s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`
const SubBox1 = styled.div`
  flex: 0 0 50%;
  background-image: url('/image/K_image/memo.jpg');
  background-size: 100%;
  padding: 150px 100px;
`
const SubBox2 = styled.div`
  flex: 0 0 50%;
  background-color: blue;
`
const InfoBox2 = styled.div`
  animation: ${props => props.active ? ani1 : ani2};
  animation-duration: 1s; 
  animation-fill-mode: forwards;
`

const APP_main = () => {

  const [number, setNumber] = useState(1); // 스크롤 값
  const [active, setActive] = useState(false); // 애니메이션 props


  useEffect(() => {
    AOS.init();
  }, [])

  const scroll = (number) => {

    window.scroll({top:(0, 770), behavior: 'smooth'}) // 화면 바로 전환 'auto'
    setNumber(number);
  }
  const test = () => {
    console.log('test');
    setActive(!active);
  }
  const back = () => {
    console.log('back');
    setActive(!active);
  }

  console.log('active: ', active);


  return (
    <Container>
      <Header>앱</Header>
      <Main>
        <MainBox1>
          <MainBox1Top>
            <SelectBox1 onClick={()=>scroll(1)}>
              <Step>Step 1</Step>
              <Content>빠르고 스마트한 주문</Content>
            </SelectBox1>
            <SelectBox1 onClick={()=>scroll(2)}>
            <Step>Step 2</Step>
              <Content>스탬프 적립</Content>
            </SelectBox1>
            <SelectBox2 onClick={()=>scroll(3)}>
            <Step>Step 3</Step>
              <Content>간단한 결제 서비스</Content>
            </SelectBox2>
          </MainBox1Top>
          <MainBox1Bottom>
            <SelectBox1 onClick={()=>scroll(4)}>
            <Step>Step 4</Step>
              <Content>다양한 쿠폰 발급</Content>
            </SelectBox1>
            <SelectBox2 onClick={()=>scroll(5)}>
            <Step>Step 5</Step>
              <Content>멤버십에 따른 혜택</Content>
            </SelectBox2>
            <SelectBox2 onClick={()=>scroll(6)}>
            <Step>Step 6</Step>
              <Content>선물하기</Content>
            </SelectBox2>
          </MainBox1Bottom>
      </MainBox1>
      <MainBox2>
        <MainBox2Top>
          <InfoBox1 active={active}>
            <SubBox1>첫번째 슬라이드</SubBox1>
            <SubBox2></SubBox2>
          </InfoBox1>
          <InfoBox2 active={active}>
          <Row>
            <Col md="2" xs="4">
              <Box1 onClick={test} data-aos="fade-up" data-aos-duration="500"></Box1>
            </Col>
            <Col md="2" xs="4">
              <Box1 onClick={test} data-aos="fade-up" data-aos-duration="500"></Box1>
            </Col>
            <Col md="2" xs="4">
              <Box1 onClick={test} data-aos="fade-up" data-aos-duration="500"></Box1>
            </Col>
            <Col md="2" xs="4">
              <Box1 onClick={test} data-aos="fade-up" data-aos-duration="500"></Box1>
            </Col>
            <Col md="2" xs="4">
              <Box1 onClick={test} data-aos="fade-up" data-aos-duration="500"></Box1>
            </Col>
            <Col md="2" xs="4">
              <Box1 onClick={test} data-aos="fade-up" data-aos-duration="500"></Box1>
            </Col>
          </Row>
          </InfoBox2>
        </MainBox2Top>
        <MainBox2Bottom>
          <div><i className="fa-solid fa-bars"></i></div>
          <div style={{width: '15px', height: '15px', border: '3px solid white', borderRadius: '5px', margin: '0px 50px 2px'}}></div>
          <div onClick={back}><i className="fa-solid fa-angle-left"></i></div>
        </MainBox2Bottom>
      </MainBox2>
      <MainBox3>지금 다운로드 하시오</MainBox3>
      </Main>
    </Container>
  )
}

export default APP_main