import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import {Row, Col} from 'reactstrap'
import { Link, useParams } from 'react-router-dom'
import cookies from 'react-cookies'
import axios from 'axios'
import tt  from './base.png'

const Container = styled.div`
  width: 80%;
  margin: auto;
  background-color: white;
  position: relative;
  top: 0px;
`
const Header = styled.div`
  border: 1px solid black;
  height: 50px;
  display: flex;
`
const View2_title = styled.div`
  flex: 0 0 80%;
  padding: 15px;
`
const Write = styled.div`
  flex: 0 0 20%;
  display: flex;
  align-items: center;
  justify-content: end;
`
const Main = styled.div`
  display: flex;
`
const Main_left = styled.div`
  border: 1px solid black;
  height: 800px;
  padding: 10px;
  overflow: scroll;

  @media screen and (max-width: 768px) {
    display: none;    
}
`
const CurrentBox = styled.div`
  height: 200px;
  margin-bottom: 20px;
  background-image: url('/image/K_image/coffee9.jpg');
  background-size : cover;
  background-position: center;
`

const CurrentWriting = styled.div`
  font-size: 13px;
  padding: 10px;
  margin-bottom: 20px;
  
  div{
    overflow: hidden;
  }
`

const DD = styled.div`
  font-size: 14px;
`
const Main_right = styled.div`
  border: 1px solid black;
  height: 800px;
  padding: 10px;
  overflow: scroll;
`
const Top1 = styled.div`
  height: 50px;
  font-size: 30px;
  display: flex;
`
const Top1_left = styled.div`
  flex: 0 0 88%;
`
const Top1_right = styled.div`
  flex: 0 0 12%;
  font-size: 15px;

  button{
    width: 80%;
    height: 30px;
  }
`
const Top2 = styled.div`
  height: 30px;
  display: flex;
`
const Top2_left = styled.div`
  flex: 0 0 88%;
  display: flex;
`
const Top2_right = styled.div`
  flex: 0 0 12%;
  font-size: 15px;
  padding-left: 5px;
`
const Middle = styled.div`
  padding-top: 20px;
  margin-bottom: 20px;
`
const Bottom = styled.div``
const Comment_Box = styled.div`
  margin-top: 100px;
  background-color: #ddd;
  padding: 10px;
`
const Comment_Top = styled.div`
  font-size: 30px;
`
const Comment_middle = styled.div`
  margin-top: 30px;
  border-bottom: 1px solid black;
`
const Comment_title = styled.div`
  display: flex;
  min-width: 30%;
  padding-right: 50px;

  div {
    cursor: pointer;
    padding-right: 20px;
  }
`
const Current = styled.div``
const Reply = styled.div``
const Register = styled.div``
const Comment_bottom = styled.div`
  margin-top: 30px;
`
const Comment = styled.div`
  margin-top: 20px;

  div{
    display: flex;
    margin-left: 10px;
  }
`
const Score = styled.div`
  background-color: pink;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-right: 3px;
`

