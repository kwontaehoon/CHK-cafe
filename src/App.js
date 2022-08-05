import React from 'react'
import Main from './Main/Main_page'
import Topnav from './K_cafe/Topbar2'
import Coffee from './Menu/Coffee'
import Membership from './K_cafe/Member/Member_main'
import MembershipApp from './K_cafe/App/APP_main'
import MembershipFaq from './K_cafe/FAQ/FAQ_main'
import Board from './K_cafe/FAQ/Board'
import FAQ from './K_cafe/FAQ/FAQ'
import View2 from './K_cafe/FAQ/View2'
import Write from './K_cafe/FAQ/Write'
import Modify from './K_cafe/FAQ/Modify'
import Notice from './K_cafe/FAQ/Notice'
import Tea from './Menu/Tea'
import Desert from './Menu/Desert'
import Bread from './Menu/Bread'
import Juice from './Menu/Juice'
import Mini from './Menu/Mini'
import Product from './Product/Product'
import ProductMain from './Product/ProductMain'
import Cup from './Product/Cup'
import Acc from './Product/Acc'
import PackTea from './Product/PackTea'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Cart from './Menu/Cart';
import Login from './Login/Login_page'
import SignUp from './Login/SignUp'
import P_Pay from './Product/P_Pay'
import './app.css'
import Auth from './Auth'




const App = () => {
  
  return (
    
    <BrowserRouter>
      <Topnav />
      <Routes>
        <Route path='/' element = {<Main />} />
        <Route path='/kakao/callback' element = {<Auth />} />
        <Route path='/coffee' element= {<Coffee/>}/>
        <Route path='/noncoffee' element={<Tea/>} />
        <Route path="/desert" element={<Desert/>}/>
        <Route path="/Bread" element={<Bread/>}/>
        <Route path="/juice" element={<Juice/>} />
        <Route path="/mini" element={<Mini/>}/>
        <Route path='/membership' element={<Membership />}/>
        <Route path='/membership/app' element={<MembershipApp />}/>
        <Route path='/membership/faq' element={<MembershipFaq />}/>
        <Route path='/membership/faq/board/:id' element={<Board />}/>
        <Route path='/membership/faq/faq' element={<FAQ />}/>
        <Route path='/membership/faq/view/:id' element={<View2 />}/>
        <Route path='/membership/faq/notice/:id' element={<Notice />}/>  
        <Route path='/membership/faq/write' element={<Write />}/>
        <Route path='/membership/faq/modify' element={<Modify/>}/>
        <Route path='/productMain' element={<ProductMain />} />
        <Route path='/product' element={<Product />}/>
        <Route path='/ppay' element={<P_Pay />}/>
        <Route path='/cup' element={<Cup />}/>
        <Route path='/acc' element={<Acc />} />
        <Route path='/packTea' element={<PackTea />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App  