import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars} from '@fortawesome/free-solid-svg-icons';

var logoStadium = require('../../Assets/Images/image1.png');


function Header () {
    


  return (
    <header className='headerstyle'>

    <div className="dropdown">
      <div className='dropdown-icon'>
      <FontAwesomeIcon icon={faBars} style={{color: "white"}}/>
      </div>
      <div className='dropdown-content'>
        <li><a target="_blank" href="https://bstadium.es/entradas-de-partidos/" rel="noopener noreferrer">Entradas de partidos</a></li>
        <li><a target="_blank" href="https://bstadium.es/tours-originales/" rel="noopener noreferrer">Tours originales</a></li>
        <li><a target="_blank" href="https://bstadium.es/experiencias-con-entradas/" rel="noopener noreferrer">Experiencias día de partido"</a></li>
        <li><a target="_blank" href="https://bstadium.es/salta-al-campo/" rel="noopener noreferrer">Salta al campo</a></li>
        <li><a target="_blank" href="https://bstadium.es/experiencias-virtuales/" rel="noopener noreferrer">Experiencias virtuales</a></li>
        <li><a target="_blank" href="https://bstadium.es/sportbox/" rel="noopener noreferrer">Sportbox</a></li>
        <li><a target="_blank" href="https://bstadium.es/mi-cuenta/" rel="noopener noreferrer">Iniciar sesión</a></li>
      </div>
    
    </div>
    
    
    <div className='image-container'>
        <Link to="#" style={{textDecoration: "none"}}>
        <img className='image-logo' src={logoStadium} alt=''></img>
        </Link>    
    </div>
    
        <div className='cart-icon'>
        <a target="_blank" href="https://bstadium.es/carrito/" rel="noopener noreferrer"><FontAwesomeIcon icon={faShoppingCart}/></a>               
        </div>     
</header>


  )
}

export default Header