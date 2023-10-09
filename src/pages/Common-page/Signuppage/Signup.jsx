import React from 'react'
import './Signup.css'
import image from "../../../imgaes/image"

function Signup() {
  return (
    <div><form >
    <div className='signup-page'>
      <div className="image-div">
        <img src={image.signupimg} width="400px" className='sign-up-img'/>
      </div>
      
      
      <div className="register_form">
      
        <div><p>signup</p></div>
        <div><input type="text" placeholder='Email Address'/></div>
        <div><input type="text" placeholder='Name'/></div>
        
        <div><input type="number" placeholder='Mobile number'/></div>
        <div><input type="text" placeholder='Password'/></div>
        <div><input type="password" placeholder='confirm Password'/></div>
        <div className='checkbox'><input type="checkbox"/><p> Terms and conditions are applyed</p></div>
        <div><input type="submit" value="Register"/></div>

        
      
     
      </div>
      
    </div>
    </form>
    </div>
  )
}

export default Signup