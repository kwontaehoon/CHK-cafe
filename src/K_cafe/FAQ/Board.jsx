import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import {Row, Col} from 'reactstrap'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import cookies from 'react-cookies'
import base from './base.png'
import Rank from './Rank'

const Container = styled.div`
  width: 80%;
  height: 600px;
  margin: auto;
  background-color: white;
  position: relative;
  top: 0px;
`
const Header = styled.div`
  height: 50px;
  display: flex;
  border: 1px solid black;
`
const BB = styled.div`
  flex: 0 0 80%;
  padding: 15px;
`
const Score = styled.div`
  background-color: pink;
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 5px;
  margin-right: 3px;
  line-height: 22px;
  border: 1px solid grey;
`
const Write = styled.div`
  flex: 0 0 20%;
  display: flex;
  align-items: center;
  justify-content: end;
`
const Main = styled.div`
  height: 1000px;
  display: flex;
`
const Main_left = styled.div`
  height: 910px;
  border: 1px solid black;
  padding: 10px;

  @media screen and (max-width: 768px) {
    display: none;    
}
`
const CurrentWriting = styled.div`
  font-size: 13px;
  padding: 10px;
  margin-bottom: 20px;
  
  div{
    overflow: hidden;
  }
`
const CurrentComment = styled.div`
  font-size: 13px;
  padding: 10px;
  margin-bottom: 20px;
  
  div{
    overflow: hidden;
  }
`
const Main_right = styled.div`
  height: 860px;
  border: 1px solid black;
  overflow: hidden;
`
const Top = styled.div`
  height: 50px;
  border: 1px solid black;
  display: flex;
`
const Top_left = styled.div`
  flex: 0 0 20%;
  display: flex;
  align-items: center;
`
const Top_right = styled.div`
  flex: 0 0 80%;
  display: flex;
  align-items: center;
  justify-content: end;
`
const Middle = styled.div`
  height: 800px;
  overflow: scroll;
`
const Bar = styled.div`
  height: 50px;
  border: 1px solid #ddd;
  display: flex;
`
const Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  flex: 0 0 7%;

  @media screen and (max-width: 768px) {
    font-size: 12px;    
}
`
const Content = styled.div`
  flex: 0 0 63%;
  padding: 10px;
`
const Title = styled(Number)`
  cursor: pointer;
  flex: 0 0 63%;
`
const Writer = styled(Number)`
  flex: 0 0 15%;
  overflow: hidden;
`
const Date = styled(Number)`
  flex: 0 0 15%;
`
const Notice_Bar = styled.div`
  display: flex;
  height: 40px;
`
const Notice1 = styled.div`
  flex: 0 0 7%;
  text-align: center;
  line-height: 40px;
  background-color: #ddd;
`
const Notice2 = styled(Notice1)`
  flex: 0 0 63%;
  text-align: left;
  font-size: 20px;
  padding-left: 10px;
  text-align: center;
`
const Notice3 = styled(Notice1)`
  flex: 0 0 30%;
`
const Bottom = styled.div`
  border: 1px solid black;
  height: 50px;
  display: flex;
  justify-content: center;

  div{
    width: 30px;
    border: 1px solid #ddd;
    margin: 10px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
  }
`
const CurrentBox = styled.div`
  height: 200px;
  margin-bottom: 20px;
  background-image: url('/image/K_image/coffee9.jpg');
  background-size : cover;
  background-position: center;
