import React, {useState} from 'react'
import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';

const ani1 = keyframes`
  0% {
    width: 1%;
    height: 1%;
  }
  50%{
    width: 90%;
    height: 1%;
  }
`
const ani2 = keyframes`
  0% {}
  100% {opacity: 1;}
`
const Container = styled.div`
  position: absolute;
  width: 90%;
  height: 600px;
  background-color: black;
  opacity: 0.8;
  z-index: 999;
  left: 120px;
  top: 120px;
  padding: 30px;
  
  animation: ${props => props.active ? ani1 : ''};
  animation-duration: 1s; 
  animation-fill-mode: forwards;
`
const Subcontainer = styled.div`
  opacity: 0;

  animation: ${props => props.active ? ani2 : ''};
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;

`
const Header = styled.div`
  height: 30px;
  display: flex;
  justify-content: end;
  align-items: center;
  
  div{
    cursor: pointer;
    color: white;
    font-size: 30px;
  }
`
const Main = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  div{
    width: 150px;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 30px;
  }
`
const Main2 = styled(Main)`
  height: 50px;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;

  div{
    border-bottom: 1px solid white;
    width: 150px;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }
`
const Subbar = ({display, setDisplay}) => {

  return (
    <Container active={display} style={{visibility: display ? "visible" : "hidden"}}>
      <Subcontainer active={display} style={{visibility: display ? "visible" : "hidden"}}>
      <Header><div onClick={() => setDisplay(!display)}>x</div></Header>
        <Main>
          <div>메뉴</div>
          <div>상품</div>
          <div>멤버쉽</div>
          <div>마이페이지</div>
        </Main>
        <Main2>
          <Link to="/coffee"><div onClick={()=> setDisplay(!display)}>Coffee</div></Link>
          <Link to="/product"><div onClick={()=> setDisplay(!display)}>Cup/Bottle</div></Link>
          <Link to="/membership"><div onClick={()=> setDisplay(!display)}>Membership</div></Link>
          <div>-</div>
        </Main2>
        <Main2>
          <Link to="/noncoffee"><div onClick={()=> setDisplay(!display)}>non-Coffee</div></Link>
          <Link to="/product"><div onClick={()=> setDisplay(!display)}>Acc</div></Link>
          <Link to="/membership/faq"><div onClick={()=> setDisplay(!display)}>FAQ/게시판</div></Link>
          <div>-</div>
        </Main2>
        <Main2>
          <Link to="/desert"><div onClick={()=> setDisplay(!display)}>Desert</div></Link>
          <Link to="/product"><div onClick={()=> setDisplay(!display)}>Tea-Package</div></Link>
          <div>-</div>
          <div>-</div>
        </Main2>
        </Subcontainer>
    </Container>
  )
}

export default Subbar