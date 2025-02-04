import React from "react";

import { useNavigate } from "react-router-dom";
import Vehicle from "./Vehicle";


function VehicleItem({models, type, price, licensePlate, status,vehicle_link}) {

  const navigte=useNavigate();
  return (
    <div>
      <div class="card-container">
      <div class="card">
            <div class="card-image">
             
                <img src={vehicle_link+"/image"} class="card-img-top vehicleImage" alt="..." />
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
