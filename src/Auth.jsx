import React, {useState, useEffect} from 'react'
// import { useCookies } from "react-cookie";


const Auth = () => {


    const [info, setInfo] = useState([]);

    const {Kakao} = window;

    const code = new URL(window.location.href).searchParams.get("code");

    try {
        if (Kakao) {
            Kakao.init('6cc73febe66d6d7f80acd90ecd7d4d85');
        };
    } catch(e) {}; // 한번만 실행되야해서 그리고 밑에 코드에 kakao.init 필요해서 try catch문 사용

    useEffect(()=> {

    Kakao.Auth.login({
        scope: 'profile_nickname, profile_image', // 동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣습니다.
        success: function(response) {
            console.log('response: ', response) // 로그인 성공하면 받아오는 데이터
            Kakao.API.request({ // 사용자 정보 가져오기 
                url: '/v2/user/me',
                success: (res) => {
                    const kakao_account = res.kakao_account;
                    console.log('kakao_account: ', kakao_account);
                    const nickname = kakao_account.profile.nickname;
                    const profile = kakao_account.profile.profile_image_url;
                    // document.cookie = `key=${nickname}`;
                    localStorage.setItem('code', nickname);
                    localStorage.setItem('token', response.access_token);
                    let member = [nickname, profile];
                    setInfo(member);
                    window.location.href = `/api/kakao?id=${nickname}`;
                }
            });
            // window.location.href='/ex/kakao_login.html' //리다이렉트 되는 코드
        },
        fail: function(error) {
            console.log(error);
        }
    });
}, [])

console.log('token: ', Kakao.Auth.getAccessToken());

function kakaoLogout() {
    if (window.Kakao.Auth.getAccessToken()) {
        window.Kakao.API.request({
          url: '/v1/user/unlink',
          success: function (response) {
            console.log(response);
          },
          fail: function (error) {
            console.log(error);
          },
        });
        alert('로그아웃이 완료되었습니다.');
        window.location.href='/'
      }


    // Kakao.API.request({
    //     url: '/v1/user/unlink',
    //     success: function(response){
    //         console.log(response);
    //     }
    // })

    // Kakao.Auth.logout(function(response) {
    //     removeCookie('key', {path: '/'});
    //     removeCookie('rememberText');
    //     removeCookie('webid',  {domain: 'http://.kakao.com'});
    //     window.location.href='/api/logout?kakao=true'
    // });
};

  return (
    <>
        {/* <div>{code}</div> */}
        <div>{info[0]}</div>
        <button onClick={kakaoLogout}>로그아웃</button>
    </>
  )
}

export default Auth