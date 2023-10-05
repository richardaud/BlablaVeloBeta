import React from 'react'
import './about.css'
import velo1 from '../../assets/photo_vélo_4.jpg'
import velo2 from '../../assets/photo_vélo_6.jpg'
import velo3 from '../../assets/photo_vélo_2.jpg'

function About() {
  return (
    <><div className='container container__about'>
      <div className='about__card'>
      <h1>Serénité</h1>
      <img src={velo1} />
      <p>Gardez l’esprit serein, BlablaVélo vous permet afin de sécuriser les trajets de vos enfants</p>
      </div>
      <div className='about__card'>
      <h1>Engagement</h1>
      <img src={velo2} />
      <p>BlaBlaVélo c’est une plateforme d’action à grande échelle pour vous offrir un mode de transport engagé et un moyen de participer à la transformation durable de nos villes
      </p>
      </div>
      <div className='about__card'>
      <h1>Bonne humeur</h1>
      <img src={velo3} />
      <p>Joignez l’utile à l’agréable pour les déplacements de vos enfants!
        Avec Klaxit c’est possible, nous allons leur faire
        adorer leurs trajets quotidiens</p>
        </div>
    </div>
    <div></div></>
  )
}

export default About