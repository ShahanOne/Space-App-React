import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import engineerImg from "../crew/image-anousheh-ansari.png"



function Engineer() {
    const location = useLocation();

    return <div className="container-fluid">

<div className="row">
  <div className="crew-content-column col-lg-6">
    <h4 className="crew-occupation">FLIGHT ENGINEER</h4>
    <h1 className="crew-name">ANOUSHEH ANSARI</h1>
    <p className="crew-description">Anousheh Ansari is an Iranian American engineer and co-founder of</p>
    <p className="crew-description">Prodea Systems. Ansari was the fourth self-funded </p>
    <p className="crew-description">space tourist, the first self-funded woman to fly to the ISS,</p>
    <p className="crew-description">and the first Iranian in space.</p>
    <div className="crew-links">
    <Link to="/crew"><button className="btn btn-dark">1</button></Link>
    <Link to="/crew/pilot"><button className="btn btn-dark">2</button></Link>
    <Link to="/crew/specialist"><button className="btn btn-dark">3</button></Link>
    <Link to="/crew/commander"><button className="btn btn-dark">4</button></Link>
    </div>
  </div>

  <div className="crew-img-column col-lg-6">
    <img className="crew-img" src={engineerImg}/>
  </div>



</div>

</div>
}

export default Engineer;