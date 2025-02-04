import React from 'react'
import header from '../Image/header.png'

function Header() {
  return (
    <div>
         <header>
      <div class="header__image">
        <img src={header} alt="header"/>
      </div>
      <div class="header__content">
        <h1>Premium Car Rental In Mumbai</h1>
        <p class="section__description">
          Discover the ultimate car rental experience in Mumbai with Premium
          Car Rental. We offer a wide range of luxury vehicles, exceptional
          customer service, and seamless booking options to make your journey
          unforgettable.
        </p>
      </div>
    </header>
    </div>
  )
}

export default Header