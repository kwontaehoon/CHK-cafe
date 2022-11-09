import React, {useState, useEffect} from 'react'
import axios from 'axios'


// https://dev-seolleung2.netlify.app/Final%20Project/FinalProject-KakaoLogin/
const Auth2 = () => {

    const REST_API_KEY ="1ab930298baa3406dee898231822f512";
    const REDIRECT_URI = "http://3.36.98.240";
    // "http:/loaclhost:3000"
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const REACT_APP_KAKAO_CLIENT_SECRET = "S20zCpXbh8zpkAq1eg6OTBKVlC7ubEoP";

    const code = new URL(window.location.href).searchParams.get("code");

    console.log('code: ', code);

    const [token, setToken] = useState([]);

    useEffect(()=> {
      async function a(){
        console.log('a실행');
        const response = await axios.get(`/api/test?code=${code}`);
        console.log('response: ', response.data.token);
        setToken(response.data.token);
      }
      a();
    })

    // if(token !== null){
    //   localStorage.setItem('token', token.access_token);
    // }
    
  return (
    <div>Auth2</div>
  )
}

export default Auth2