import React from 'react'
import { NavLink } from 'react-router-dom'
import LOGO from '../../assets/logo2.svg' //Import du logo
import Nav from '../nav/nav'
import './header.css' //Import du style



//Composant Header (En-tête)
const Header = () => {
    return (
      <header>
        <div className=" header__container">
          <div className="logo">
            <NavLink to="/">
              {' '}
              {/*Clic sur logo permet le retour à la page d'accueil*/}
              <img src={LOGO} alt="logo" className="img__logo" />
            </NavLink>
          </div>
          <Nav /> {/*Composant 'menu de navigation'*/}
        </div>
      </header>
    )
  }
  
  export default Header