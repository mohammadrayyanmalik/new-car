import React, { useEffect, useState } from "react";
import { addVehicle, updateVehicle, uploadVehicleImage } from "../Vehicle/VehicleService";

function AdminVehicleForm({ onAddvehicle,selectedAdminVahicle ,onUpdateVehicle,setSelectedAdminvehicle}) {
  let [adminVehicles, setAdminVehicles] = useState({
    id: "",
    models: "",
    type: "",
    price: "",
    licensePlate: "",
    status: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    addVehicle({
      id: e.target.id.value,
      models: e.target.models.value,
      type: e.target.type.value,
      price: e.target.price.value,
      licensePlate: e.target.licensePlate.value,
      status: e.target.status.value,
    }).then((data) => {
      uploadVehicleImage(data._links.self.href,e.target.vehicleImage.files[0])
      .then(data=>data)
      
      onAddvehicle();
      setAdminVehicles({
        id: "",
        models: "",
        type: "",
        price: "",
        licensePlate: "",
        status: "",
      });

  
     
    });
  };

  useEffect(() => {
    if (selectedAdminVahicle) {
        setAdminVehicles(selectedAdminVahicle);
        console.log("form",adminVehicles)
    }
  }, [selectedAdminVahicle]);


  //   TO control change in input box
  const handleChange = (e) => {
    // console.log(e.target.value);
    let{name,value}=e.target;
    // console.log(name+" "+value);
    setAdminVehicles((preVehicle)=>{
        return{...preVehicle,[name]:value}
    })

  };

  const updateHandler=(e)=>{
        e.preventDefault();
        updateVehicle(selectedAdminVahicle._links.self.href,{
            models:e.target.models.value,
            type:e.target.type.value,
            price:e.target.price.value,
            licensePlate:e.target.licensePlate.value,
            status:e.target.status.value,
            vehicleImage:e.target.vehicleImage.value
 }).then((data)=>{
  uploadVehicleImage(data._links.self.href,e.target.vehicleImage.files[0])

    onAddvehicle();
    setAdminVehicles({
        id: "",
        models: "",
        type: "",
        price: "",
        licensePlate: "",
        status: "",
    })

    setSelectedAdminvehicle(null);

    
 })
  }

  return (
    <div className="container border border-primary border-3 p-3 my-3 adminVehicleForm">
      <form onSubmit={selectedAdminVahicle?updateHandler:submitHandler}>
        <h1 className="bg-primary p-3 text-white text-center">Add Vehicle</h1>

        {/* vehicle models */}
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Vehicle Models
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="models"
            value={adminVehicles.models}
            onChange={handleChange}
            required
          />
        </div>
        {/* vehicle Type */}
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Vehicle Type
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="type"
            value={adminVehicles.type}
            onChange={handleChange}
            required
          />
        </div>
        {/* vehicle Price */}
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Vehicle Price
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="price"
            value={adminVehicles.price}
            onChange={handleChange}
            required

          />
        </div>
        {/*   Vehicle licence Number */}
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Vehicle licence Number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="licensePlate"
            value={adminVehicles.licensePlate}
            onChange={handleChange}
            required

          />
        </div>
        {/*  Vehicle status */}
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Vehicle status
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="status"
            value={adminVehicles.status}
            onChange={handleChange}
            required

          />
        </div>
        

         {/* Vehicle Image */}
         <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
           Vehicle Image
          </label>
          <input
            type="file"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="vehicleImage"
            onChange={handleChange}
            required

          />
        </div>
        {/* Button to submit vehicle */}
        <button type="submit" className="btn btn-primary">
        {selectedAdminVahicle?"update":"submit"}
        </button>
      </form>
    </div>
  );
}

export default AdminVehicleForm;
