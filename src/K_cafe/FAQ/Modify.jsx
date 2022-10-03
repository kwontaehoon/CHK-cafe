import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import { useLocation } from 'react-router-dom'

const Container = styled.div`
    border: 1px solid black;
    width: 80%;
    height: 1000px;
    margin: auto;
`
const Header = styled.div`
    height: 120px;
    display: flex;
    align-items: center;
    font-size: 25px;
    padding-left: 30px;
    border-bottom: 1px solid black;
`
const Main = styled.div`
    width: 80%;
    margin: auto;
    height: 800px;
`
const Title = styled.div`
    border-bottom: 1px solid black;
    height: 120px;
    padding-top: 20px;
`
const ImageAdd = styled.div`
    margin-top: 50px;
`
const Content = styled.div`
    margin-top: 50px;
`
const Fotter = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: end;
`
const Modify = () => {

  const info = useLocation().state.info;
  const id = useLocation().state.id;

  useEffect(()=>{
    const arr = info.filter((x, index) => {
        if(x.id === parseInt(id)){
            return x;
        }
    });
    setModify_info(arr);
  }, []);

  const [modify_info, setModify_info] = useState([]);

  const List = () => {
    let arr = [];
    modify_info.map(x => {
    arr.push(
        <div key={x.id}>
        <Title>
              <input type="text" name="title" placeholder={x.title} onChange={aa}
              style={{
                  border: "none",
                  height: "80px",
                  width: "100%",
                  fontSize: "30px",
                  }}></input>
          </Title>
          <Content>
          <input type="text" name="content" placeholder={x.content} onChange={aa}
          style={{
              width: "100%",
              height: "600px",
              paddingBottom: "570px"
          }}></input>
      </Content>
      </div>
    )
})
    return arr;
  }

  const aa =() => {
    
  }
  
return (
  <Container>
      <Header>글 쓰기</Header>
      <form action={`/api/board?modify=true&id=${id}`} method="post" encType='multipart/form-data'>
      <Main>
          <List />
          <ImageAdd>
              <input type="file" name="image" placholder="이미지"></input>
          </ImageAdd>
      </Main>
      <Fotter><input type="submit" value="제출하기"></input></Fotter>
      </form>
  </Container>
)
}

export default Modify