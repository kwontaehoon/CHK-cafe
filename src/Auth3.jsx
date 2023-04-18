import React, { useEffect } from 'react'
import axios from 'axios';

const NaverCallBack = () => {

    const code = new URL(window.location.href).searchParams.get("code");

    console.log('code: ', code);

    const CLIENT_ID = 'SEE6V1El4R5E6Bn_v4Lw';
    const CLIENT_SECRET = 'Gr5_Xz3fTQ';
    const STATE = '';

    useEffect(()=>{
        console.log(123);
        getToken();
    }, []);

    

    const getToken = async() => {
        try{
            const response = await axios({
                method: 'post',
                url: `https://momsnote.net/exp/count`,
                headers: {

                },
                data: {

                }
            })
            console.log('response: ', response);
        }catch(error){
            console.log('naver login error: ', error);
        }
    }



  return (
    <div className='border bg-mainColor w-12 h-12'>
      few
    </div>
  )
}

export default NaverCallBack

