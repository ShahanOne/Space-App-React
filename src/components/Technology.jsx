import React from "react";
import { Outlet, Link } from "react-router-dom";


function Technology() {
    return <div className="technology-home container-fluid">
    <h3 className="technology-number"> 03 </h3><h3 className="technology-heading"> SPACE LAUNCH 101 </h3>

<Outlet/>
    </div>
}


export default Technology;