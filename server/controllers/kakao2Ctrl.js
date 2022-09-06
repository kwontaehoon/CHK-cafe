const axios = require('axios');
const connection = require('../config');

const kakao2Ctrl = {
    getInfo: async(req, res)=>{
        console.log('kakao2입니다.');

        let grant_type = "authorization_code";
        const client_id = "1ab930298baa3406dee898231822f512";
        const code = req.query.code;
        console.log('code: ', code);
    
//     async function a(){
//       const response = await axios('http://date.jsontest.com');
//       console.log(response.data);
//       res.send(200, {"rows": response.data});
// }
// a();

async function a(){
  const response = await axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=http://localhost:3000/kakao/callback&code=${code}`, {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  });
  res.send(200, {"token": response.data});
}
a();

}
}


module.exports = kakao2Ctrl