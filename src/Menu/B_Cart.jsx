import React,{useState,useEffect} from 'react'
import './menu.css';
import $ from 'jquery';
import Cart from './Cart';



const B_Cart = (props) => {

const {bb} = props;


const [price,setPrice] = useState(0);

const [total,setTotal] = useState(0);


useEffect(()=>{
  let _price = bb.price;

  setPrice(_price);
  setTotal(total + _price);
},[bb]);


const show = ()=>{
  $('.b_total').css('display','block');
  $('.b_cart').css('opacity','0');
  $('html').scrollTop(0)
}

  const [a,setA] = useState([]);
  const [b,setb] = useState([]);
  const [c, setc] = useState([]);
  
let arr = [];
let arr2 = [];
let arr3 = [];
let arrr3 = [];

arrr3.push(bb.price)
let _bb = bb;


if(_bb.id == undefined){
  
}else{
arr.push(bb.title);
arr2.push(bb.url);
arr3.push(bb.price);

a.push(arr[0]);
b.push(arr2[0]);
c.push(arr3[0]);

_bb.id = undefined;
}

const addList2 = [
  ...a,
  ...b,
  ...c
]
const list = [];

for(let i = 0;i< a.length;i++){
 

     list.push(    
          <>
          <img src={b[i]} alt="상품을 추가해주세용" key={bb.idd}/>
           <p>{a[i]}</p> 
           <p>{c[i]} 원</p>
           </>
       )
}
  return (
    <>
    <div className="b_cart" >
        <p className='b_name pt-2 pb-2'>Shopping Cart</p>
        <table className='b_cartBox'>
          <tr className='cartName'>
            <p className='text-center'>추가한 상품</p>
          </tr>
          {/* 반복구간 */}
          <tr>
            <td>
          <div className='b_cimg'>
              {list}
          </div>
        </td>
        </tr>
          {/* 반복구간 */}
        </table>
        <p className="text-center mt-3 border-top border-dark pt-3 total">Total : {total} </p>
        <p className='btn btn-primary b_link' onClick={show}>바로 구매하기</p>
      
        </div> 
       <Cart title={a} img={b} price={c} total={total} />

       </>
       
  )
}

export default B_Cart