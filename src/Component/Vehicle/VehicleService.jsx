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

