import React,{useState,useEffect,useLocation} from 'react'
import $ from 'jquery';
import cookies from 'react-cookies'



const Cart = (props) => {

const [add,setAdd] = useState(Array.from({length : 14},()=> 1));

const [price,setPrice] = useState(Array.from({length : 14},()=> 0));

const [cost,setCost] = useState(0);

const [sum,setSum] = useState(0);

const [dis,setdis] = useState(true);



useEffect(()=>{
  setPrice(props.price)
  setCost(props.price);
  setSum(props.total)
},[props]);



// 장바구니 토글
const hide =()=>{
  $('.b_total').css('display','none');
  $('.b_cart').css('opacity','1');
}
// 체크박스 전체 선택
const check = () =>{
  let checked = $('.allcheck').is(':checked');
  if(checked){
  $('input:checkbox').prop('checked',true)
}else $('input:checkbox').prop('checked',false)
}
// 전체 삭제 버튼
const remove = ()=>{
  if($('.allcheck').is(':checked')){
    $('tr#list').remove();
    setSum(sum - sum);
    $('.b_cimg').remove();
    $('.b_textTotal').remove();
  }
}
// 총 금액 확인 버튼 

const sumConfirm = ()=>{

  if(!window.confirm('주문하시는 매장은 '+ $("select[name=store] option:selected").text() +'이며, 총 결제 금액은 '+ sum +'원 맞으십니까?')){
    alert("결제 취소");
  }else if(!window.confirm == false){
  
    $('tr#list').remove();
    setSum(0)
      alert("결제 완료");
  }
}




// 상품추가
let list = [];
let _price = [...price];


let a = props.title;
let b = props.img;


for(let i=0;i<props.title.length;i++){  
  let _add = [...add];

// props.title에서 hot일 경우를 적용하기위해 잘라냄
let option = a[i].indexOf("(ICE)"); // -1
let tea = a[i].indexOf("티"); // 아이스티랑 흑당버블티 옵션
let smothie = a[i].indexOf("스무디");
let juice = a[i].indexOf("주스")
let ade = a[i].indexOf("에이드");
let dessertOption = b[i].indexOf("desert");
let bread = a[i].indexOf("샌드위치");
let bagle = a[i].indexOf("베이글");
let bread2 = a[i].indexOf("크로크무슈");



// Coffee 옵션 추가
if(option == -1){
  $('.icetype').css('display','none');
  $('.bread').css('display','none');
  $('.water').css('display' ,'block');
  $('.sugar').css('display','none');


}else if(option >= 0){
 $('.water').css('display','none'); 
 $('.bread').css('display','none');
$('.icetype').css('display','block')
$('.sugar').css('display','none');
 
}

// Non Coffee 옵션추가
if(tea >= 3){
  // 흑당버블티와 아이스티는 아이스만 가능
  $('.water').css('display','none');
  $('.water-1').css('display','none'); 
  $('.bread').css('display','none');
  $('.sugar').css('display','none');
 $('.icetype').css('display','block');
}

if(juice > 0 || ade > 0 || smothie > 0){
  $('.water').css('display','none');
  $('.water-1').css('display','none'); 
  $('.bread').css('display','none');
  $('.sugar').css('display','block');
}

// Dessert 옵션추가
if(dessertOption > 0){
  $('.water').css('display','none'); 
  $('.icetype').css('display','none');
  $('.water-1').css('display','none');
  $('.bread').css('display','none');
  $('.sugar').css('display','none');

}
if( bagle > 0 || bread > 0 || bread2 == 0){
  $('.sugar').css('display','none');
  $('.bread').css('display','block');
  
}

const plus =()=>{
    if(_add[i] >= 0){
      _add[i] += 1
      setAdd(_add);
    }
    _price[i] = (props.price[i] * _add[i]);
    setPrice(_price);
    setSum(sum + cost[i]);
  }
  const minus =()=>{
    if(_add[i] > 0){
      _add[i] -= 1
      setAdd(_add);
   }
   _price[i] = price[i] - cost[i];
    setPrice(_price);
    setSum(sum - cost[i]);
 }

  list.push(
    <>
    <tr key={props.title.length} id="list">
    <td><input type="checkbox"  className='check' /></td>
    <td>
      <div className='b_cimgs'>
     <img src={props.img[i]} alt="cart" style={{width:"150px",height:"150px"}} />
      <p>{props.title[i]}</p> 
      </div>
      </td>
      <td>
        <input type="button" value="-" onClick={minus}/>
         <span> {add[i]} </span>
         <input type="button" value="+"  onClick={plus} />
        </td>
        <td className='b_option'>
          <form className='pt-2 water-1'>
          <input type="radio" name='water' id='many'value='many' /><label htmlFor="/">물 적게</label>
          <input type="radio" name='water' id='reguler'value='reguler' /><label htmlFor="/">물 보통</label>
          <input type="radio" name='water' id='little'value='little' /><label htmlFor="/">물 많이</label>
          </form> 
          <form className='pt-2 water'>
          <input type="radio" name='water' id='many'value='many' /><label htmlFor="/">덜 뜨겁게</label>
          <input type="radio" name='water' id='reguler'value='reguler' /><label htmlFor="/">적당히</label>
          <input type="radio" name='water' id='little'value='little' /><label htmlFor="/">많이 뜨겁게</label>
          </form> 
          <form className='pt-2 icetype'>
          <input type="radio" name='icetype' id='many'value='many' /><label htmlFor="/">각얼음</label>
          <input type="radio" name='icetype' id='reguler'value='reguler' /><label htmlFor="/">간얼음</label>
          </form> 
          <form className='pt-2 icetype'>
          <input type="radio"name='ice' id='many'value='many' /><label htmlFor="/">얼음 많이</label>
          <input type="radio"name='ice' id='reguler'value='reguler' /><label htmlFor="/">얼음 보통</label>
          <input type="radio"name='ice' id='little'value='little' /><label htmlFor="/">얼음 적게</label>
          </form>
          <form className='pt-2 bread'>
          <input type="radio"name='bread' id='many'value='many' /><label htmlFor="/">따뜻하게 데우기</label>
          <input type="radio"name='bread' id='reguler'value='reguler' /><label htmlFor="/">데우지않고 포장</label>
          </form>
          <form className='pt-2 sugar'>
          <input type="radio"name='sugar' id='little'value='many' /><label htmlFor="/">덜 달게</label>
          <input type="radio"name='sugar' id='reguler'value='reguler' /><label htmlFor="/">보통</label>
          <input type="radio"name='sugar' id='little_sweeter'value='reguler' /><label htmlFor="/">조금 달게</label>
          <input type="radio"name='sugar' id='many'value='reguler' /><label htmlFor="/">많이 달게</label>
          </form>
        </td>
          <td>{price[i]}원</td>
      </tr>
    </>
  )
}


return (
    <>
      <div className="b_total overflow-scroll" style={{display:dis == false ?"block":"none"}}>
        <div className='d-flex justify-content-between align-item-center' >
        <h3 className='b_name m-3 '>🌹 {cookies.load('key')}님의 장바구니 🌹</h3>
        <p className='hide' onClick={hide}> X </p>
       </div>
        <table className='b_cartListBox'>
          <tr className='cartNames'>
            <td><input type="checkbox" className='allcheck' onClick={check}></input></td>
            <td>상품</td>
            <td>수량</td>
            <td>옵션</td>
            <td>가격</td>
          </tr>
            {list}   
          </table>
          <form action="/" className='text-center pt-3'>
              <span className='text-center mx-5'>총 가격 : {sum}원</span>
            <select name="store" id="store" className='text-center mx-5' >
              <option value="default">-----매장을 선택하세요-----</option>  
              <option value="김포 장기점">김포 장기점</option>
              <option value="김포 걸포점">김포 걸포점</option>
              <option value="일신 대화점">일산 대화점</option>
              <option value="일산 정발산점">일산 정발산점</option>
              <option value="서울역점">서울역점</option>
              <option value="홍대입구역점">홍대입구역점</option>
            </select>  
          
          </form>  
  
          <div className='d-flex justify-content-around mt-5'>
          <span className='btn btn-warning' onClick={remove}>전체 삭제</span>  
            <span className='btn btn-warning' onClick={sumConfirm}>주문하기</span>
           
          </div> 
          
          </div>
  </>
  )
}

export default Cart