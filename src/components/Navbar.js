import React from "react";
import video from "../videos/oceanHorizon.mp4";
import logo from "../images/Logo-HYDRAX.png"


function Navbar() {
  return (
    <>
      <header className="baniere" id="baniere">
        <video autoPlay="autoplay" muted loop="infinite" src={video} type="video/mp4" />
        <div className="logo">
          <a href>
            <img src={logo} />
          </a>
        </div>
        <div className="baniere-text">
          <h1>Bienvenue chez Hydrax</h1>
          <p>
            Dans les cours et les courants d'eau, dans les sous-sols des villes,
            Hydrax crée l'étincelle et fait des eaux potables ou usées une énergie
            précieuse.
          </p>
          <p><span>L'énergie c'est l'avenir. <br />
                   L'avenir est notre métier</span></p>
        </div>
        <div className="sidebar">
          <nav>
            <ul>
              <li><a href="#baniere">Accueil</a></li>
              <li><a href="#nous">A propos de nous</a></li>
              <li><a href="#fondateurs">fondateurs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="btn-menu">
          <i className="fas fa-bars" />
          <i className="fas fa-times" />
        </div>
        
      </header>
      
    </>
  );
}

export default Navbar;
