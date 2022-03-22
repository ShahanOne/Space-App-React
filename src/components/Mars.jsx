import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import marsImg from "../destination/image-mars.png"

function Mars() {
    const location = useLocation();

    return <div className="container-fluid">
 
<div className="row main-row">
  <div className="destination-img-column col-lg-6">
     <img className="destination-img" src={marsImg} alt="mars-img"/>
  </div>

  <div className="destination-content-column col-lg-6">
    <div className="nav-buttons">
    <button style={{"paddingLeft":"0"}} className="btn destination-btn" type="button"><Link to="/destination">MOON</Link></button>
      <button className="btn destination-btn" type="button"> <Link to="/destination/mars">MARS</Link> </button>
      <button className="btn destination-btn" type="button"><Link to="/destination/europa"> EUROPA </Link></button>
      <button className="btn destination-btn" type="button"><Link to="/destination/titan">TITAN </Link> </button>
    </div>
    
   <div className="content">
      <p className="planet-name">MARS </p>
      <p className="planet-description"> Don’t forget to pack your hiking boots. You’ll need them </p>
      <p className="planet-description">to tackle Olympus Mons, the tallest planetary mountain in </p>
      <p className="planet-description"> our solar system. It’s two and a half times the size of </p>
      <p className="planet-description"> Everest! </p>
    </div>
    
<hr className="destination-hr"/>
    <div className="row">

     <div className="col-6">
      <p>AVG. DISTANCE</p>
    <h1>225 mil. km </h1> 
     </div>

     <div className="col-6">
      <p>EST. TRAVEL TIME</p>
     <h1>9 months</h1> 
     </div>

    </div>

  </div>
</div>

    </div>
}

export default Mars; 