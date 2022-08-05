import React,{useState} from 'react'
import fruit from './MenuList.json';
import './menu.css';
import RLayout from './RLayout';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import B_Cart from './B_Cart';
import GoTop from './GoTop';
import JW_Cart2 from './JW_Cart2';
import Footer from './Footer';



const Juice = () =>{  
  const [dd, setDd] = useState([]);
  const [likeArr, setLikeArr] = useState(Array.from({length: 14}, () => 296)); // likeArr 배열 선언 ( 배열에 들어있는 변수들의 초기값은 296 으로 )
  const [display2, setDisplay2] = useState(false);
   const [cartList, setCartList] = useState({price : 0});
  
  const addCart = (a)=> {
    let arr = [];
    for(let i =0;i<fruit.fruit.length;i++){
      if(a === fruit.fruit[i].id){
        arr.push(fruit.fruit[i]);
      }
    }
    setCartList(...arr);
  }
  
  const plusLike = (i) => {
    let _likeArr = [...likeArr];    //[296, 296, 296, 296, 296, 296...]
    let element = document.getElementsByClassName("fa-heart");
  
    if(_likeArr[i] == 296){   // 배열에서 인덱스 i인 제품의 좋아요의 값이 296이니까 +1
      _likeArr[i] += 1;    
      setLikeArr(_likeArr);
      element[i].className = 'fa-solid fa-heart'; //클래스 이름 수정
  
    }else{                  // 배열에서 인덱스 i인 제품의 좋아요의 값이 297이니까 -1
      _likeArr[i] -= 1;
      setLikeArr(_likeArr);   
      element[i].className = 'fa-regular fa-heart'; //클래스 이름 수정
    }  
  }

  const show =(listVal)=>{
    let arr = Array.from({length: 14}, ()=>{ return undefined });
  
    setDd([...arr]);
    arr[listVal] = 'block';
  
    for(let i=0; i<arr.length; i++){
      if(arr[i] === undefined){
          arr[i] = 'none';
      }
  }
  
    setDd([...arr]);
  
    let listId = 'b_descBox_'+listVal;
    $('#'+listId).css("display","block")
  
  } 
  
    let list = [];
    for(let i =0 ; i < fruit.fruit.length;i++){
      list.push(
          <>
              <li className='b_flexList' onClick={()=>show(i)} key={fruit.fruit[i].id}>
                <img src={fruit.fruit[i].url} alt={fruit.fruit[i].id}  />
                <div className="clickMe" style={{disply:"none"}}>
                ClickMe! <i class="fa-regular fa-hand-pointer"></i>
              </div>
                <p className='text-center'>{fruit.fruit[i].title}</p>
              </li>  
            <div className='b_descBox' style={{display: dd[i]}}>
                <ul className='b_desc' id={"b_descBox_"+[i]}>
                  <li>{fruit.fruit[i].title}</li>
                  <li className="w_li">{fruit.fruit[i].desc}</li>
                 
                  <li className="w_li2">매장 상황에 따라 판매하지 않을 수도 있습니다.</li>
                  <li className='b_icon'>
                  <i class="fa-regular fa-heart" onClick={()=>plusLike(i)} style={{color:"#fa6464", cursor:"pointer"}}><span style={{color:"black",display:"inline-block", paddingLeft:"5px"}}></span></i>
                    <i class="fa-solid fa-cart-arrow-down" id={fruit.fruit[i].id} style={{color:"skyblue", cursor:"pointer"}} onClick={()=>{addCart(fruit.fruit[i].id)}}></i>
                  </li>
                </ul>
              </div>
          </>)

  }
  return (
      <>
      <RLayout display2={display2} setDisplay2={setDisplay2}/>
      <B_Cart bb={cartList}  />
      <GoTop/>
      <JW_Cart2 jw={cartList} display2={display2}/>

      <div className='b_imgbox'> 
          <img src="image/juice.png" alt="001" />
          <span className="banner_juice_text">엄선한 재료로 선보이는 <br/><br/>새콤달콤한 에이드와 신선한 과일음료까지!</span>
        </div>
    <div className="b_container">
      <ul className='b_Nflex b_lnb'>
         <li><Link to="/noncoffee">Beverage</Link></li>
         <li><Link to="/juice">Smothie & Juice</Link></li>
       </ul>
       <div className="line"></div>
       <ul className='b_flex'>
          {list}
        </ul> 
    </div>
    <Footer/>
      </>
      

  )
}

export default Juice