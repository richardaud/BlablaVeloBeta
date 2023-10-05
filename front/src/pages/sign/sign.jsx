import React, { useState } from 'react';
import './sign.css';

function Sign() {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [motDePasseConfirmation, setMotDePasseConfirmation] = useState('');
  const [erreurMotDePasse, setErreurMotDePasse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation du mot de passe
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(motDePasse)) {
      setErreurMotDePasse('Le mot de passe doit contenir au moins 8 caractères, dont au moins un caractère spécial.');
      return;
    }

    if (motDePasse !== motDePasseConfirmation) {
      setErreurMotDePasse('Les mots de passe ne correspondent pas.');
    } else {
      setErreurMotDePasse('');
      console.log('Prénom:', prenom);
      console.log('Nom:', nom);
      console.log('Mot de passe:', motDePasse);
    }
  };

  return (
    <div className='log'>
      <div className="login">
        <h1 className='title__sign'>Bienvenue chez nous</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Entrez votre prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Entrez votre nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Entrez votre mot de passe"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmez votre mot de passe"
            value={motDePasseConfirmation}
            onChange={(e) => setMotDePasseConfirmation(e.target.value)}
            required
          />
          {erreurMotDePasse && <p className="erreur">{erreurMotDePasse}</p>}
          <button type="submit">S'INSCRIRE</button>
        </form>
      </div>
    </div>
  );
}

export default Sign;
