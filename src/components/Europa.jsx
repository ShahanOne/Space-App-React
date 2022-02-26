import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import europaImg from "../destination/image-europa.png"

function Europa() {
    const location = useLocation();

    return <div className="container-fluid">
<div className="row main-row">
  <div className="destination-img-column col-lg-6">
   <img className="destination-img" src={europaImg} alt="europa-img"/>
  </div>

  <div className="content-column col-lg-6">
    <div className="nav-buttons">
    <button style={{"paddingLeft":"0"}} className="btn destination-btn" type="button"><Link to="/destination">MOON</Link></button>
      <button className="btn destination-btn" type="button"> <Link to="/destination/mars">MARS</Link> </button>
      <button className="btn destination-btn" type="button"><Link to="/destination/europa"> EUROPA </Link></button>
      <button className="btn destination-btn" type="button"><Link to="/destination/titan">TITAN </Link> </button>
      </div>
<div className="content">
      <p className="planet-name">EUROPA </p>
      <p className="planet-description"> The smallest of the four Galilean moons orbiting Jupiter, </p>
      <p className="planet-description"> Europa is a winter lover’s dream. With an icy surface, </p>
      <p className="planet-description"> it’s perfect for a bit of ice skating, curling, hockey, or simple </p>
      <p className="planet-description"> relaxation in your snug wintery cabin. </p>
    </div>
<hr className="destination-hr"/>
    <div className="row">

     <div className="col-6">
      <p>AVG. DISTANCE</p>
     <h1>628 mil. km </h1> 
     </div>

     <div className="col-6">
      <p>EST. TRAVEL TIME</p>
      <h1>3 years </h1> 
     </div>

    </div>

  </div>
</div>
    </div>
}

export default Europa; 