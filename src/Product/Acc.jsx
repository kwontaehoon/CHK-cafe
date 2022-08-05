import React, { useState, useRef } from 'react';
import BagList  from './ProList.json';
import CardList from './ProList.json';
import EtcList from './ProList.json';
import * as Styled from "./Style";

const Acc = ({subTop1, setSubTop1, addList, setAddList, add}) => {

  const [test, setTest] = useState(1);
  let [modal, setModal] = useState(false);
 
  const subTopClose1 = (props) =>{
    setSubTop1(false);
  }
  

  const bagAdd = (r) => {
    let arr = [...addList];
    setTest(test+1);
    for(let i=0; i<BagList.BagList.length; i++){
      if(BagList.BagList[i].id === r){
        arr.push(BagList.BagList[i]);
      }
    }
    setAddList(arr);
  }
  const cardAdd = (r) => {
    let arr = [...addList];
    setTest(test+1);
    for(let i=0; i<CardList.CardList.length; i++){
      if(CardList.CardList[i].id === r){
        arr.push(CardList.CardList[i]);
      }
    }
    setAddList(arr);
  }
  const EtcAdd = (r) => {
    let arr = [...addList];
    setTest(test+1);
    for(let i=0; i<EtcList.EtcList.length; i++){
      if(EtcList.EtcList[i].id === r){
        arr.push(EtcList.EtcList[i]);
      }
    }
    setAddList(arr);
  }




     let list = BagList.BagList.map((BagList, index)=>{
    return (
      <Styled.ListImgBox key={index} onClick={()=>bagAdd(index+1)}> 
        <img src={BagList.url} />
        <p className='text-center'>{BagList.title}</p>
      </Styled.ListImgBox>
    );
  });
  let list2 = CardList.CardList.map((CardList, index)=>{
    return (
      <Styled.ListImgBox key={index} onClick={()=>cardAdd(index+1)}> 
        <img src={CardList.url} />
        <p className='text-center'>{CardList.title}</p>
      </Styled.ListImgBox>
    );
  });
  let list3 = EtcList.EtcList.map((EtcList, index)=>{
    return (
      <Styled.ListImgBox key={index} onClick={()=>EtcAdd(index+1)}> 
        <img src={EtcList.url} />
        <p className='text-center'>{EtcList.title}</p>
      </Styled.ListImgBox>
    );
  });



  const OneRef = useRef();
  const TwoRef = useRef();
  const ThreeRef =useRef();
  const onOneClick = () => {
    OneRef.current?.scrollIntoView({ behavior: 'smooth'});
  };
  const onTwoClick = () => {
    TwoRef.current?.scrollIntoView({ behavior: 'smooth'});
  };
  const onThreeClick = () => {
    ThreeRef.current?.scrollIntoView({ behavior: 'smooth'});
  };
return (
  <>

  <Styled.ProMenu1 style={{display: subTop1? "flex" : "none"}} onMouseLeave={subTopClose1}>
    <button type='button' className='proMenuBtn1' onClick={onOneClick}>파우치</button>
    <button type='button' className='proMenuBtn1' onClick={onTwoClick}>카드홀더</button>
    <button type='button' className='proMenuBtn1' onClick={onThreeClick}>ETC</button>
    </Styled.ProMenu1>
  <Styled.ListWrap onClick={add}>
   <div className='ListImg' ref={OneRef} >
        {list}
      </div> 
      <div className='ListImg' ref={TwoRef}>
      {list2}
      </div> 
      <div className='ListImg'ref={ThreeRef}>
      {list3}
      </div> 
      
        </Styled.ListWrap>
        {/* <P_Cart mug={addList} modal={modal} subList={subList} setSubList={setSubList} tt={tt} setTt={setTt}/> */}
    </>
  )

}

export default Acc