import React from 'react'
import footer from '../Image/logo-dark.png'

function Footer() {
  return (
    <div>
          <footer>
      <div class="section__container footer__container">
        <div class="footer__col">
          <a href="#" class="footer__logo">
            <img src={footer} alt="logo" />
            Unique
          </a>
          <p class="section__description">
            Experience the best of New York with the elegance and reliability of
            Premium Car Rental.
          </p>
        </div>
        <div class="footer__col">
          <ul class="footer__links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Cars</a></li>
            <li><a href="#">Futures</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Subscribe To News</h4>
          <form action="/">
            <input type="text" placeholder="Your Email" />
            <button class="btn"><i class="ri-arrow-right-line"></i></button>
          </form>
        </div>
      </div>
      <div class="footer__bar">
        Copyright © 2025 Web Design Mastery. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer