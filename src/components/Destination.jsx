import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Destination() {

    return <div className="destination-body container-fluid">
    <h3 className="destination-number"> 01 </h3><h3 className="destination-heading">PICK YOUR DESTINATION </h3>
    <Outlet/>
  
    </div>
}


export default Destination;