import React from 'react'
import './Matches.css'

var logoBstadium = require('../../../Assets/Icons/bstadium.png');
var versus = require('../../../Assets/Images/Group70.png');
var rectangulo = require('../../../Assets/Icons/rectangulo.png');
var bufanda = require('../../../Assets/Icons/bufanda.png');
var levante = require('../../../Assets/Images/levante.png');
var villarreal = require('../../../Assets/Images/villarreal.png');

function Matches() {
    const handleClick = () => {
        window.open("https://bstadium.es/entradas-de-partidos/entradas-partido-levante-villarreal/");
      };

  return (
      <section>
          <div className='container-main'>Partidos</div>
          <div className='container-popup'>
              <img className='logo-bstadium'src={logoBstadium} alt=''></img>
              <div>
                 <h3>¡No te lo pierdas!</h3>
                 <p>Sólo quedan 14 entradas con regalo:</p>
                 <p className='paragraph'>Bebida <span></span>o Bufanda<span></span></p>
          </div>
          </div>

          <div className='container'>
              <p className='date'>02/04/2022</p>
          <div className='container-matches'>
              <div className='container-team'>
                <h6 className='team-one'>levante</h6>  
                <img className='logo-team' src={levante} alt=''></img>
              </div>

              <div>
                <img className='logo-versus' src={versus} alt=''></img>
              </div>

              <div className='container-team-two'>  
                <img className='logo-team' src={villarreal} alt=''></img>
                <h6 className='team-two'>villarreal</h6> 
              </div>        
          </div>

          <div className='container-end'>
              <div className='progress-bar'>
                  <img src={rectangulo} alt=''></img>
                  <h6 className='progress-bar-text'>% ocupación</h6>
              </div>
              <button onClick={handleClick} className='btn-ticket'>
                  <div className='btn-display'>
                    <h6 className='btn-text'>Comprar entrada + Regalo</h6>
                    <img className='bufanda' src={bufanda} alt=''></img>
                  </div>         
              </button>
          </div>

          </div>

          
      </section>
    
  )
}

export default Matches