import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-2" />
        <p className="text-xl font-bold">StrondaBoost</p>
      </div>
      <ul className="flex gap-6">
        <li onClick={() => {setMenu("shop")}} className="hover:text-red-500 cursor-pointer"><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("dota2")}} className="hover:text-red-500 cursor-pointer"><Link style={{ textDecoration: 'none' }} to='/dota2'>Dota 2</Link>{menu==="dota2"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("cs2")}} className="hover:text-red-500 cursor-pointer"><Link style={{ textDecoration: 'none' }} to='/cs2'>CS2</Link>{menu==="cs2"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("lol")}} className="hover:text-red-500 cursor-pointer"><Link style={{ textDecoration: 'none' }} to='/lol'>LOL</Link>{menu==="lol"?<hr/>:<></>}</li>
      </ul>
      <div className="flex items-center">
        <Link to='/login'><button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300">Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="Cart" className="ml-4 h-6" /></Link>
        <div className='width-22 height-22 flex justify-center items-center margin-top--35 margin-left--55 rounded-full font-size-14 bg-red-500 text-white'>0</div>
      </div>
    </div>
  );
}
