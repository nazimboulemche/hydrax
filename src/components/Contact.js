import React from 'react';

function Contact(){
    return(
        <footer className="contact" id="contact">
        <div className="container-contact">
          <div className="title">
            <h3 className="contact-title">CONTACTEZ-NOUS</h3>
          </div>
          <form action="contact.php" method="POST">
            <input type="text" name="Nom" placeholder="Entrer votre Nom" required id="nom" />
            <input type="text" name="Prenom" placeholder="Entrer votre Prénom" required id="prenom" />
            <input type="email" name="Email" placeholder="Entrer votre Adresse mail" required id="email" />
            <input type="number" name="Numero" placeholder="Entrer votre Numéro de Téléphone" id="numero" />
            <input type="text" name="Objet" placeholder="Entrer votre Objet" required id="objet" />
            <textarea name="Message" placeholder="Entrer votre Message" required id="message" defaultValue={""} />
            <button name="Button" type="submit">Envoyer</button>
          </form>
        </div>
        <div className="maps"> 
          <iframe className="frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.9418863701885!2d2.389148915555762!3d48.87838437928947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66dbf632c8cc5%3A0xb07d6c18f2b14b2b!2s18%20Rue%20de%20Crim%C3%A9e%2C%2075019%20Paris!5e0!3m2!1sfr!2sfr!4v1656013090505!5m2!1sfr!2sfr" width={450} height={350} style={{border: 0}} allowFullScreen loading="lazy" />
          <div className="contact-text">
            <h2>Email :</h2>
            <a>contact@hydrax.eu</a>
          </div>
        </div>
      </footer>
    )
}
export default Contact