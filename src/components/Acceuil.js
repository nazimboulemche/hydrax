import React from "react";
import videos from "../videos/Video_HYDRAX_2021.mov";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";

function Acceuil() {
  return (
    <section class="nous" id="nous">
      <div class="titre-text">
        <h1>A propos de nous</h1>
        <br />
        <p>
          Hydrax exploite une technique innovante d’hydrolienne qui consiste à
          l'insérer dans des canalisations sans percement ni engrenages.
          <br />Cette hydrolienne peut également être utilisée au fil de l’eau.
        </p>
      </div>
      <div class="detail-pres">
        <div class="presentation">
          <h1>Activité</h1>
          <div class="description">
            <div class="descri-icon">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <div class="descri-text">
              <p>Production d'électricité.</p>
            </div>
          </div>
          <h1>Historique</h1>
          <div class="description">
            <div class="descri-icon">
            <FontAwesomeIcon icon={faGlobe} />
            </div>
            <div class="descri-text">
              <p>
                Afin de répondre aux besoins en électricité, Hydrax propose une
                électricité décarbonée sans intermitance à la portée de tous
                grâce à l'exploitation d'une hydrolienne.
              </p>
            </div>
          </div>
          <h1>Objectifs</h1>
          <div class="description">
            <div class="descri-icon">
            <FontAwesomeIcon icon={faCrosshairs} />
            </div>
            <div class="descri-text">
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
        <div class="video-para">
          <video controls="controls" poster="">
            <source
              src={videos}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>

  );
}
export default Acceuil;
