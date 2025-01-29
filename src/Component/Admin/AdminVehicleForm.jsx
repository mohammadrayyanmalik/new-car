import React, { useState } from 'react'
import { addVehicle } from '../Vehicle/VehicleService';


function AdminVehicleForm({onAddvehicle}) {

    let [vehicles,setVehicles]=useState({
        id:"",
        models:"",
        type:"",
        price:"",
        licensePlate:"",
        status:""
    })

    const submitHandler=(e)=>{
        e.preventDefault();
        addVehicle({
            id:e.target.id.value,
            models:e.target.models.value,
            type:e.target.type.value,
            price:e.target.price.value,
            licensePlate:e.target.licensePlate.value,
            status:e.target.status.value
        }).then(data=>{
            // onAddvehicle();
            // setVehicles({
            //     id:"",
            //     models:"",
            //     type:"",
            //     price:"",
            //     licensePlate:"",
            //     status:""
            // })

            return data;
        })
    }

    return (
        <div className="container border border-primary border-3 p-3 my-3 adminVehicleForm" >
            <form onSubmit={submitHandler}>
                <h1 className='bg-primary p-3 text-white text-center'>Add Vehicle</h1>

                {/* vehicle id */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Vehicle Id</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="id" />
                </div>
                {/* vehicle models */}
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Vehicle Models</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="models" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Vehicle Type</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="type" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Vehicle Price</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="price" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Vehicle licence Number</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="licensePlate" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Vehicle status</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="status" />
                </div>
                {/* Button to submit vehicle */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AdminVehicleForm