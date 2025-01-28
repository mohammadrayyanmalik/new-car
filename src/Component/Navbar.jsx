import React from 'react'
import pic from '../Image/logo-dark.png'

function Navbar() {
  return (
    <div>
         <nav>
      <div class="nav__header">
        <div class="nav__logo">
          <a href="#" class="nav__logo">
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
        <li><a href="#about">About Us</a></li>
        <li><a href="#car">Cars</a></li>
        <li><a href="#feature">Features</a></li>
        <li><a href="#help">Help</a></li>
        <li>
          <button class="btn">
            
            Login
          </button>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar