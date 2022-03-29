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
        <li><Link to="https://bstadium.es/entradas-de-partidos/" style={{textDecoration: "none", color: "white"}}>Entradas de partidos</Link></li>
        <li><Link to="https://bstadium.es/tours-originales/" style={{textDecoration: "none", color: "white"}}>Tours originales</Link></li>
        <li><Link to="https://bstadium.es/experiencias-con-entradas/" style={{textDecoration: "none", color: "white"}}>Experiencias día de partido</Link></li>
        <li><Link to="https://bstadium.es/salta-al-campo/" style={{textDecoration: "none", color: "white"}}>Salta al campo</Link></li>
        <li><Link to="https://bstadium.es/experiencias-virtuales/" style={{textDecoration: "none", color: "white"}}>Experiencias virtuales</Link></li>
        <li><Link to="https://bstadium.es/sportbox/" style={{textDecoration: "none", color: "white"}}>Sportbox</Link></li>
        <li><Link to="https://bstadium.es/mi-cuenta/" style={{textDecoration: "none", color: "white"}}>Iniciar sesión</Link></li>
      </div>
    
    </div>
    
    
    <div className='image-container'>
        <Link to="#" style={{textDecoration: "none"}}>
        <img className='image-logo' src={logoStadium} alt=''></img>
        </Link>    
    </div>
    
        <div className='cart-icon'>
            <Link to="https://bstadium.es/carrito/"><FontAwesomeIcon icon={faShoppingCart} style={{color: "white"}}/></Link>               
        </div>     
</header>


  )
}

export default Header