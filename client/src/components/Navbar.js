import React from 'react';
import logo from "./logo.png"

import { Link } from'react-router-dom';
const Navbar = () => {
  return (
    <div  className="flex justify-between items-center border-b border-b-[#e6ebf4] bg-white px-4 py-3">
       <Link to="/">  <img src={logo} className="w-28 object-contain"
        alt='logo'/> </Link>
       <Link to="/createpost"><button className="bg-[#6460ff] text-white font-inter px-3 py-2 rounded-md">create</button></Link>
       

    </div>
  )
}

export default Navbar;