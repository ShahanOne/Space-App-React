import React from "react";
import { Outlet, Link } from "react-router-dom";

function Crew() {
    return <div className="crew-home container-fluid">
    <h3 className="crew-number"> 02 </h3><h3 className="crew-heading">MEET YOUR CREW </h3>

    <Outlet/>
    </div>





 
}


export default Crew;