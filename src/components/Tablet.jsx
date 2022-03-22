import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import tabletImg from "../technology/image-spaceport-portrait.jpg"

function Tablet() {
    const location = useLocation();

    return <div className="container-fluid">
<div className="row main-row">
  <div className="technology-content-column col-lg-6 row">
    <div className="technology-btn-row col-lg-3">
    <Link className="technology-a" to="/technology"><button className="btn technology-btn btn-light" type="button" style={{"margin-right":"10px"}}>1</button></Link>
      <Link className="technology-a" to="/technology/vehicle"><button className="btn technology-btn btn-light" type="button" style={{"margin-right":"12px"}}>2</button></Link>
      <Link className="technology-a" to="/technology/tablet"><button className="btn technology-btn btn-light" type="button">3</button></Link>
    </div>

    <div className="content col-lg-9">
      <h5>THE TERMINOLOGY...</h5>
      <h1 className="technology-name">SPACEPORT</h1>
      <p className="technology-description">A spaceport or cosmodrome is a site for launching (or receiving) spacecraft,</p>
      <p className="technology-description">by analogy to the seaport for ships or airport for aircraft.</p>
      <p className="technology-description"> Based in the famous Cape Canaveral, our spaceport is ideally situated</p>
      <p className="technology-description">to take advantage of the Earth’s rotation for launch.</p>
    </div>
  </div>

  <div className="technology-img-column col-lg-6">
    <img src={tabletImg} className="technology-img"/>
  </div>
</div>
    </div>
}

export default Tablet;