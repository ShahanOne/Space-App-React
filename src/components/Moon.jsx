import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import moonImg from "../destination/image-moon.png"

function Moon() {
    const location = useLocation();

    return <div className="container-fluid">
   
<div className="row main-row">
  <div className="destination-img-column col-lg-6">
   <img className="destination-img" src={moonImg} alt="moon-img"/>
  </div>

  <div className="destination-content-column col-lg-6">
  <div className="nav-buttons">
  <button style={{"paddingLeft":"0"}} className="btn destination-btn" type="button"><Link to="/destination">MOON</Link></button>
      <button className="btn destination-btn" type="button"> <Link to="/destination/mars">MARS</Link> </button>
      <button className="btn destination-btn" type="button"><Link to="/destination/europa"> EUROPA </Link></button>
      <button className="btn destination-btn" type="button"><Link to="/destination/titan">TITAN </Link> </button>
    </div>
    <div className="content">
      <p className="planet-name">MOON </p>
      <p className="planet-description"> See our planet as you’ve never seen it before. </p>
      <p className="planet-description"> A perfect relaxing trip away to help regain perspective and </p>
      <p className="planet-description"> come back refreshed. While you’re there, take in some history </p>
      <p className="planet-description"> by visiting the Luna 2 and Apollo 11 landing sites. </p>
    </div>
<hr className="destination-hr"/>
    <div className="row">

     <div className="col-6">
      <p>AVG. DISTANCE</p>
     <h1>384,400 km </h1> 
     </div>

     <div className="col-6">
      <p>EST. TRAVEL TIME</p>
      <h1>3 days </h1> 
     </div>

    </div>
</div>
  </div>

    </div>
}

export default Moon; 