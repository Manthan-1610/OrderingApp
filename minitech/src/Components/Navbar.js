import React from 'react'
import header from './header.css';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="navbar navbar-expand-xl spacing navbar-light bg-light nav-container">
  <a className="text1" href="#">Hungree</a>
  <div className="navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav justify-content-between w-75">
      <li className="nav-item active">
        <a className="nav-link text2" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text2 text1 active" href="#">Rewards</a>
      </li>
       <li className="nav-item active txt1">
        <a className="btn btn-outline mr-sm-2 " onClick={() => navigate("/Cart")}><h1 className=" mr-sm-10">🍽️ </h1></a>
      </li>
      <a className="btn btn-outline mr-sm-2 " onClick={() => navigate("/Cart")}><h1 className=" mr-sm-20">🙍‍♂️</h1></a>
      <li className="nav-item active txt1">
        
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar;