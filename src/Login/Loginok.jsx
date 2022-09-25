import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: auto;
  border: 3px solid black;
  width: 1000px;
  height: 300px;
  margin-top: 150px;
`
const Subcontainer = styled.div`
  height: 300px;
  justify-content: space-around;
  display: flex;
`
const Left = styled.div`
  width: 50%;
  height: 300px;
`
const Box = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`
const Circle = styled.div`
  width: 200px;
  height: 100%;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
const Right = styled.div`
  border: 1px solid black;
  width: 50%;
  height: 300px;
`

const Loginok = (props) => {

  const List = () => {
    const a = localStorage.getItem('code');
    const b = window.localStorage.getItem('profile');


    if(a){
      return (
        <Subcontainer>
          <Left>
            <Box>
              <Circle>
                <img src={b} style={{width: '200px'}}></img>
              </Circle>
            </Box>
            <Box style={{height: '100px', justifyContent: 'center'}}>
              <div>{a}</div>
            </Box>
          </Left>
          <Right><button onClick={kakaoLogout}>카카오 로그아웃</button></Right>
        </Subcontainer>
      )
    } return <button onClick={logout}>로그아웃</button>
  }

  const logout = () => {
    if(props.token !== true){
      window.location.href=`/api/logout`;
    }else {
      localStorage.removeItem('token');
      window.location.href='/';
    }
  }
  // window.location.href=`/api/logout?kakao=${2}`;

  function kakaoLogout() { // sdk
    // if (Kakao.Auth.getAccessToken()) {
    //     Kakao.API.request({
    //       url: '/v1/user/unlink',
    //       success: function (response) {
    //         console.log(response);
    //       },
    //       fail: function (error) {
    //         console.log('error: ', error);
    //       },
    //     });
    //     localStorage.removeItem('token');
    //     alert('로그아웃이 완료되었습니다.');
    //     window.location.href='/'
    //   }
    localStorage.removeItem('token');
    window.localStorage.clear();
    alert('로그아웃이 완료되었습니다.');
    window.location.href='/'
};

  function kakaoLogout2(){ // REST
    window.location.href = '/api/test';
  }

  return (
    <Container>
      <List />
    </Container>
  )
}

export default Loginok