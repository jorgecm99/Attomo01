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

    <div className="dropdown"><FontAwesomeIcon icon={faBars} style={{color: "white"}}/>
      <div className='dropdown-content'>
        <li><Link to="#" style={{textDecoration: "none", color: "white"}}>Entradas de partidos</Link></li>
        <li><Link to="#" style={{textDecoration: "none", color: "white"}}>Tours originales</Link></li>
        <li><Link to="#" style={{textDecoration: "none", color: "white"}}>Experiencias día de partido</Link></li>
        <li><Link to="#" style={{textDecoration: "none", color: "white"}}>Salta al campo</Link></li>
        <li><Link to="#" style={{textDecoration: "none", color: "white"}}>Experiencias virtuales</Link></li>
        <li><Link to="#" style={{textDecoration: "none", color: "white"}}>Sportbox</Link></li>
        <li><Link to="#" style={{textDecoration: "none", background: "grey"}}>Iniciar sesión</Link></li>
      </div>
    
    </div>
    

    <div className='image-container'>
        <Link to="#" style={{textDecoration: "none"}}>
        <img className='image-logo' src={logoStadium} alt=''></img>
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