import React from "react";

import { useNavigate } from "react-router-dom";
import Vehicle from "./Vehicle";


function VehicleItem({models, type, price, licensePlate, status}) {

  const navigte=useNavigate();
  return (
    <div>
      <div class="card-container">
      <div class="card">
            <div class="card-image">
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/2019_Maruti_Suzuki_Wagon_R_%28India%29.jpg/1200px-2019_Maruti_Suzuki_Wagon_R_%28India%29.jpg" alt="Wagon R"/> */}
            </div>
            <div class="card-details">
                <h3>Vehicle type: {type}</h3>
                <p>Models :{models}</p>
                <p>Vehicle Number: {licensePlate}</p>
                <p>Status: {status}</p>
                <p>Includes Toll, State Tax & GST</p>
                <p>Price: {price}</p>
            </div>
            <div class="card-pricing">
                
                <button class="select-button" onClick={()=>{navigte("")}}>Select</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleItem;
