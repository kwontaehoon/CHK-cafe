import React, { useState, useRef } from 'react';
import MugList from './ProList.json'
import TumbList from './ProList.json';
import GlaList from './ProList.json';
import Product from './Product';
import P_Cart from './P_Cart';
import * as Styled from "./Style";
import styled from "styled-components";



const Cup = ({subTop, subTopClose, addList, setAddList, add}) => {



  const mugAdd = (r) => {
    let arr = [...addList];
    for(let i=0; i<MugList.MugList.length; i++){
      if(MugList.MugList[i].id === r){
        arr.push(MugList.MugList[i]);
      }
    }
    setAddList(arr);
    
  }


  const tumbAdd = (r) => {
    let arr = [...addList];
    for(let i=0; i<TumbList.TumbList.length; i++){
      if(TumbList.TumbList[i].id === r){
        arr.push(TumbList.TumbList[i]);
      }
    }
    setAddList(arr);
  }

  const glaAdd = (r) => {
    let arr = [...addList];
    for(let i=0; i<GlaList.GlaList.length; i++){
      if(GlaList.GlaList[i].id === r){
        arr.push(GlaList.GlaList[i]);
      }
    }
    setAddList(arr);
  }


  let list = MugList.MugList.map((MugList, index)=>{
    return (
      <Styled.ListImgBox key={index} onClick={()=>mugAdd(index+1)}>
        <img src={MugList.url} />
        <p className='text-center'>{MugList.title}</p>
     
       
      </Styled.ListImgBox>
    );
  });
  let list2 = TumbList.TumbList.map(( TumbList, index)=>{

    return (
      <Styled.ListImgBox key={index} onClick={()=>tumbAdd(index+1)}>
        <img src={ TumbList.url}  />
        <p className='text-center'>{ TumbList.title}</p>

      </Styled.ListImgBox>
    );
  });
  let list3 = GlaList.GlaList.map(( GlaList, index)=>{

    return (
      <Styled.ListImgBox key={index} onClick={()=>glaAdd(index+1)}>
        <img src={ GlaList.url} />
        <p className='text-center'>{ GlaList.title}</p>

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
    {/* <P_Cart mug={addList} setMug={setAddList} modal={modal} subList={subList} setSubList={setSubList} tt={tt} setTt={setTt} /> */}
    <Styled.ProMenu style={{display: subTop? "flex" : "none"}} onMouseLeave={subTopClose}>
      <button type='button' className='proMenuBtn' onClick={onOneClick}>머그</button>
      <button type='button' className='proMenuBtn' onClick={onTwoClick}>텀블러</button>
      <button type='button' className='proMenuBtn' onClick={onThreeClick}>글라스</button>
      </Styled.ProMenu>
      
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
     

        
       
    </>
  )

}
export default Cup