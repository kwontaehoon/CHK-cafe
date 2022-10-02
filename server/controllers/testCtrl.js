const connection = require('../config');
const axios = require('axios');

const testCtrl = {
    getInfo: async(req, res)=>{
        const client_id = "1ab930298baa3406dee898231822f512";

        async function a(){
            const response = await axios.post(`https://kauth.kakao.com/oauth/logout?client_id=${client_id}&logout_redirect_uri=http://loacalhost:3000`, {
            });
            res.send(200, {"token": response.data});
          }
          a();
        res.send('test page');
        }
}

module.exports = testCtrl