const API_LINK="http://localhost:8080/vehicles"

export const getVehicles=()=>{
    return fetch(API_LINK)
    .then(data=>data.json())
    .then(data=>data._embedded.vehicles)
}
export const addVehicle=(vehicle)=>{
    return fetch(API_LINK,{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(vehicle),
    })
    .then(data=>data.json())
    .then(data=>data)
}

export const getVehiclesById=(vehicle_link)=>{
    return fetch(vehicle_link)
    .then(data=>data.json())
    .then(data=>data)
}

export const deletevehicle=(vehicle_id_link)=>{
    return fetch (vehicle_id_link,{
      method:"Delete"})
      .then((data)=>data.json())
    .then((data)=>data)
  
  }

  export const updateVehicle=(vehicle_id_link,vehicle)=>{
    return fetch(vehicle_id_link,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(vehicle)
      })
      .then((data) => data.json())
        .then((data) => data);
  }

  export const uploadVehicleImage=(vehicle_link,file)=>{
    let formData= new FormData();
    formData.append("vehicleImage",file)

    return fetch(vehicle_link+"/image",{
      method:"POST",
      body:formData
    })
    .then(data=>data.text())
    .then(data=>data)

}
export const getVehicleAtoZ = () => {
  return fetch("http://localhost:8080/vehicles/search/findByOrderByModelsAsc")
    .then((data) => data.json())
    .then((data) => {
      return data._embedded.vehicles;
    });
};

export const getVehicleZtoA = () => {
  return fetch("http://localhost:8080/vehicles/search/findByOrderByModelsDesc")
    .then((data) => data.json())
    .then((data) => {
      return data._embedded.vehicles;
    });
};


  export const getVehicleStatusAvailable = (status) => {
  return fetch(`http://localhost:8080/vehicles/search/findByStatus?status=${status}`)
    .then((data) => data.json())
    .then((data) => {
      return data._embedded.vehicles;
    });
};


