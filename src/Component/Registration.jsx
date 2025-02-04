import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addCustomer } from './Service/CustomerService'

function Registration() {

  let [customer,setCustomer]=useState({
    customersId:'',
    firstName:'',
    lastName:'',
    contactNo:'',
    email:'',
    licenceNo:'',
    password:'',
    confirmPassword:''
  })

  const submitHandler=(e)=>{
      addCustomer({
      
        firstName:e.target.firstName.value,
        lastName:e.target.lastname.value,
        contactNo:e.target.contactNo.value,
        email:e.target.email.value,
        licenceNo:e.target.licenceNo.value,
        password:e.target.password.value,
        confirmPassword:e.target.confirmPassword.value
      }).then(data=>{
        return data
      })
  }

    const navigate=useNavigate();
    
  return (
    <div class="container-wrapper">
    <div class="container register">
    <h2>Car Rental Registration</h2>
    <form onSubmit={submitHandler}>
   
        <label for="firstname">First Name:</label>
        <input type="text" id="firstname" name="firstName" required/>

        <label for="lastname">Last Name:</label>
        <input type="text" id="lastname" name="lastname" required/>

        <label for="age">Contact No.</label>
        <input type="number" id="age" name="contactNo" required/>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>

        <label for="phone">LicenceNo</label>
        <input type="text" id="phone" name="licenceNo" required/>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>

        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirmPassword" required/>

        <button type="submit" >Register</button>

        <div class="login-link">
            <p>Don't have an account? <a href="#" onSubmit={()=>{navigate("/login")}}>Login here</a></p>
        </div>
    </form>
</div>
</div>

  )
}

export default Registration