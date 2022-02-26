import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import vehicleImg from "../technology/image-launch-vehicle-portrait.jpg"

function Vehicle() {
    const location = useLocation();

    return <div className="container-fluid">
<div className="row main-row">
  <div className="technology-content-column col-lg-6 row">
    <div className="technology-btn-row col-lg-3">
    <Link className="technology-a" to="/technology"><button className="btn technology-btn btn-light" type="button">1</button></Link>
      <Link className="technology-a" to="/technology/vehicle"><button className="btn technology-btn btn-light" type="button">2</button></Link>
      <Link className="technology-a" to="/technology/tablet"><button className="btn technology-btn btn-light" type="button">3</button></Link>
    </div>

    <div className="content col-lg-9">
      <h5>THE TERMINOLOGY...</h5>
      <h1 className="technology-name">LAUNCH VEHICLE</h1>
      <p className="technology-description">A launch vehicle or carrier rocket is a rocket-propelled vehicle used</p>
      <p className="technology-description">to carry a payload from Earth's surface to space,usually to Earth</p>
      <p className="technology-description"> orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation.</p>
      <p className="technology-description"> Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
    </div>
  </div>

  <div className="technology-img-column col-lg-6">
    <img src={vehicleImg} className="technology-img" />
  </div>
</div>
    </div>
}

export default Vehicle;