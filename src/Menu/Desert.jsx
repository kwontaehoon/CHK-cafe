import React,{useState} from 'react'
import './menu.css';
import desertList from './MenuList.json';
import RLayout from './RLayout';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import B_Cart from './B_Cart';
import GoTop from './GoTop';
import JW_Cart2 from './JW_Cart2';
import Footer from './Footer';


const Desert = () => {
  const [dd, setDd] = useState([]);
  const [likeArr, setLikeArr] = useState(Array.from({length: 14}, () => 296)); // likeArr 배열 선언 ( 배열에 들어있는 변수들의 초기값은 296 으로 )
  const [display2, setDisplay2] = useState(false);
  const [cartList, setCartList] = useState({price : 0});
  
  const addCart = (a)=> {
    let arr = [];
    for(let i = 0;i<desertList.desert.length;i++){
      if(a === desertList.desert[i].id){
        arr.push(desertList.desert[i]);
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
    for(let i =0 ; i < desertList.desert.length;i++){
      list.push(
          <>
              <li className='flexList-dessert' onClick={()=>show(i)} key={desertList.desert[i].id}>
                <img src={desertList.desert[i].url} alt={desertList.desert[i].id}  />
                <div className="clickMe" style={{disply:"none"}}>
                ClickMe! <i class="fa-regular fa-hand-pointer"></i>
              </div>
                <p className='text-center'>{desertList.desert[i].title}</p>
              </li>  
            <div className='b_descBox' style={{display: dd[i]}}>
                <ul className='b_desc' id={"b_descBox_"+[i]}>
                  <li>{desertList.desert[i].title}</li>
                  <li className="w_li">{desertList.desert[i].desc}</li>
                 
                  <li className="w_li2">매장 상황에 따라 판매하지 않을 수도 있습니다.</li>
                  <li className='b_icon'>
                    <i class="fa-regular fa-heart" onClick={()=>plusLike(i)} style={{color:"#fa6464", cursor:"pointer"}}><span style={{color:"black",display:"inline-block", paddingLeft:"5px"}}></span></i>
                    <i class="fa-solid fa-cart-arrow-down" id={desertList.desert[i].id} style={{color:"skyblue", cursor:"pointer"}} onClick={()=>{addCart(desertList.desert[i].id)}}></i>
                  </li>
                </ul>
              </div>
          </>
       )
  
    }

  return (
   <>
   <RLayout display2={display2} setDisplay2={setDisplay2}/>
   <B_Cart bb={cartList}  />
   <GoTop/>
   <JW_Cart2 jw={cartList} display2={display2}/>
   <div className='b_imgbox'> 
          <img src="image/dessetImg.png" alt="001" />
          <span className='banner_dessert_text'>엄선된 최고의 재료만을 사용해서 만든 <br></br><br></br>CHK만의 케이크를 드셔보세요!</span>
        </div>
 <div className="b_container">
 <ul className='b_Nflex b_lnb'>
         <li><Link to="/desert">Cake</Link></li>
         <li><Link to="/bread">Bread</Link></li>
         <li><Link to="/mini">Mini Dessert</Link></li>
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

export default Desert