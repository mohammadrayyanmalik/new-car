import React from "react";

import { useNavigate } from "react-router-dom";
import AdminVehicle from "./AdminVehicle";
import { deletevehicle, getVehiclesById } from "../Vehicle/VehicleService";


function AdminVehicleItem({models, type, price, licensePlate, status,vehicle_link,onSelectVehicle,onDeleteVehicle}) {

   //================================================================
  // function to delete vehicle
  const onSelectDelete = async (vehicle_id_link) => {
    const deletedvehicle = await deletevehicle(vehicle_id_link)
    onDeleteVehicle();

  }
  //==============================================================
//   function to update vehicle

 const onSelectUpdate = async (link) => {
  console.log(link);
  let vehicle = await getVehiclesById(link)
  onSelectVehicle(vehicle)
  
}


//================================================================

  const navigte=useNavigate();
  return (
    <div>
      <div class="card-container admin-card-container">
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
            {/* Update Button */}
            <button className="btn btn-success" onClick={()=>{onSelectUpdate(vehicle_link)}} >Update</button>
            {/* Delete Button */}
            <button className="btn btn-danger" onClick={()=>{onSelectDelete(vehicle_link)}} > Delete</button>


            </div>
           
        </div>
      </div>
    </div>
  );
}

export default AdminVehicleItem;
