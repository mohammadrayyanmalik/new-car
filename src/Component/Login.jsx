import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate=useNavigate();
  return (
   <div>
     <div class="container">
        <h2>Car Rental Login</h2>
        <form>
            <input type="text" placeholder="Username" required/>
            <input type="password" placeholder="Password" required/>
            <button type="submit" onSubmit={()=>{navigate("/locationDetails")}}>Login</button>
        </form>
        <div class="register-link">
            <p>Don't have an account? <a href="#" onClick={()=>{navigate("/registration")}}>Register here</a></p>
        </div>
    </div>
   </div>
  )
}

export default Login