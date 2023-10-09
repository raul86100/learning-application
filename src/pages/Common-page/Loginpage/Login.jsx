import React from 'react'
import "./Login.css"
import image from "../../../imgaes/image"
function Login() {
  return (
    <div className='login_layout'>
     
      <div><img src={image.login}  width="400px"/></div>
      <div className='login_form'>
      <form>
        
        <p>Login</p>
        <div><input type='text' placeholder='Email' /></div>
        <div><input type='password' placeholder='password' /></div>
        <div><input type='submit' value="Login"/></div>
        </form>
        </div>
       
      </div>
      
 
  )
}

export default Login