const View2 = () => { 

  // const info = useLocation().state;
  // state를 쓰면 댓글을 등록하고 다시 view2로 올때 state 정보를 받지 못한다.
  // board_info가 담긴 state 정보는 제목을 클릭해야 넘어오기 때문이다.

  const { id } = useParams(); // useParams를 통해 쿼리스트링을 가져온다.

  useEffect(()=>{
    console.log('view2 useEffect');
    async function a(){
      const response = await axios.post(`/api/comment/${id}`);
      setComment_info(response.data.rows.reverse());
    }

    async function b(){
      const response = await axios.get('/api/board');
      setInfo(response.data.rows.reverse());
    }
    async function c(){
      const response = await axios.get('/api/login');
      setMember_info(response.data.rows.reverse());
    }
    a();
    b();
    c();
    }, []);

  const [info, setInfo] = useState([]);
  const [comment_info, setComment_info] = useState([]); // 댓글 테이블 정보
  const [revise, setRevise] = useState('none'); // 수정 | 삭제 유무
  const [member_info, setMember_info] = useState([]);

  const List = () => {
    const arr2 = [];
    let rank = '';
    info.map((x, index)=>{
      member_info.map(i => {
      if(info.length - parseInt(id) === index && i.id === x.writer){
        console.log('view2 image: ', x.image);
        switch(true){
          case i.score < 200 : rank = 1; break;
          case i.score > 500 : rank = 2; break;
          default : rank = 3; break;
        }

        arr2.push(
          <DD key={x.id}>
            <Top1>
              <Top1_left>{x.title}</Top1_left>
              <Top1_right><Link to="/membership/faq/board/1"><button>목록으로</button></Link></Top1_right>
            </Top1>
            <Top2>
              <Top2_left><Score>{rank}</Score>{x.writer}&nbsp; | &nbsp;{x.date}</Top2_left>
              <Top2_right style={{display: revise}}><Link to="/membership/faq/modify" state={{"info": info, "id": id}}>수정</Link> | <span onClick={() =>Delete(x.id)}>삭제</span></Top2_right>

              {/* <a href={`/api/board?id=${x.id}&delete=true`}>삭제</a> */}
            </Top2>
            <Middle>{x.content}</Middle>
            <Bottom><img src={x.image} width="300px" height="200px" alt="" onError={base_image}></img></Bottom>
          </DD>
        )
      }
    })
      if(x.writer === cookies.load('key')){;
        setRevise('block');
      }
    })
    return arr2;
  }

  const List2 = () => {
    let arr = [];
    let rank = '';
    comment_info.map(i => {
      member_info.map(x => {
        if(i.writer === x.id){
          switch(true){
            case x.score < 200 : rank = 1; break;
            case x.score > 500 : rank = 2; break;
            default : rank = 3; break;
          }
      arr.push(
        <Comment key={i.id}>
          <div><Score>{rank}</Score>{i.writer} &nbsp;|&nbsp; {i.date}</div>
          <div style={{background: "skyblue", display: "inline-block", marginLeft: "20px", fontSize: "15px"}}>{i.content}</div>
        </Comment>
      )
        }
        })
    })
    return arr;
  }

  const List3 = () => { // 최신 글
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

  const base_image = (e) => {
    e.target.src = tt;
  }
  const Delete = (e) => {
    console.log('kwon');
    if(window.confirm('삭제하시겠습니까??') === true){
      console.log('삭제합니다');
      window.location.href=`/api/board?id=${e}&delete=true`;
    }
  }

  return (
    <Container>
        <Header>
          <View2_title>CHK 게시판 ^_^</View2_title>
          <Write><Link to={"/membership/faq/write"}><button>글 작성</button></Link></Write>
        </Header>
        <Row>
        <Main>
          <Col md="3">
            <Main_left>
              <CurrentBox />
              <div>최신 글</div>
              <CurrentWriting>
                <List3 />
              </CurrentWriting>
            </Main_left>
          </Col>
          <Col md="9" xs="12">
            <Main_right>
              <List />
              <Comment_Box>
                <Comment_Top>댓글 {comment_info.length}</Comment_Top>
                <form style={{marginTop: "20px"}} action={`/api/comment?id=${id}`} method='post'>
                  <input type="text" name="content" style={{width: "87%", height: "100px"}}></input>
                  <input type="submit" value="등록" style={{width: "13%", height: "100px"}}></input>
                </form>
                <Comment_middle>
                  <Comment_title>
                  <Current>최신순</Current>
                  <Reply>답글순</Reply>
                  <Register>등록순</Register>
                  </Comment_title>
                </Comment_middle>
                <Comment_bottom>
                  <List2 />
                </Comment_bottom>
              </Comment_Box>
            </Main_right>
          </Col>
        </Main>
        </Row>
    </Container>
  )
}

export default View2