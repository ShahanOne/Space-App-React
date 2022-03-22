import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import capsuleImg from "../technology/image-space-capsule-portrait.jpg"

function SpaceCapsule() {
    const location = useLocation();
    
    return <div className="container-fluid">
<div className="row main-row">
  <div className="technology-content-column col-lg-6 row">
    <div className="technology-btn-row col-lg-3">
      <Link className="technology-a" to="/technology"><button className="btn technology-btn btn-light" type="button" style={{"margin-right":"10px"}}>1</button></Link>
      <Link className="technology-a" to="/technology/vehicle"><button className="btn technology-btn btn-light" type="button" style={{"margin-right":"12px"}}>2</button></Link>
      <Link className="technology-a" to="/technology/tablet"><button className="btn technology-btn btn-light" type="button" >3</button></Link>
    </div>

    <div className="technology-content col-lg-9">
      <h5>THE TERMINOLOGY...</h5>
      <h1 className="technology-name">SPACE CAPSULE</h1>
      <p className="technology-description">A space capsule is an often-crewed spacecraft that uses a blunt-body</p>
      <p className="technology-description"> reentry capsule to reenter the Earth's atmosphere without wings. </p>
      <p className="technology-description">Our capsule is where you'll spend your time during the flight. It includes</p>
      <p className="technology-description"> a space gym, cinema, and plenty of other activities to keep you entertained</p>
    </div>
  </div>

  <div className="technology-img-column col-lg-6">
    <img src={capsuleImg} className="technology-img" />
  </div>
</div>
    </div>
}

export default SpaceCapsule;