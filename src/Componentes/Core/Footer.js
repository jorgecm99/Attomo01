import React, { useState } from 'react'
import './Footer.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { faStar} from '@fortawesome/free-solid-svg-icons';

var payments = require('../../Assets/Images/payments.png')
var socialMedia = require('../../Assets/Images/socialmedia.png')
var wasap = require('../../Assets/Images/wasap.png')

const Footer = () => {
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);
  

  return (
    <div className='footer'>
      
        <div className='dropdown'>
          <div className='dropdown-menu'onClick={()=>setShow(!show)}>
            <p>Sobre nosotros</p>
            <span><FontAwesomeIcon icon={faAngleDown} /></span>
          </div>
          {
            show ? <div className='dropdown-bbb'>    
            <li><a target="_blank" href="https://bstadium.es/quienes-somos/" rel="noopener noreferrer" style={{color: "white"}}>Quienes somos</a></li>
           </div> : null
          }
           
          
        </div>

        <div className='dropdown'>
          <div className='dropdown-menu' onClick={()=>setShowTwo(!showTwo)}>
            <p>Legal</p>
            <span><FontAwesomeIcon icon={faAngleDown} /></span>
          </div>
          {
            showTwo ? <div className='dropdown-bbb'>  
            <li><a target="_blank" href="https://bstadium.es/politica-de-privacidad/" rel="noopener noreferrer" style={{color: "white"}}>Política de privacidad</a></li>
            <li><a target="_blank" href="https://bstadium.es/politica-de-cookies/" rel="noopener noreferrer" style={{color: "white"}}>Política de cookies</a></li>
            <li>Condiciones de compra</li>
          </div> : null
          }
          
        </div>

        <div className='dropdown'>
          <div className='dropdown-menu'  onClick={()=>setShowThree(!showThree)}>
            <p>Ayuda</p>
            <span><FontAwesomeIcon icon={faAngleDown} /></span>
          </div>
          {
            showThree ? <div className='dropdown-bbb'>    
            <li>hola@bstadium.es</li>
          </div> : null
          }        
        </div>

        

        

        <p className='text-green'>Canjea tu Sportbox</p>
      
        

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
              <li><a target="_blank" href="https://bstadium.es/quienes-somos/" rel="noopener noreferrer" style={{color: "white"}}>Quienes somos</a></li>
              <li><a target="_blank" href="https://bstadium.es/blog/" rel="noopener noreferrer" style={{color: "white"}}>Blog</a></li>
              <li>Centro de ayuda</li>
            </ul>
            <ul>
              <p><a target="_blank" href="https://bstadium.es/aviso-legal-y-terminos-de-uso/" rel="noopener noreferrer" style={{color: "white"}}>Legal</a></p>
              <li><a target="_blank" href="https://bstadium.es/politica-de-privacidad/" rel="noopener noreferrer" style={{color: "white"}}>Política de privacidad</a></li>
              <li><a target="_blank" href="https://bstadium.es/politica-de-cookies/" rel="noopener noreferrer" style={{color: "white"}}>Política de cookies</a></li>
              <li>Condiciones de compra</li>
            </ul>
            <ul>
              <p className='text-green-footer'>Canjea tu sportbox</p>
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