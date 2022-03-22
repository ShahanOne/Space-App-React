import React from "react"
import { NavLink } from "react-router-dom";

function Navigation(){
return <div>

 <nav className="navbar navbar-expand-lg ">
 <div className="container-fluid">
   <a className="navbar-brand" href="http://shahanone.wordpress.com/"> <img src="logo.svg" alt="logo"/> </a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"><img src="icon-hamburger.svg" alt="hamburger"/></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div className="navbar-nav ms-auto">
       <NavLink className="nav-link " aria-current="page" to="/">00 HOME</NavLink>
       <NavLink className="nav-link"                      to="destination">01 DESTINATION</NavLink>
       <NavLink className="nav-link"                      to="crew">02 CREW</NavLink>
       <NavLink className="nav-link"                      to="technology">03 TECHNOLOGY</NavLink>
     </div>
   </div>
 </div>
</nav>
</div>
} 

export default Navigation;