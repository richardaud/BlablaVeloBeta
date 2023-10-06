import React from 'react'
import './about.css'
import velo1 from '../../assets/photo_vélo_4.jpg'
import velo2 from '../../assets/photo_vélo_6.jpg'
import velo3 from '../../assets/photo_vélo_2.jpg'
import icon1 from '../../assets/file-shield-solid.svg'
import icon2 from '../../assets/gift-solid.svg'
import icon3 from '../../assets/money-check-dollar-solid.svg'


function About() {
  return (
    <>
    <div className='container container__about'>
      <div className='about__funding'>
        <h1>Gratuit pour ses utilisateurs</h1>
        <img src={icon3} className='icon'/>
        <p>Aucun engagement et les frais de service sont offerts par votre agglo ou votre région.</p>
      </div>
      <div className='about__funding'>
        <h1>Bons cadeaux offerts par la collectivité</h1>
        <img src={icon2} className='icon'/>
        <p>Grâce à nos régions partenaires, vous bénéficiez de réductions et de bons cadeaux suivant les points cumulés à chaque trajet.</p>
      </div>
      <div className='about__funding'>
        <h1>Application sécurisée et connectée</h1>
        <img src={icon1} className='icon'/>
        <p>Vous êtes prévenu.e.s lorsque votre enfant est arrivé à son école</p>
      </div>

    </div>
    <div className='container container__about'>
      <div className='about__card'>
      <h1>Serénité</h1>
      <img src={velo1} />
      <p>Gardez l’esprit serein, BlablaVélo vous permet afin de sécuriser les trajets de vos enfants</p>
      </div>
      <div className='about__card'>
      <h1>Engagement</h1>
      <img src={velo2} />
      <p>BlaBlaVélo, c’est une plateforme d’action à grande échelle pour vous offrir un mode de transport engagé et un moyen de participer à la transformation durable de nos villes
      </p>
      </div>
      <div className='about__card'>
      <h1>Bonne humeur</h1>
      <img src={velo3} />
      <p>Joignez l’utile à l’agréable pour les déplacements de vos enfants!
        Avec Blablavélo c’est possible, nous allons leur faire
        adorer leurs trajets quotidiens</p>
        </div>
    </div>
    <div></div></>
  )
}

export default About