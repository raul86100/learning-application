import React from "react";
import "./Firstindex.css";
import mylogo from "../../../imgaes/Logo/studio learning.png";
import { Link, Outlet } from "react-router-dom";


function Firstindex() {
  return (
    <div>
      <div className="About-header">
        <div className="headerimglogo">
          <img src={mylogo} width="150px" />
        </div>
        <div className="headerbutton">
          <div className="loginbtn"><Link className="link" to="/">Login</Link></div>
          <div className="signupbtn"><Link  to ="register" className="link" >SignUp</Link></div>
        </div>
      </div>
      <div>
      
        <Outlet />
      </div>
    </div>
  );
}

export default Firstindex;
