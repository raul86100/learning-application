import React from "react";
import './Firstindex.css';
import { Outlet } from "react-router-dom";

function Firstindex() {
  return (
    <div>
      <div>navbar</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Firstindex;
