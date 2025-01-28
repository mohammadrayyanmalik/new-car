import React from 'react'
import fleet1 from '../Image/fleet-1.jpg'
import fleet2 from '../Image/fleet-2.jpg'
import fleet3 from '../Image/fleet-3.jpg'
import fleet4 from '../Image/fleet-4.jpg'
import fleet5 from '../Image/fleet-5.jpg'
import fleet6 from '../Image/fleet-6.jpg'
import fleet7 from '../Image/fleet-7.jpg'
import fleet8 from '../Image/fleet-8.jpg'
import fleet9 from '../Image/fleet-9.jpg'
import fleet10 from '../Image/fleet-10.jpg'
import fleet11 from '../Image/fleet-11.jpg'
import fleet12 from '../Image/fleet-12.jpg'


function Body2() {
  return (
    <div>
             <section class="fleet__container" id="car">
      <h3 class="section__subheader">ONLY THE BEST CARS</h3>
      <h2 class="section__header">Our Vehicle Fleet</h2>
      <p class="section__description">
        Explore our exclusive collection of luxury vehicles, designed to offer
        unmatched comfort, style, and performance. From elegant sedans to
        powerful SUVs, our fleet is perfect for every occasion, ensuring a
        premium driving experience in New York.
      </p>
      <div class="fleet__wrapper-1">
        <div class="fleet__images">
          <img src={fleet1} alt="fleet" />
          <img src={fleet2} alt="fleet" />
          <img src={fleet3} alt="fleet" />
          <img src={fleet4} alt="fleet" />
          <img src={fleet5} alt="fleet" />
        </div>
      </div>
      <div class="fleet__wrapper-2">
        <div class="fleet__images">
          <img src={fleet6} alt="fleet" />
          <img src={fleet7} alt="fleet" />
          <img src={fleet8} alt="fleet" />
          <img src={fleet9}alt="fleet" />
          <img src={fleet10} alt="fleet" />
          <img src={fleet11} alt="fleet" />
          <img src={fleet12} alt="fleet" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Body2