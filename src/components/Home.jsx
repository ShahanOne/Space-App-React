import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return <div className="home-body container-fluid"> 
    <div className="home-main">
  <h3>SO, YOU WANT TO TRAVEL TO</h3>
  <p className="home-space">SPACE</p>
  <p>LET'S FACE IT; IF YOU WANT TO GO TO SPACE,YOU MIGHT AS WELL</p>
  <p> GENUINELY GO TO OUTER SPACE AND NOT HOVE KIND OF ON THE </p>
  <p>EDGE OF IT. WELL SIT BACK, AND RELAX BECAUSE WE'LL GIVE YOU </p>
  <p>A TRULY OUT OF THIS WORLD EXPERIENCE!</p>
  <br/>
  <button type="button" className="btn home-btn btn-light" name="button"><Link to="/destination" className="explore">EXPLORE</Link></button>
</div>
<br/>
<br/>
<br/>
<br/>
</div>
}


export default Home;