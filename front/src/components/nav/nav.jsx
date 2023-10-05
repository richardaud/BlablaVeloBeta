import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css' //Importation du style

//Composant 'Menu de navigation'
const Nav = () => {
  return (
    <div>
      <ul className="navigation">
        <NavLink
          to="/" //Lien vers page d'accueil
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li className="nav">Accueil</li>
        </NavLink>

        <NavLink
          to="about" //Lien vers page A propos
          className={({ isActive }) => (isActive ? 'active' : 'inactive')} //Fonction permettant de sytliser le lien lorsque la page est active
        >
          <li className="nav">Le concept</li>
        </NavLink>

        <NavLink
          to="log" //Lien vers page de connexion
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li className="nav">Se connecter</li>
        </NavLink>

        <NavLink
          to="sign" //Lien vers page d'inscription
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li className="nav">S'inscrire</li>
        </NavLink>

        <NavLink
          to="user" //Lien vers page d'inscription
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li className="nav">Profil</li>
        </NavLink>

      </ul>
    </div>
  )
}

export default Nav
