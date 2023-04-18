export const naver = async() => {

    const CLIENT_ID = 'SEE6V1El4R5E6Bn_v4Lw';
    const STATE_STRING = 'http://localhost:3000';
    const CALLBACK_URL = 'http://localhost:3000/auth/naver/callback';

    window.location.href=`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${CALLBACK_URL}`;
}
