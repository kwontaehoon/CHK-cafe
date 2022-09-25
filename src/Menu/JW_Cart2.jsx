import React, { useState, useEffect } from 'react'
import './jw_cart.css';
import $ from 'jquery';

const JW_Cart2 = (props) => {

  const info = props.jw; // 받아온 것 = info

  const [number, setNumber] = useState(Array.from({ length: 14 }, () => { return 1 })); //14개의 방, 수량의 기본값은 1
  const [arr, setArr] = useState([]); //list 전체를 배열에 넣기
  const [total, setTotal] = useState(0);  //총합의 기본 값=0


  const updateTotal = () => {   //총합 숫자 셋팅 함수
    let ppriceArr = document.getElementsByClassName("pprice"); //문서의 클레스 pprice를 "배열"에 싹 넣기 (변수 꼭 선언되야 배열에 넣는거임)
    let chTotal = 0;  //기본 총합 선언 = 0
    let _pprice;  //변수만 만듬
    
    for (let i = 0; i <= ppriceArr.length; i++) {
      _pprice = ppriceArr[i].innerText;   //ex> _pprice =  "1000 \"
      _pprice = _pprice.replace(" \\", "");  //.replace( , ) = 앞에있는거를 뒤로 바꿈 => "1000" (문자)
      chTotal += parseInt(_pprice);     //parseInt(-) => 1000(숫자)
      setTotal(chTotal);
    }
  }

  useEffect(() => {
    arr.push(info); //배열의 끝에 info를 넣는다. 
  }, [info]);

  // + 버튼 누르면 증가
  const onIncrease = (e) => {   //i.id를 매개변수 e로 가져오기
    let test2 = [...number];  //수량 복사 
    test2[e] += 1;   //``각 인덱스의 수량이 1씩 증가
    setNumber(test2);  //화면에 출력됨    
    setTimeout(() => { updateTotal(); })
  }

  // - 버튼 누르면 감소
  const onDecrease = (e) => {
    let test2 = [...number];
    if (number[e] === 1) {   //수량이 1일때
      alert('최소 주문수량은 1개입니다. 주문을 완전 취소하시려면 "삭제"를 눌러주세욧!');
      return;
    }
    test2[e] -= 1;
    setNumber(test2);
    setTimeout(() => { updateTotal(); })
  }


  //장바구니에 담겨진 ul들
  const List = () => {

    const list = [];

    //list 배열안에 push
    for (let i of arr) {
      const pprice = i.price * number[i.idd];

      const del = (proNum, title) => {
        if(window.confirm("장바구니에서 정말 삭제하시겠습니까?") == true){    //확인
              const test = number[i.idd];
              const proPri = $('.j_total').text();
              const totalVal= parseInt(proPri)-(proNum*test);  
              $('.j_total').text(totalVal);
              
              const delPro = document.getElementById(title);
              delPro.remove();
              
            }else{   //취소
                return false;
            }
          
        }
      
      list.push(
        <>
          <ul className="h_pick-pd" id={i.title}>
            <li><img src={i.url} alt="product" /></li>
            <li className='proTitle'>{i.title}</li>
            <li className='pprice'>{pprice} \</li>  
            <li>수량: <button className="uuu" onClick={() => onIncrease(i.idd)}>+</button> {number[i.idd]} <button onClick={() => onDecrease(i.idd)}>-</button></li>
            <li><button className="h_cancle"  onClick={() => del(i.price,i.title)}> 삭 제 </button></li>
          </ul>
        </>
      )
    }
    list.shift();   //배열의 맨 앞에 값을 제거
    setTimeout(() => { updateTotal()})
    return list;

  }
  //결제페이지 넘어가기
  const goPayment =  () => {
    alert('죄송합니다. 지금은 서버폭주로 주문이 어렵습니다. 잠시 후 다시 시도 바랍니다^_^');
  }

  // 창 닫기
  const xmark = () => {
    if ($('#jwCart').is(":visible")) {
      $('#jwCart').hide();
    }
  }

  //모두 비우기
  const allDel = () => {
    $('.h_pick').empty();
    $('.j_total').text(0);
    return;
  }

  return (
    <>
    <div id="jwCart" style={{ display: props.display2 ? "flex" : "none" }}>
      <div className='h-cart'>
        <div className="h_box">
          <div className="h_box-top">
            <span>장바구니에 담기</span>
            <span className="h_xmark" onClick={xmark}><i class="fa-solid fa-xmark"></i></span>
          </div>
          <div className="h_box-in">

            <div className="h_pick">
              <List />
            </div>

          </div>
          <div className="h_box-footer">
            <p>총합 : <span className='j_total'>{total}</span> \</p>
            <button className="h_box-f  ooter_bt" onClick={goPayment} style={{ backgroundColor: "#fa6464", marginRight: "1%" }}>바로 결제하기</button>
            <button className="h_box-footer_bt" onClick={xmark} style={{ backgroundColor: "rgba(250, 250, 100)" }}>계속 주문하기</button>
            <button className="h_box-footer_bt" onClick={allDel} style={{ backgroundColor: "rgba(250, 250, 100)" }}>모두 비우기</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default JW_Cart2