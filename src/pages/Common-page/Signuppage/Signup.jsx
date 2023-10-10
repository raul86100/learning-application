import React from 'react'
import './Signup.css'
import image from "../../../imgaes/image"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useRef } from 'react';

function Signup() {
  var details={};
  const gooleref=useRef(null);
  const googleAuth=()=>{
    gooleref.current.click();
  }
  
  return (
    <div><form >
    <div className='signup-page'>
      <div className="image-div">
        <img src={image.signupimg} width="400px" className='sign-up-img'/>
      </div>
      
      
      <div className="register_form">
      
        {/* <div><p className='signuptitle'>Signup</p></div>
        <div><input type="text" placeholder='Email Address'/></div>
        <div><input type="text" placeholder='Username'/></div>
        <div><input type="text" placeholder='Name'/></div>
        
        <div><input type="number" placeholder='Mobile number'/></div>
        <div><input type="text" placeholder='Password'/></div>
        <div><input type="password" placeholder='confirm Password'/></div>
        <div className='checkbox'><input type="checkbox"/><p> Terms & conditions are applyed</p></div>
        <div><input type="submit" value="Register"/></div> */}
        <div className="google-login-button">
        <GoogleOAuthProvider clientId="103138130018-v3tpihc0ntt1vj1i3ntqkmohi0vu6bgj.apps.googleusercontent.com"  >

        <GoogleLogin
  onSuccess={credentialResponse => {
    //details=jwt_decode(credentialResponse);
    console.log(jwt_decode(credentialResponse.credential));

  }}
  onError={() => {
    console.log('Login Failed');
  }}
  type="icon"
  theme="filled_black"
  shape="circle"
  
 size="large"/>
        </GoogleOAuthProvider>

        </div>
       
        
      
     
      </div>
      
    </div>
    </form>
    </div>
  )
}

export default Signup