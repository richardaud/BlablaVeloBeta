import React, {usestate} from 'react'
import './log.css'
import profil from '../../assets/portrait-femme.jpg'

function Log() {
  return (
    <div className='log'>
    <div class="login">
      <img src={profil} />
      <h3>Bienvenue</h3>
      <h2>Marion Dupuis</h2>

      <form class="login-form">
        <input type="password" placeholder="Entrez votre mot de passe" />
        <button type="submit">SE CONNECTER</button>
        <a href="https://website.com">Mot de passe oublié?</a>
      </form>
    </div>
  </div>
  )
}

export default Log

