import React from 'react'
import { NavLink } from 'react-router-dom'
import './banner.css'
import velo from '../../assets/photo_vélo_1.jpeg'


function Banner() {
  return (
    <>
      <div className='container__banner'>
        <div className='banner'>Avec BlaBlaVélo, permettez à vos enfants de se rendre à l'école à vélo en toute sécurité</div>
          <div><img src={velo} alt="cyclistes" className="img__velo" />
        </div>
      </div>
      <div className='description__banner'>
        <p>BlaBlaVélo vous met en relation avec des parents d'élèves de la même école que votre enfant. 
          Chaque matin, votre enfant pourra se rendre à vélo à l'école, encadré par des parents ou des grands-parents.</p>
        <p>Ce service vous permet de vous rendre sur votre lieu de travail en toute serénité.</p>
      </div>
      <NavLink
          to="about" //Lien vers page A propos
          className='container__button'>
      <div >
          <li className='button'>Découvrir notre concept</li>
          </div>
        </NavLink>
     

    
    </>
  )
}

export default Banner