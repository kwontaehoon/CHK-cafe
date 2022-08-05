import React ,{useState}from 'react'
import coffeeList from './MenuList.json';
import './menu.css';
import RLayout from './RLayout';
import $ from 'jquery';
import B_Cart from './B_Cart'
import GoTop from './GoTop';
import JW_Cart2 from './JW_Cart2';
import Footer from './Footer';


const Coffee = () =>{  
  
const [dd, setDd] = useState([]);

const [likeArr, setLikeArr] = useState(Array.from({length: 14}, () => 1)); // likeArr 배열 선언 ( 배열에 들어있는 변수들의 초기값은 296 으로 )

const [cartList, setCartList] = useState({price: 0});
const [display2, setDisplay2] = useState(false);

const addCart = (a)=> {
  let arr = [];

  for(let i = 0;i<coffeeList.coffeeList.length;i++){
   if(a === coffeeList.coffeeList[i].id){
      arr.push(coffeeList.coffeeList[i]);
    }
   
  }

  setCartList(...arr);

}

const plusLike = (i) => {
  let _likeArr = [...likeArr];    //[296, 296, 296, 296, 296, 296...]
  let element = document.getElementsByClassName("fa-heart");

  if(_likeArr[i] == 1){   // 배열에서 인덱스 i인 제품의 좋아요의 값이 296이니까 +1
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
  
  for(let i =0 ; i < coffeeList.coffeeList.length;i++){
    list.push(
        <>
            <li className='b_flexList' onClick={()=>show(i)} key={coffeeList.coffeeList[i].id}>
              <img src={coffeeList.coffeeList[i].url} alt={coffeeList.coffeeList[i].id}  />
              <div className="clickMe" style={{disply:"none"}}>
                ClickMe! <i class="fa-regular fa-hand-pointer"></i>
              </div>
              <p className='text-center'>{coffeeList.coffeeList[i].title}</p>
            </li>  
          <div className='b_descBox' style={{display: dd[i]}}>
              <ul className='b_desc p-0 m-0' id={"b_descBox_"+[i]}>
                <li>{coffeeList.coffeeList[i].title}</li>
                <li className="w_li">{coffeeList.coffeeList[i].desc}</li>
               
                <li className="w_li2">매장 상황에 따라 판매하지 않을 수도 있습니다.</li>
                <li className='b_icon'>
                  <i class="fa-regular fa-heart" onClick={()=>plusLike(i)} style={{color:"#fa6464", cursor:"pointer"}}><span style={{color:"black",display:"inline-block", paddingLeft:"5px"}}></span></i>
                  <i class="fa-solid fa-cart-arrow-down" id={coffeeList.coffeeList[i].id} style={{color:"skyblue", cursor:"pointer"}} onClick={()=>{addCart(coffeeList.coffeeList[i].id)}}></i>
                </li>
              </ul>
            </div>
        </>
     )

  }
  return (
      <>
      <RLayout display2={display2} setDisplay2={setDisplay2}/>
      <B_Cart bb={cartList}/>
      <GoTop/>
      <JW_Cart2 jw={cartList} display2={display2}/>
      <div className='b_imgbox'> 
        <img src="image/banner_coffee.jpg" className="banner-img"alt="banner_coffee"/>
        <span className="banner_coffee_text">CHK Cafe만의 특별한 로스팅으로<br/><br/> 신선한 커피를 즐겨보세요.</span>
        </div>
    <div className="b_container">
          <ul className='b_Nflex b_lnb'>
            <li>Coffee</li>
          </ul> 
          <br className='line' />
      <ul className='b_flex p-0 m-0'>
          {list} 
      </ul> 
    </div>
      <Footer/>
      </>
      

  )
}

export default Coffee