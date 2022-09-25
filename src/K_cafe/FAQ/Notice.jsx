import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import {Row, Col} from 'reactstrap'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import tt from './base.png'

const Container = styled.div`
  width: 80%;
  height: 1000px;
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
  height: 1000px;
  border: 1px solid black;
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
const DD = styled.div`
  font-size: 14px;
`
const Main_right = styled.div`
  height: 1000px;
  border: 1px solid black;
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
`
const Middle = styled.div`
  padding-top: 20px;
  margin-bottom: 20px;
`
const Bottom = styled.div`
`

const Notice = () => {
    const { id } = useParams(); // useParams를 통해 쿼리스트링을 가져온다.

    useEffect(()=>{
      console.log('view2 useEffect');
      async function a(){
        const response = await axios.post(`/api/comment/${id}`);
        console.log('데이터받아왔니??');
        console.log(response.data.rows);
        setComment_info(response.data.rows.reverse());
      }
  
      async function b(){
        const response = await axios.get('/api/notice');
        setNotice_info(response.data.rows.reverse());
      }
      a();
      b();
      }, []);
  
    const [comment_info, setComment_info] = useState([]); // 댓글 테이블 정보
    const [notice_info, setNotice_info] = useState([]);
  
    const List = () => {
      const arr2 = [];
      notice_info.map((x, index)=>{
        if(notice_info.length - parseInt(id) === index){
          arr2.push(
            <DD key={x.id}>
            <Top1>
              <Top1_left>{x.title}</Top1_left>
              <Top1_right><Link to="/membership/faq/board/1"><button>목록으로</button></Link></Top1_right>
            </Top1>
            <Top2>
              <Top2_left>CHK&nbsp; | &nbsp;{x.date}</Top2_left>
            </Top2>
            <Middle>{x.content}</Middle>
            <Bottom><img src={x.image} width="300px" height="200px" alt="" onError={base_image}></img></Bottom>
          </DD>
          )
        }
      })
      return arr2;
    }
  
    const base_image = (e) => {
      e.target.src = tt;
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
              </Main_left>
            </Col>
            <Col md="9" xs="12">
              <Main_right>
                <List />
              </Main_right>
            </Col>
          </Main>
          </Row>
      </Container>
    )
  }

export default Notice