import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

var logoStadium = require('../../Assets/Images/image1.png')

function Header () {
    const [dropdown, setDropdown] = useState(false);

    const abrirCerrarDropdown = () => {
        setDropdown(!dropdown);
    }


  return (
    <header className='headerstyle'>
    <div className="menu">
    <Link to="/cart"><FontAwesomeIcon icon={faBars} style={{color: "white"}}/></Link>  
    </div>

    <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
        <DropdownToggle caret></DropdownToggle>

        <DropdownMenu>
            <DropdownItem>Entradas de partidos</DropdownItem>
            <DropdownItem>Tours originales</DropdownItem>
            <DropdownItem>Experiencias día de partido</DropdownItem>
            <DropdownItem>Salta al campo</DropdownItem>
            <DropdownItem>Experiencias virtuales</DropdownItem>
            <DropdownItem>Sportbox</DropdownItem>
            <DropdownItem>Iniciar sesión</DropdownItem>
        </DropdownMenu>

    </Dropdown>
    

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