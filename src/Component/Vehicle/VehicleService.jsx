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
    //   .then((data) => data.json())
    //     .then((data) => data);
  }


