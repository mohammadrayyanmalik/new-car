import React from 'react'
import pic from '../Image/logo-dark.png'
import { useNavigate } from 'react-router-dom'
import Registration from './Registration';

function Navbar() {
  const navigate=useNavigate();

  return (
    <div>
         <nav>
      <div class="nav__header">
        <div class="nav__logo">
          <a href="#" class="nav__logo" onClick={()=>{navigate("/")}}>
            <img src="assets/logo-light.png" alt="logo" class="logo-light" />
            <img src={pic} alt="logo" class="logo-dark" />
            Unique
          </a>
        </div>
        <div class="nav__menu__btn" id="menu-btn">
          <i class="ri-menu-3-line"></i>
        </div>
      </div>
      <ul class="nav__links" id="nav-links">
        <li><a href="#about" onClick={()=>{navigate("/about-us")}}>About Us</a></li>
        <li><a href="#car" onClick={()=>{navigate("/vehicles")}}>Vehicles</a></li>
        <li><a href="#feature" onClick={()=>{navigate("/registration")}}>Registration</a></li>
        <li><a href="#help" onClick={()=>{navigate("/vehicle-admin")}}>Admin</a></li>
        <li>
          <button class="btn" onClick={()=>{navigate("/login")}}>
            Login
          </button>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar