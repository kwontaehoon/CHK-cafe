import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as Styled from "./Style";
import styled from "styled-components"

const PayTop = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-top: 30px;
    border-bottom: 3px solid #fa6464;
   h3{
    margin-left: 170px;
    font-weight: bold;
    font-size: 35px;
   }
`
const PayContainer = styled.div`
  border: 1px solid #ddd;
  width: 100%;
  height: 700px;
  h3{
  margin-top: 30px;
  margin-left: 110px;
  color: #222;
  font-weight: bold;
}
`
const PayListBox = styled.div`
width: 90%;
height: 1000px;
display: block;
justify-content: flex-start;
margin: 10px auto;
padding: 0;
background: #fff;
border: 3px solid #fa6464;
border-radius: 10px;
`
const ListBox = styled.div`
display: flex-start;
width: 80%;
height: 150px;
background: #fff;
border: 2px dashed #f5aaaa;
margin-left: 100px;
margin-top: 50px;
border-radius: 10px;
.subListBox{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
}
img{
  width: 90px;
  height: 70px;
}
.listPrice{
  margin: 0;
  padding-right: 20px;
  font-size: 15px;
  float: right;
}
.pmbtn{
  margin-left: 10px;
}
button{
  background: #fff;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
}
.del{
  display: flex;
  float: right;
  padding: 0;
  margin: 0;
  margin-top: 5px;
  margin-right: 10px;
}
.del:hover{
  padding: 2px;
  background: #f5aaaa;
}
`
//이 위로는 스타일//






const P_Pay = (location) => {

  const info = useLocation().state; //카트 정보를 받아옴

  const [sum, setSum] = useState(0);
  const [addList, setAddList] = useState(info);
  const [number, setNumber] = useState(1);
  const [cost, setCost] = useState([]);
  const [costTest, setCostTest] = useState(Array.from((v, i) => i));
  const [wishTab, setWishTab] = useState(Array.from({length: info.length}, () => 1));

  useEffect(()=>{
    let arr = [];
    info.map(x=>{
      arr.push(x.Price);
    })
    setCost(arr);
  }, [])

  const plus = (e, price) => {
    if(wishTab[e] >= 0){
    let arr = [...wishTab];
    arr[e] = arr[e] +1;
    cost[e] = cost[e] + price;
    setWishTab(arr);
    setSum(sum + price);
    }
  }
  const minus = (t, price) => {
    if(wishTab[t] > 1 ){
    let arr = [...wishTab];
    arr[t] = arr[t] -1;
    setWishTab(arr);
    cost[t] = cost[t] - price;
    setSum(sum - price);
    }
  }
    //버튼 클릭시 아이템 삭제

    const remove = (r, price, index)=>{
      let arr = [...addList];
      let arr2 = [...wishTab];
      arr2[r] = price * arr2[r]
      arr.splice(r,1, '');
      setAddList(arr);
      setSum(sum - arr2[r])
    }
 
  
const PayList = () => {
  let arr = [];
  addList.map((i, index)=>{
    if(i !== ''){
   arr.push(
            <ListBox key={index}>
            <button className='del' onClick={()=>remove(index, i.Price)}  ><i className="fa-solid fa-xmark"/></button>
            <div className='subListBox'>
            <span className='listTitle'>{i.title}</span>
            <img src={i.url}/>
            </div>
            <span className='pmbtn'>
            <button onClick={()=>plus(index, i.Price)}><i className="fa-solid fa-plus"/></button>
            {wishTab[index]}
            <button onClick={()=>minus(index, i.Price)}><i className="fa-solid fa-minus"/></button>
            </span>
            <span className='listPrice'>금액 : {cost[index]} 원</span>
            </ListBox>
    )
   }

   })
  
  return arr;

 }


  
 


  return (
    <>
    <PayTop>
      <h3>구매하기</h3>
    </PayTop>
    <PayContainer>
    <h3>🎁 Wish List 🎁</h3>
    <PayListBox>
      <PayList />
    </PayListBox>
    </PayContainer>
    </>
  )
}

export default P_Pay