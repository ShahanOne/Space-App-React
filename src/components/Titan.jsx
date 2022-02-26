import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import titanImg from "../destination/image-titan.png"


function Titan() {
    const location = useLocation();

    return <div className="container-fluid">
<div className="row main-row">
  <div className="destination-img-column col-lg-6">
   <img className="destination-img" src={titanImg} alt="titan-img"/>
  </div>

  <div className="content-column col-lg-6">
    <div className="nav-buttons">
    <button style={{"paddingLeft":"0"}} className="btn destination-btn" type="button"><Link to="/destination">MOON</Link></button>
      <button className="btn destination-btn" type="button"> <Link to="/destination/mars">MARS</Link> </button>
      <button className="btn destination-btn" type="button"><Link to="/destination/europa"> EUROPA </Link></button>
      <button className="btn destination-btn" type="button"><Link to="/destination/titan">TITAN </Link> </button>
    </div>

  <div className="content">
      <p className="planet-name">TITAN </p>
      <p className="planet-description"> The only moon known to have a dense atmosphere </p>
      <p className="planet-description"> other than Earth, Titan is a home away from </p>
      <p className="planet-description"> home (just a few hundred degrees colder!). As a bonus, </p>
      <p className="planet-description"> you get striking views of the Rings of Saturn. </p>
    </div>
<hr className="destination-hr"/>
    <div className="row">

     <div className="col-6">
      <p>AVG. DISTANCE</p>
     <h1>1.6 bil. km </h1>
     </div>

     <div className="col-6">
      <p>EST. TRAVEL TIME</p>
      <h1>7 years </h1>
     </div>

    </div>

  </div>
</div>
    </div>
}

export default Titan; 