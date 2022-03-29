import React from 'react'
import './Footer.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { faStar} from '@fortawesome/free-solid-svg-icons';

var payments = require('../../Assets/Images/payments.png')
var socialMedia = require('../../Assets/Images/socialmedia.png')
var wasap = require('../../Assets/Images/wasap.png')

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-first'>
        <div className='dropdown-menu'>
          <p>Sobre nosotros</p>
          <span><FontAwesomeIcon icon={faAngleDown} /></span>
        <div className='dropdown-content'>
          <ul>
            <li>Quienes somos</li>
          </ul>
        </div>
        </div>

        <div className='dropdown-menu'>
          <p>Legal</p>
          <span><FontAwesomeIcon icon={faAngleDown} /></span>
        <div className='dropdown-content'>
          <ul>
            <li>Política de privacidad</li>
            <li>Política de cookies</li>
            <li>Condiciones de compra</li>
          </ul>
        </div>
        </div>

        <div className='dropdown-menu'>
          <p>Ayuda</p>
          <span><FontAwesomeIcon icon={faAngleDown} /></span>
        <div className='dropdown-content'>
          <ul>
            <li>hola@bstadium.es</li>
          </ul>
        </div>
        </div>
        <h3 className='text-green'>Canjear tu Sportbox</h3>
      </div>

      <div className='footer-second' >
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
        <div className='wasap-logo'>
        <img  className='wasap-pic' src={wasap} alt=''></img>
        </div>

        <div className='footer-desktop'>
          <div className='footer-desktop-one'>
            <ul>
              <p>Sobre nosotros</p>
              <li>Quienes somos</li>
              <li>Blog</li>
              <li>Centro de ayuda</li>
            </ul>
            <ul>
              <p>Legal</p>
              <li>Política de privacidad</li>
              <li>Política de cookies</li>
              <li>Condiciones de compra</li>
            </ul>
            <ul>
              <p className='text-green'>Canjea tu sportbox</p>
              <li>Ayuda</li>
              <li>+4 618 45 36 90</li>
              <li>hola@bstadium.es</li>
            </ul>
          </div>

          <div className='footer-desktop-second'>
            <ul>
              <p>Valoraciones</p>
              <li>9,5/10</li>
              <li>Unas 650 opiniones</li>
              <li></li>
            </ul>

            <ul>
              <p>Formas de pago</p>
              <img className='img-payment' src={payments} alt=''></img>
            </ul>

            <ul>
              <p>Síguenos</p>
              <img className='img-payment' src={socialMedia} alt=''></img>
            </ul>
          </div>
        </div>
        
        

    </div>
    
  )
}

export default Footer