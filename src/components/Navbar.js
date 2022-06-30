import React, { useState } from "react";
import logo from "../images/Logo-HYDRAX.png"

function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <div className="navbar-container"><img src={logo} className="logo"/></div>
        <div className="Navbar-infos">
          <div>A Propos de Nous</div>
          <div>Fondateur</div>
          <div>Contact</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
