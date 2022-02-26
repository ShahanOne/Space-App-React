import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import specialistImg from "../crew/image-mark-shuttleworth.png"



function Specialist() {
    const location = useLocation();

    return <div className="container-fluid">


<div className="row">
  <div className="crew-content-column col-lg-6">
    <h4 className="crew-occupation">MISSION SPECIALIST</h4>
    <h1 className="crew-name">MARK SHUTTLEWORTH</h1>
    <p className="crew-description">Mark Richard Shuttleworth is the founder and CEO of Canonical,</p>
    <p className="crew-description">the company behind the Linux-based Ubuntu</p>
    <p className="crew-description">operating system. Shuttleworth became the first South African</p>
    <p className="crew-description">to travel to space as a space tourist.</p>
    <div className="crew-links">
    <Link to="/crew"><button className="btn btn-dark">1</button></Link>
    <Link to="/crew/pilot"><button className="btn btn-dark">2</button></Link>
    <Link to="/crew/specialist"><button className="btn btn-dark">3</button></Link>
    <Link to="/crew/commander"><button className="btn btn-dark">4</button></Link>
    </div>
  </div>

  <div className="crew-img-column col-lg-6">
    <img className="crew-img" src={specialistImg}/>
  </div>



</div>

</div>
}

export default Specialist;