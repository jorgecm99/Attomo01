import React, { useState } from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

function Button() {
    const [state, setState] = useState(false);

    const showDropDown = () => {
        setState(true)
    }

    const hideDropDown = () => {
        setState(false)      
    }

  return (
    
        <div className="drop-menu">
            <button><FontAwesomeIcon icon={faBars} style={{color: "white"}}/></button>
            
                <div className='drop-menu' onMouseEnter={showDropDown} onMouseLeave={hideDropDown}>
                    {state ? ( <ul onMouseEnter={showDropDown}>
                        <li>HHGHGHG</li>
                        <li>GGGGG</li>
                        <li>SSSSS</li>
                    </ul>) : 
                    null }             
                </div>          
        </div>   
  )
}

export default Button