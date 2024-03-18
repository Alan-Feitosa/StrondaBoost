import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';


const App = () => {
  return (
    <div className='font-sans'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/dota2' element={<ShopCategory category="dota2"/>}/>
        <Route path='/cs2' element={<ShopCategory category="cs2"/>}/>
        <Route path='/lol' element={<ShopCategory category="lol"/>}/>
        <Route path='product' element={<Product />}>
          <Route path=':productId' element={<Product />}/>
        </Route>
        <Route path='/cart' element={<Shop/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App