`

const Board = () => {

  const [info, setInfo] = useState([]); // 게시판 글
  console.log('info: ', info);
  const [info2, setInfo2] = useState([]); // 한 페이지에 글 15개씩(서버에서 필터하지않고 프론트에서 필터)
  console.log('info2: ', info2);
  const [comment_info, setComment_info] = useState([]);
  const [infolength, setInfolength] = useState(info.length); // 게시판 길이
  const [sort, setSort] = useState(false); // 게시판 정렬
  const [number, setNumber] = useState([]); // 페이지넘어갈때 배경색깔
  const [search, setSearch] = useState(); // search
  const [rank_display, setRank_display] = useState(false); // 등급 관련 안내 display
  const [notice_info, setNotice_info] = useState([]); // 공지사항 정보
  const [member_info, setMember_info] = useState([]); // 멤버 정보

  const localstorage = localStorage.getItem('token');
  
  let { id } = useParams();
  // 쿼리스트링 page


  useEffect(()=>{
    console.log('useEffect');
    async function a(){
      const response = await axios.get('/api/board/'+id);
      setInfo(response.data.rows.reverse());
      setInfolength(response.data.length);
      number[id-1] = "skyblue";

      let currentPage = 15;
      setInfo2(response.data.rows.slice(parseInt(id)*currentPage - currentPage, currentPage*parseInt(id)));
    
      // console.log('aaa: ', cookies.load('loginId'));
    }

    async function b(){
      const response = await axios.get('/api/comment');
      setComment_info(response.data.rows.reverse());
    }

    async function c(){
      const response = await axios.get('/api/notice');
      setNotice_info(response.data.rows);
    }
    async function d(){
      const response = await axios.get('/api/login');
      setMember_info(response.data.rows);
    }
    a();
    b();
    c();
    d();
    }, []);
    // useEffect 동작방식: set을 만나면 기억해뒀다가 effect 안을 다 실행하고 component를 다시 실행한다!!

    

  const List = () => {

    let arr = [];
    let rank = '';
    let count = info2.length+1;
    info2.map(i => {
      member_info.map(x => {
        if(i.writer === x.id){
          switch(true){
            case x.score < 200 : rank = 1; break;
            case x.score > 500 : rank = 2; break;
            default : rank = 3; break;
          }
      count--;
      arr.push(
        <Bar key={count}>
          <Number>{i.id}</Number>
          <Title><Link to={`/membership/faq/view/${i.id}`}>{i.title}</Link></Title>
          <Writer><Score>{rank}</Score>{i.writer}</Writer>
          <Date>{i.date}</Date>
        </Bar>
      )
        }
      })
    })
    return arr;
  }

  const List2 = () => {
    let arr = [];
    let rank = '';
    let count = info2.length+1;
    info2.map((i, index) => {
      member_info.map(x => {
        if(i.writer === x.id){
          switch(true){
            case x.score < 200 : rank = 1; break;
            case x.score > 500 : rank = 2; break;
            default : rank = 3; break;
          }
      count--;
      arr.push(
        <Bar style={{height: "200px"}} key={count}>
          <Number>{i.id}</Number>
          <Content>
            <div><Link to={`/membership/faq/view/${i.id}`}>{i.title}</Link></div>
            <div style={{color: "#ddd"}}>{i.content}</div>
            <div style={{fontSize: "12px", paddingTop: "10px", display: "flex"}}><Score>{rank}</Score>{i.writer}</div>
          </Content>
          <Writer style={{flex: "0 0 30%"}}><img src={i.image} onError={base_image} alt="" width="220px" height="180px"></img></Writer>
        </Bar>
      )
        }
      })
    })
    return arr;
  }
  
  const List3 = () => {
    if(cookies.load('key') !== undefined || localstorage !== null){
      return <Link to={"/membership/faq/write"}><button>글 작성</button></Link>
    }else {return <Link to={"/login"}><button>글 작성</button></Link>}
  }

  const List4 = () => {
    let arr = [];
    for(let i=1; i<Math.ceil(infolength/15)+1; i++){
      arr.push(
        <Link to={`/membership/faq/board/${i}`} key={i} onClick={()=>number_color(i)}><div style={{backgroundColor: number[i-1]}}>{i}</div></Link>
      )
    }
    {/* Link to로하면 새로고침이 되지않고 페이지 이동이되지만 바뀐 쿼리스트링 page는 그대로다. */}
    return arr;
  }

  const List5 = () => { // 최신 글
    let arr = [];
    let count = 0;
    for(let i of info){
      if(count !== 5){
      arr.push(
        <div key={i.id}>- {i.content}</div>
      )
      count++;
      }else break;
    }
    return arr;
  }

  const List6 = () => { // 최신 댓글
    let arr = [];
    let count = 0;
    for(let i of comment_info){
      if(count !== 5){
        arr.push(
          <div key={i.id}>- {i.content}</div>
        )
        count++;
      }else break;
    }
    return arr;
  }

  const List7 = () => {
    let arr = [];
    let count = 0;
    for(let i of notice_info){
      count++;
      arr.push(
        <Notice_Bar key={count}>
          <Notice1><img src="/image/Logo/Logo.png" width="50px"></img></Notice1>
          <Notice2><Link to={`/membership/faq/notice/${i.id}`} state={notice_info}>{i.title}</Link></Notice2>
          <Notice3>CHK</Notice3>
        </Notice_Bar>
      )
    }
    return arr;
  }

  const number_color = (e) => {
    let arr = [];
    arr[e-1] = "skyblue";
    setNumber(arr);

    let currentPage = 15;
    setInfo2(info.slice(e*currentPage-currentPage, e*currentPage));
  }

  const base_image = (e) => {
    e.target.src = base;
  }
  const search_click = (e) => {
    setSearch(e);
  }
  console.log('search: ', search);
  

  let content3;
  if(sort === false){
    content3 = <List />
  }else if(sort !== false){content3 = <List2 /> }
  
  return (
    <Container>
      <Rank rank_display={rank_display} setRank_display={setRank_display}/>
        <Header>
          <BB>CHK 게시판 ^_^</BB>
          <Write><button onClick={()=>setRank_display(!rank_display)}>등급 관련 안내</button><List3 /></Write>
        </Header>
        <Row>
        <Main>
          <Col md="3">
            <Main_left>
              <CurrentBox />
              <div>최신 글</div>
              <CurrentWriting>
                <List5 />
              </CurrentWriting>
              <div>최신 댓글</div>
              <CurrentComment>
                <List6 />
              </CurrentComment>
            </Main_left>
          </Col>
          <Col md="9" xs="12">
            <Main_right>
              <Top>
                <Top_left>
                  <button onClick={()=>{setSort(!sort)}} style={{background: sort ? "" : "skyblue"}}><i className="fa-solid fa-bars"></i></button>
                  <button onClick={()=>{setSort(!sort)}} style={{background: sort ? "skyblue" : ""}}><i className="fa-solid fa-border-all"></i></button>
                </Top_left>
                <Top_right>
                  <select style={{width: "20%", height: "30px"}}>
                    <option>제목</option>
                    <option>내용</option>
                    <option>제목+내용</option>
                  </select>
                  <span>
                    <input type="text" style={{width: "200px"}} name="id" onChange={(e) => search_click(e.target.value)}></input>
                    <button>검색</button>
                  </span>
                </Top_right>
              </Top>
              <Middle>
                <Bar style={{display: sort ? "none" : "flex"}}>
                  <Number>번호</Number>
                  <Title>제목</Title>
                  <Writer>작성자</Writer>
                  <Date>작성일</Date>
                </Bar>
                <Bar style={{display: sort ? "flex" : "none"}}>
                  <Number>번호</Number>
                  <Title>제목</Title>
                  <Writer style={{flex: "0 0 30%"}}>이미지</Writer>
                </Bar>
                <List7 />
                  {content3}
              </Middle>
            </Main_right>
            <Bottom>
                <div><i className="fa-solid fa-angle-left"></i></div>
                <List4 />
                <div><i className="fa-solid fa-angle-right"></i></div>
            </Bottom>
          </Col>
        </Main>
        </Row>
    </Container>
  )
}

export default Board