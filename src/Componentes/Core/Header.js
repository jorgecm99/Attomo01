import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import tickets from '../../Assets/Icons/tickets.svg'
import tours from '../../Assets/Icons/tours.svg'
import experiencias from '../../Assets/Icons/experiencias.svg'
import balon from '../../Assets/Icons/balon.svg'
import virtuales from '../../Assets/Icons/virtuales.svg'
import box from '../../Assets/Icons/box.svg'
import user from '../../Assets/Icons/user.svg'

var logoStadium = require('../../Assets/Images/image1.png');


function Header () {
    


  return (
    <header className='headerstyle'>
      
        <div className="dropdown">
          <div className='dropdown-icon'>
            <FontAwesomeIcon icon={faBars} style={{color: "white"}}/>
          </div>
        <div className='dropdown-content'>
          <li><img className='list-icon' src={tickets} alt=''/><a target="_blank" href="https://bstadium.es/entradas-de-partidos/" rel="noopener noreferrer" style={{color: "white"}}>Entradas de partidos</a></li>
          <li><img className='list-icon' src={tours} alt=''/><a target="_blank" href="https://bstadium.es/tours-originales/" rel="noopener noreferrer" style={{color: "white"}}>Tours originales</a></li>
          <li><img className='list-icon' src={experiencias} alt=''/><a target="_blank" href="https://bstadium.es/experiencias-con-entradas/" rel="noopener noreferrer" style={{color: "white"}}>Experiencias día de partido</a></li>
          <li><img className='list-icon' src={balon} alt=''/><a target="_blank" href="https://bstadium.es/salta-al-campo/" rel="noopener noreferrer" style={{color: "white"}}>Salta al campo</a></li>
          <li><img className='list-icon' src={virtuales} alt=''/><a target="_blank" href="https://bstadium.es/experiencias-virtuales/" rel="noopener noreferrer" style={{color: "white"}}>Experiencias virtuales</a></li>
          <li><img className='list-icon' src={box} alt=''/><a target="_blank" href="https://bstadium.es/sportbox/" rel="noopener noreferrer" style={{color: "white"}}>Sportbox</a></li>
          <li><img className='list-icon' src={user} alt=''/><a target="_blank" href="https://bstadium.es/mi-cuenta/" rel="noopener noreferrer" style={{color: "white"}}>Iniciar sesión</a></li>
        </div>
    
        </div>
    
    
        <div className='image-container'>
          <Link to="#" style={{textDecoration: "none"}}>
            <img className='image-logo' src={logoStadium} alt=''></img>
          </Link>    
        </div>
    
        <div className='cart-icon'>
          <a target="_blank" href="https://bstadium.es/carrito/" rel="noopener noreferrer" style={{color: "white"}}><FontAwesomeIcon icon={faShoppingCart}/></a>               
        </div>
         
</header>


  )
}

export default Header