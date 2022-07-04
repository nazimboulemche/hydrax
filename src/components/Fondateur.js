import React from 'react';
import photo from '../images/Adnan_Barh.jpg'
function Fondateur(){
    return(
        <div className="fondateurs" id="fondateurs">
        <div className="titre-text">
          <h1>Fondateur</h1>
        </div>
        <div className="membres_liste">
          <div className="membre">
            <img src={photo} alt="photo de Adnan Barhoumi" />
            <div className="text_on">
              <div className="descript">
                <h3>Adnan Bahroumi - Président</h3>
                <p>
                  Adnan Barhoumi inventeur et président de HYDRAX de nationalité
                  tunisienne né à Tunis le 09/11/1963. Membre de la féderation
                  française des inventeurs, à son actif plusieurs inventions de
                  turbines destinées à la production d'energie électrique,
                  propulseurs sous-marins, pompes de secours sur les pétroliers.
                  Ancien de ESI sup info Montreuil, il compte des décennies
                  d'experiences de management dans le négoce internationale, le
                  BTP, et l'agroalimentaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Fondateur