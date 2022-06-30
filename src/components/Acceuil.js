import React from "react";
import video from "../videos/oceanHorizon.mp4";
import videos from "../videos/Video_HYDRAX_2021.mov";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";

function Acceuil() {
  return (
    <div>
      <div className="header" /* PART I */>
        <video src={video} autoPlay loop muted className="video" />
        <div className="text">
          <h1 className="h1">Bienvenue chez Hydrax</h1>
          <h2 className="h2">
            Dans les cours et les courants d'eau, dans les sous-sols des villes,
            Hydrax crée l'étincelle et fait des eaux potables ou usées une
            énergie précieuse.
          </h2>
          <h3 className="h3">L'énergie d'avenir, c'est notre métier</h3>
        </div>
      </div>
      <div className="propos" /*PART II */>
        <h1 className="about">A propos de nous</h1>
        <p>
          Hydrax exploite une technique innovante d’hydrolienne qui consiste à
          l'insérer dans des canalisations sans percement ni engrenages.
          <br />
          Cette hydrolienne peut également être utilisée au fil de l’eau.
        </p>
        <div className="presentation">
          <div className="detail-pres">
            <h1>Activité</h1>
            <div className="description">
              <div className="descri-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>

              <p>Production d'électricité.</p>
            </div>
            <h1>Historique</h1>
            <div className="description">
              <div className="descri-icon">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <p>
                Afin de répondre aux besoins en électricité, Hydrax propose une
                électricité décarbonée sans intermitance à la portée de tous
                grâce à l'exploitation d'une hydrolienne.
              </p>
            </div>
            <div>
              <h1>Objectifs</h1>
              <div className="description">
                <div className="descri-icon">
                  <FontAwesomeIcon icon={faCrosshairs} />
                </div>

                <p>
                  Fournir une électricité rapidement avec un faible
                  investissement.
                </p>
                <p>
                  Permettre à tous d'accéder à l'énergie à partir des
                  canalisations.
                </p>
              </div>
            </div>
          </div>
          <div className="video-para">
          <video src={videos} controls="controls"/>
        </div>
        </div>
        
      </div>
    </div>
  );
}
export default Acceuil;
