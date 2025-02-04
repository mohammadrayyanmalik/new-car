import React from 'react'
import body1 from '../Image/about.png'

function Body1() {
  return (
    <div>  <section class="section__container about__container" id="about">
    <div class="about__image">
      <img src={body1} alt="about" />
    </div>
    <div class="about__content">
      <h3 class="section__subheader">CONVENIENT INTERACTION</h3>
      <h2 class="section__header">Modern App</h2>
      <p class="section__description">
        At Premium Car Rental, we redefine the car rental experience in Mumbai 
        with our unparalleled commitment to quality and luxury. Whether
        you're exploring the city for business or leisure, our fleet of
        high-end vehicles ensures a sophisticated and comfortable ride.
      </p>
      <p class="section__description">
        With easy booking options, competitive pricing, and dedicated customer
        support, we strive to make every journey effortless and enjoyable
      </p>
      <div class="about__btn">
        <button class="btn">
          <span><i class="ri-apple-fill"></i></span>
          Download App
        </button>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Body1