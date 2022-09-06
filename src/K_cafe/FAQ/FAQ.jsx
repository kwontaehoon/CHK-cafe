import React, {useState} from 'react'
import styled, { keyframes } from "styled-components"

const ani = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`
const angle1 = keyframes`
  0% {transform: rotate(360deg);}
  100% {transform: rotate(540deg);}
`
const angle2 = keyframes`
  0% {transform: rotate(180deg);}
  100% {transform: rotate(360deg);}
`
const Container = styled.div`
  width: 80%;
  margin: auto;
`
const Header = styled.div`
  border: 1px solid black;
  height: 50px;
  padding: 15px;
`
const Main = styled.div`
  height: 1150px;
`
const Box = styled.div`
  border: 1px solid black;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Bar = styled.div`
  border: 1px solid black;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: grey;
`
const Bar1 = styled(Bar)`
  background-color: #ddd;

  i{
    cursor: pointer;
  }
`
const ArrowBox = styled.div`
  height: 32px;
  animation: ${props => props.arrow2 ? angle1 : angle2};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`
const Box1 = styled(Box)``

const Res = styled.div`
  border: 1px solid black;
  background-color: pink;
  height: 300px;
  animation: ${ani} 1s 0s;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  display: none;
  align-items: center;
  justify-content: center;
`
const Line = styled.div`
  border-top: 1px solid #ddd;
  margin-top: 50px;
  padding-top: 50px;
`
const Footer = styled.div`
  border: 1px solid black;
  height: 200px;
`

const FAQ = () => {

  const [arrow, setArrow] = useState([]); // arrow 누르면 slide 나옴
  const [arrow2, setArrow2] = useState([false, false, false]); // arrow 회전

  const slide = (e) => {
    let arr = [...arrow];
    arr[e] = !arr[e];
    setArrow(arr);
    let arr2 = [...arrow2];
    arr2[e] = !arr2[e];
    console.log('arr2: ', arr2);
    setArrow2(arr2);
  }

  console.log('arrow2: ', arrow2);
  return (
    <Container>
      <Header>FAQ</Header>
      <Main>
        <Box1>자주하는 질문 1.</Box1>
        <Bar1><ArrowBox arrow2={arrow2[0]}><i className="fa-solid fa-angle-down" onClick={()=>slide(0)}></i></ArrowBox ></Bar1>
        <Res style={{display: arrow[0] ? "flex" : "none"}}>자주하는 질문 1에 대한 대답</Res>

        <Box1>자주하는 질문 2.</Box1>
        <Bar1><ArrowBox arrow2={arrow2[1]}><i className="fa-solid fa-angle-down" onClick={()=>slide(1)}></i></ArrowBox ></Bar1>
        <Res style={{display: arrow[1] ? "flex" : "none"}}>자주하는 질문 2에 대한 대답</Res>
        
        <Box1>자주하는 질문 3.</Box1>
        <Bar1><ArrowBox arrow2={arrow2[2]}><i className="fa-solid fa-angle-down" onClick={()=>slide(2)}></i></ArrowBox ></Bar1>
        <Res style={{display: arrow[2] ? "flex" : "none"}}>자주하는 질문 3에 대한 대답</Res>
        <Line></Line>
        <Footer></Footer>
      </Main>
    </Container>
  )
}

export default FAQ