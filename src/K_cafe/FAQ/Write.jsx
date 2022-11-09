import React, {useState} from 'react'
import styled from "styled-components"

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

const Write = () => {

    const [state, setState] = useState(); // text 입력시 변환된 text 바로 출력

    const kakao_writer = localStorage.getItem('code');
    console.log(kakao_writer);

    const test = (e) => {
        console.log(e.target.value);
        setState(e.target.value);
    }
   

  return (
    <Container>
        <Header>글 쓰기</Header>
        <form action={`/api/board?kakao=${kakao_writer}`} method="get" encType='multipart/form-data'>
        <Main>
            <Title>
                <input type="text" name="title" placeholder='제목' onChange={test}
                style={{
                    border: "none",
                    height: "80px",
                    width: "100%",
                    fontSize: "30px",
                    }}></input>
            </Title>
            <Content>
                <input type="text" name="content"
                style={{
                    width: "100%",
                    height: "600px",
                    paddingBottom: "570px"
                }}></input>
            </Content>
            <ImageAdd>
                <input type="file" name="image" placholder="이미지"></input>
            </ImageAdd>
        </Main>
        <Fotter><input type="submit" value="제출하기"></input></Fotter>
        </form>
    </Container>
  )
}

export default Write