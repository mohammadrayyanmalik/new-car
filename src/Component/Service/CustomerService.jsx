const API_LINK=("http://localhost:8080/customers")

export const addCustomer=(customer)=>{
    return fetch(API_LINK,{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(customer),
    })
    .then(data=>data.json())
    .then(data=>data)
}