import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Navigation,
  Crew,
  Home,
  Destination,
  Technology,
  Moon,
  Mars,
  Europa,
  Titan,
  Engineer,
  Commander,
  Specialist,
  Pilot,
  Tablet,
  Vehicle,
  SpaceCapsule
} from "./components";
ReactDOM.render( <Router>
  <Navigation />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/crew" element={<Crew />} >
        <Route index element={<Engineer />} />
        <Route path="/crew/specialist" element={<Specialist />} />
        <Route path="/crew/commander" element={<Commander />} />
        <Route path="/crew/pilot" element={<Pilot />} /> 
    </Route>   
    <Route path="/technology" element={<Technology />}>
        <Route index element={<SpaceCapsule />} />
        <Route path="/technology/vehicle" element={<Vehicle />} />
        <Route path="/technology/tablet" element={<Tablet />} /> 
    </Route>
    <Route path="/destination" element={<Destination />}>
        <Route index element={<Moon />} />
        <Route path="/destination/mars" element={<Mars />} />
        <Route path="/destination/titan" element={<Titan />} />
        <Route path="/destination/europa" element={<Europa />} />
    </Route>
  </Routes>

</Router>,document.getElementById('root'));


// <Route path="" element={<Posts />} />
// <Route path=":postSlug" element={<Post />} />