import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars} from '@fortawesome/free-solid-svg-icons';

var logoStadium = require('../../Assets/Images/image1.png')

const Header = () => {


  return (
    <header className='headerstyle'>
    <div className="menu">
    <Link to="/cart"><FontAwesomeIcon icon={faBars} style={{color: "white"}}/></Link>  
    </div>

    <div className='image-container'>
        <Link to="#" style={{textDecoration: "none"}}>
        <img src={logoStadium} alt=''></img>
        </Link>    
    </div>

    <nav>
    <ul className='toggle-menu'>
        <li><Link to="#" style={{textDecoration: "none"}}>Entradas de partidos</Link></li>
        <li><Link to="#" style={{textDecoration: "none"}}>Tours originales</Link></li>
        <li><Link to="#" style={{textDecoration: "none"}}>Experiencias día de partido</Link></li>
        <li><Link to="#" style={{textDecoration: "none"}}>Salta al campo</Link></li>
        <li><Link to="#" style={{textDecoration: "none"}}>Experiencias virtuales</Link></li>
        <li><Link to="#" style={{textDecoration: "none"}}>Sportbox</Link></li>
        <li><Link to="#" style={{textDecoration: "none"}}>Iniciar sesión</Link></li>
        
    </ul>

    
        <div className='cart-style'>
            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} style={{color: "white"}}/></Link>               
        </div>
    </nav>        
</header>
  )
}

export default Header