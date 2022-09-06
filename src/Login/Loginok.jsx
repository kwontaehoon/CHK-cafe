import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: auto;
  border: 3px solid black;
  width: 1000px;
  height: 300px;
  margin-top: 150px;

`

const Loginok = (props) => {

  const {Kakao} = window;

  const List = () => {
    const a = localStorage.getItem('code');

    if(a){
      return <button onClick={kakaoLogout2}>카카오 로그아웃</button>
    } return <button onClick={logout}>로그아웃</button>
  }

  const logout = () => {
    console.log('logout');
    if(props.token !== true){
      window.location.href=`/api/logout`;
    }else {
      localStorage.removeItem('token');
      window.location.href='/';
    }
  }
  // window.location.href=`/api/logout?kakao=${2}`;

  function kakaoLogout() { // sdk
    if (Kakao.Auth.getAccessToken()) {
        Kakao.API.request({
          url: '/v1/user/unlink',
          success: function (response) {
            console.log(response);
          },
          fail: function (error) {
            console.log(error);
          },
        });
        localStorage.removeItem('token');
        alert('로그아웃이 완료되었습니다.');
        window.location.href='/'
      }
};

  function kakaoLogout2(){ // REST
    console.log(localStorage.getItem('token'));
    window.location.href = '/api/test';
  }

  return (
    <Container>
      <List />
    </Container>
  )
}

export default Loginok