import React from 'react'
import './Footer.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { faStar} from '@fortawesome/free-solid-svg-icons';

var payments = require('../../Assets/Images/payments.png')
var socialMedia = require('../../Assets/Images/socialmedia.png')

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-header'></div>
      <ul className='footer-first'>
        <li>Sobre nosotros<span><FontAwesomeIcon icon={faAngleDown} /></span></li>
        <li>Legal<span><FontAwesomeIcon icon={faAngleDown} /></span></li>
        <li>Ayuda<span><FontAwesomeIcon icon={faAngleDown} /></span></li>
      </ul>

      <div className='footer-second' >
        <h3 className='text-green'>Canjear tu Sportbox</h3>
        <div>
          <h3>Valoraciones</h3>
          <div className='footer-stars'>
            <p>9,5/10</p>
            <div className='iconlist'>
              <div><FontAwesomeIcon icon={faStar}/></div>
              <div><FontAwesomeIcon icon={faStar}/></div>
              <div><FontAwesomeIcon icon={faStar}/></div>
              <div><FontAwesomeIcon icon={faStar}/></div>
              <div><FontAwesomeIcon icon={faStar}/></div>
          </div>

          </div>
          
          
          <p className='parr-one'>Unas 650 opiniones sobre BSTADIUM</p>
        </div>
      </div>

      <div className='footer-three'>
        <div>
          <h3>Formas de pago</h3>
          <img className='img-payment' src={payments} alt=''></img>
        </div>

        <div>
          <h3>Síguenos</h3>
          <img src={socialMedia} alt=''></img>
        </div>
      </div>

        

        <h5>© BSTADIUM</h5>

    </div>
    
  )
}

export default Footer