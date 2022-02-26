
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import pilotImg from "../crew/image-victor-glover.png"




function Pilot() {
    const location = useLocation();

    return <div className="container-fluid">


<div className="row">
  <div className="crew-content-column col-lg-6">
    <h4 className="crew-occupation">PILOT</h4>
    <h1 className="crew-name">VICTOR GLOVER</h1>
    <p className="crew-description">Pilot on the first operational flight of the SpaceX Crew Dragon</p>
    <p className="crew-description">to the International Space Station. Glover is a commander in</p>
    <p className="crew-description">the U.S. Navy where he pilots an F/A-18.He was a crew member</p>
    <p className="crew-description">of Expedition 64, and served as a station systems flight engineer.</p>
    <div className="crew-links">
    <Link to="/crew"><button className="btn btn-dark">1</button></Link>
    <Link to="/crew/pilot"><button className="btn btn-dark">2</button></Link>
    <Link to="/crew/specialist"><button className="btn btn-dark">3</button></Link>
    <Link to="/crew/commander"><button className="btn btn-dark">4</button></Link>
    </div>
  </div>

  <div className="crew-img-column col-lg-6">
    <img className="crew-img" src={pilotImg}/>
  </div>



</div>

</div>
}

export default Pilot;