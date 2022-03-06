import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import commanderImg from "../crew/image-douglas-hurley.png";

function Commander() {
    const location = useLocation();

    return <div className="container-fluid">



<div className="row">
  <div className="crew-content-column col-lg-6">
    <h4 className="crew-occupation">COMMANDER</h4>
    <h1 className="crew-name">DOUGLAS HURLEY</h1>
    <p className="crew-description">Douglas Gerald Hurley is an American engineer, former</p>
    <p className="crew-description">Marine Corps pilot and former NASA astronaut.</p>
    <p className="crew-description"> He launched into space for the third time</p>
    <p className="crew-description">as commander of Crew Dragon Demo-2.</p>
    <div className="crew-links">
    <Link to="/crew"><button className="btn btn-dark">1</button></Link>
    <Link to="/crew/pilot"><button className="btn btn-dark">2</button></Link>
    <Link to="/crew/specialist"><button className="btn btn-dark">3</button></Link>
    <Link to="/crew/commander"><button className="btn btn-dark">4</button></Link>
    </div>
  </div>

  <div className="crew-img-column col-lg-6">
    <img className="crew-img" src={commanderImg}/>
  </div>



</div>

</div>
}
export default Commander;