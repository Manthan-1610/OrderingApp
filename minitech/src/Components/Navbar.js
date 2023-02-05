import React from 'react'
import './header.css';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="navbar navbar-expand-xl spacing navbar-light bg-light nav-container">
  <a className="text1" href="#">MiniTech</a>
  <div className="navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav justify-content-between w-75">
      <li className="nav-item active">
        <a className="nav-link text2" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text2 text active" href="#">Rewards</a>
      </li>
       <li className="nav-item active">
        <a className="btn btn-outline mr-sm-2" onClick={() => navigate("/Cart")}><h1 className=" mr-sm-10">🍽️ </h1></a>
      </li>
      <li className="nav-item active">
        <a className="btn btn-outline mr-sm-2" onClick={() => navigate("/Cart")}><h1 className=" mr-sm-20">🙍‍♂️</h1></a>
      </li>
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button classNameName="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
  )
}

export default Navbar;