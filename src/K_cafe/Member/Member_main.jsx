import React, { useState } from 'react'
import styled, { keyframes } from "styled-components";



const boxFade = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`
const boxWater = keyframes`
  0% {transform: translateY(0px);}
  100% {transform: translateY(-200px);}
`
const move = keyframes`
100% {
  transform: rotate(360deg);
}
`
 // animation: keyframes이름 | 전체 진행시간 | 지연시간 | 반복 횟수

const Container = styled.div`
  width: 100%;
  height: 2200px;
  margin: auto;
`
const Header = styled.div`
  width: 80%;
  margin: auto;
  height: 120px;
  display: flex;
  align-items: center;
  font-size: 25px;
  padding-left: 30px;
`
const MainBox0 = styled.div`
  width: 100%;
  height: 350px;
  background-image: url('image/K_image/cafe1.jpg');
  background-size : cover;
`
const Main = styled.div`
  width: 80%;
  height: 800px;
  margin: auto;
`
const MainBox1 = styled.div`
  display flex;
  justify-content: space-around;
  align-items: center;
`
const CircleBox = styled.div`
  flex: 0 0 25%;
  height: 350px;
  margin-top: 50px;
`
const Circle = styled.div`
  height: 300px;
  border-radius: 15%;
  text-align: center;
  color: white;
`
const CircleTop = styled.div`
  padding-top: 70px;
  font-size: 70px;
`
const CircleMiddle = styled.div`
  font-size: 30px;
`
const CircleName = styled.div`
  height: 50px;
  text-align: center;
  line-height: 45px;
`
const MainBox2 = styled.div`
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
`
const SelectBox = styled.div`
  flex: 0 0 90%;
  height: 600px;
  display: flex;
`
const Select = styled.div`
  flex: 0 0 15%;
  height: 600px;
  padding-top: 150px;
`
const Bselect = styled.div`
  border: 1px solid black;
  text-align: center;
  height: 50px;
  line-height: 50px;
  margin-bottom: 30px;
  cursor: pointer;
  &:hover{  
    background-color : skyblue;
    color : blue
  } 
`
const Sselect = styled(Bselect)``
const Gselect = styled(Bselect)``

const Info = styled.div`
  flex: 0 0 85%;
  position: reletive;
  transition: opacity 0;
`
const Info1 = styled.div`
  height: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  animation: ${boxFade} 1s 0s;
`
const Info2 = styled(Info1)``
const Info3 = styled(Info1)``

const InfoBox = styled.div`
  width: 250px;
  height: 230px;
  text-align: center;
  line-height: 220px;
  position: relative;
  z-index: 200;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid black;
  box-shadow: 5px 5px 2px 2px rgb(117, 23, 30);
`
const Water = styled.div`
  width: 270px;
  height: 200px;
  position: absolute;
  z-index: -1;
  animation: ${boxWater} 2s 0s;
  animation-fill-mode: forwards;
`
const WaterInB = styled.div`
  background-color: rgb(152, 27, 35);
  width: 600px;
  height: 600px;
  left: -180px;
  top: 30px;
  position: absolute;
  border-radius: 45%;
  animation: ${move} 10s infinite linear;
`
const WaterInS = styled(WaterInB)`
  top: 30px;
`
const WaterInG = styled(WaterInB)`
  top: 30px;
`
const MainBox3 = styled.div`
  margin-top: 30px;
  height: 190px;
  background-color: #ddd;
  padding: 30px;
`
const Main3Title = styled.div``
const Main3Content = styled.div`
  font-size: 14px;
  padding: 5px;
`
const MainBox4 = styled(MainBox3)`
  height: 220px;
`
const Main4Title = styled.div``
const Main4Content = styled(Main3Content)``


const Member_main = () => {

  const List = () => {
    const arr = [];
    for(let i=0; i<3; i++){
      arr.push(<CircleBox key={i}>
          <Circle style={{backgroundImage: Circle_Color[i]}}>
            <CircleTop><i className="fa-solid fa-child-reaching"></i></CircleTop>
            <CircleMiddle>Level</CircleMiddle>
          </Circle>
          <CircleName>{rank[i]}</CircleName>
      </CircleBox>)
    }
    return arr;
  }


const Circle_Color = ['linear-gradient(to bottom right, rgb(200, 35, 35), brown)', // 원 배경색깔
   'linear-gradient(to bottom right, rgb(132, 138, 118), gray)',
   'linear-gradient(to bottom right, rgb(230, 212, 100), yellow)'];

const rank = ['Bronze', 'Sliver', 'Gold'];
const [select, setSelect] = useState(['flex', 'none', 'none']); // info123 display
const [color, setColor] = useState(['skyblue']); // button 배경

const select_button = (s) => { // bronze, sliver, gold 버튼
  select.splice(select.findIndex(x => x === 'flex'), 1, 'none');
  let arr = [...select];
  arr[s] = 'flex';
  setSelect([...arr]);
  let arr2 = [];
  arr2[s] = 'skyblue';
  setColor([...arr2]);
}

  return (
    <Container>
      <Header>Membership</Header>
      <MainBox0></MainBox0>
      <Main>
        <MainBox1>
          <List />
        </MainBox1>
        <MainBox2>
          <SelectBox data-scroll>
            <Select>
              <Bselect onClick={()=>select_button(0)} style={{backgroundColor: color[0]}}>Bronze</Bselect>
              <Sselect onClick={()=>select_button(1)} style={{backgroundColor: color[1]}}>Sliver</Sselect>
              <Gselect onClick={()=>select_button(2)} style={{backgroundColor: color[2]}}>Gold</Gselect>
            </Select>
            <Info>
              {/* <Info1 style={{display: select[0]}}> */}
              <Info1 style={{display: select[0]}}>
                <InfoBox>아메리카노 무료 쿠폰 제공(1회)<Water><WaterInB /></Water></InfoBox>
                <InfoBox>커피 무료 사이즈업(1회)<Water><WaterInB /></Water></InfoBox>
                <InfoBox>멤버십 전용 이벤트 참여 기회 부여<Water><WaterInB /></Water></InfoBox>
                <InfoBox>10% 할인 쿠폰 제공(1회)<Water><WaterInB /></Water></InfoBox>
                <InfoBox>-</InfoBox>
                <InfoBox>-</InfoBox>
              </Info1>
              <Info2 style={{display: select[1]}}>
              <InfoBox>Silver 멤버쉽 카드 제공<Water><WaterInS /></Water></InfoBox>
              <InfoBox>커피/음료 무료 쿠폰 제공(1회)<Water><WaterInS /></Water></InfoBox>
                <InfoBox>CHK MUG 1개 제공<Water><WaterInS /></Water></InfoBox>
                <InfoBox>20% 할인 쿠폰 제공<Water><WaterInS /></Water></InfoBox>
                <InfoBox>-</InfoBox>
                <InfoBox>-</InfoBox>
              </Info2>
              <Info3 style={{display: select[2]}}>
              <InfoBox>Gold 멤버쉽 카드 제공<Water><WaterInG /></Water></InfoBox>
              <InfoBox>생일 축하케이크 제공(매년 1회)<Water><WaterInG /></Water></InfoBox>
                <InfoBox>멤버십 감사 쿠폰 제공<Water><WaterInG /></Water></InfoBox>
                <InfoBox>CHK GOODS 1개 제공<Water><WaterInG /></Water></InfoBox>
                <InfoBox>-</InfoBox>
                <InfoBox>-</InfoBox>
              </Info3>
            </Info>
          </SelectBox>
        </MainBox2>
      <MainBox3>
          <Main3Title style={{marginBottom: '20px'}}>혜택안내</Main3Title>
          <Main3Content>- 스탬프 12개 적립시, 아메리카노 쿠폰 증정</Main3Content>
          <Main3Content>- 등급별 다양한 프로모션 및 이벤트 참여기회 제공</Main3Content>
          <Main3Content>- 등급별 다양한 프로모션 및 이벤트 참여기회 제공</Main3Content>
      </MainBox3>
      <MainBox4>
        <Main4Title style={{marginBottom: '20px'}}>이용안내</Main4Title>
        <Main4Content>- 스탬프 유효기간은 스탬프 별 1년이며, 쿠폰 유효기간은 발행일 기준 1개월입니다.</Main4Content>
        <Main4Content>- 스탬프 유효기간은 스탬프 별 1년이며, 쿠폰 유효기간은 발행일 기준 1개월입니다.</Main4Content>
        <Main4Content>- 스탬프 유효기간은 스탬프 별 1년이며, 쿠폰 유효기간은 발행일 기준 1개월입니다.</Main4Content>
        <Main4Content>- 스탬프 유효기간은 스탬프 별 1년이며, 쿠폰 유효기간은 발행일 기준 1개월입니다.</Main4Content>
      </MainBox4>
      </Main>
    </Container>
  )
}

export default Member_main