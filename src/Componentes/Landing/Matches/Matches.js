import React, {useState} from 'react';
import './Matches.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

var logoBstadium = require('../../../Assets/Icons/bstadium.png');
var versus = require('../../../Assets/Images/Group70.png');
var rectangulo = require('../../../Assets/Icons/rectangulo.png');
var linea = require('../../../Assets/Images/line.png');

var bufanda = require('../../../Assets/Icons/bufanda.png');
var bebida = require('../../../Assets/Icons/bebida.png');

var levante = require('../../../Assets/Images/levante.png');
var villarreal = require('../../../Assets/Images/villarreal.png');
var celta = require('../../../Assets/Images/celta.png');
var madrid = require('../../../Assets/Images/madrid.png');
var granada = require('../../../Assets/Images/granada.png');
var rayo = require('../../../Assets/Images/rayo.png');
var valladolid = require('../../../Assets/Images/valladolid.png');
var lugo = require('../../../Assets/Images/lugo.png');
var atletico = require('../../../Assets/Images/atletico.png');
var alaves = require('../../../Assets/Images/alaves.png');
var athletic = require('../../../Assets/Images/bilbao.png');
var elche = require('../../../Assets/Images/elche.png');
var barcelona = require('../../../Assets/Images/barcelona.png');
var sevilla = require('../../../Assets/Images/sevilla.png');
var getafe = require('../../../Assets/Images/getafe.jpg');
var osasuna = require('../../../Assets/Images/osasuna.png');
var almeria = require('../../../Assets/Images/almeria.png');
var espanyol = require('../../../Assets/Images/espanyol.png');
var betis = require('../../../Assets/Images/betis.png');
var cadiz = require('../../../Assets/Images/cadiz.png');
var mallorca = require('../../../Assets/Images/mallorca.png');
var ponferradina = require('../../../Assets/Images/ponferradina.png');
var sociedad = require('../../../Assets/Images/sociedad.png');
var huesca = require('../../../Assets/Images/huesca.png');
var valencia = require('../../../Assets/Images/valencia.png');


function Matches() {
    const [page, setPage] = useState(1);

    const pageOne = () => {
        setPage(1)
    }

    const pageTwo = () => {
        setPage(2)
    }

    const pageThree = () => {
        setPage(3)
    }

    const pageFour = () => {
        setPage(4)
    }

    const pageFive = () => {
        setPage(5)
    }

    const next = () => {
        if(page<5){
            setPage(page + 1)
        }
    }

    const prev = () => {
        if(page>1){
            setPage(page - 1)
        }
    }


    const handleClick = () => {
        window.open("https://bstadium.es/entradas-de-partidos/entradas-partido-levante-villarreal/");
      };

  return (
      <div>
          <div className='container-main'>Partidos</div>
          <div className='container-popup'>
              <img className='logo-bstadium'src={logoBstadium} alt=''></img>
              <div className='container-popup-right'>
                <div>
                  <h3>¡No te lo pierdas!</h3>
                </div>
                <div>
                  <p>Sólo quedan 14 entradas con regalo:</p>
                </div>
                 
                 <div className='paragraph'>Bebida 
                 <div className='circulo'>
                   <img className='icon-one' src={bebida} alt=''></img>
                 </div>
                 o Bufanda
                 <div className='circulo'>
                   <img className='icon-two' src={bufanda} alt=''></img>
                 </div>
               </div>
          </div>
          </div>


{/* Start of matches container */}
        <div className='slider'>

            {page === 1 ?
            <div className='container-one'>


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

{/* Atletico - Alaves */}

<div className='container'>
              <p className='date'>02/04/2022</p>
          <div className='container-matches'>
              <div className='container-team'>
                <h6 className='team-one'>atletico</h6>  
                <img className='logo-team' src={atletico} alt=''></img>
              </div>

              <div>
                <img className='logo-versus' src={versus} alt=''></img>
              </div>

              <div className='container-team-two'>  
                <img className='logo-team' src={alaves} alt=''></img>
                <h6 className='team-two'>alaves</h6> 
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
                    <img className='bufanda' src={bebida} alt=''></img>
                  </div>         
              </button>
          </div>
          </div>

{/* Valladolid - Lugo */}

          <div className='container'>
    <p className='date'>02/04/2022</p>
<div className='container-matches'>
    <div className='container-team'>
      <h6 className='team-one'>valladolid</h6>  
      <img className='logo-team' src={valladolid} alt=''></img>
    </div>

    <div>
      <img className='logo-versus' src={versus} alt=''></img>
    </div>

    <div className='container-team-two'>  
      <img className='logo-team' src={lugo} alt=''></img>
      <h6 className='team-two'>lugo</h6> 
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
          


{/* Celta - Real Madrid */}
<div className='container'>
              <p className='date'>02/04/2022</p>
          <div className='container-matches'>
              <div className='container-team'>
                <h6 className='team-one'>celta</h6>  
                <img className='logo-team' src={celta} alt=''></img>
              </div>

              <div>
                <img className='logo-versus' src={versus} alt=''></img>
              </div>

              <div className='container-team-two'>  
                <img className='logo-team' src={madrid} alt=''></img>
                <h6 className='team-two'>real madrid</h6> 
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

          {/* Granada - Rayo */}

          <div className='container'>
              <p className='date'>03/04/2022</p>
          <div className='container-matches'>
              <div className='container-team'>
                <h6 className='team-one'>granada</h6>  
                <img className='logo-team' src={granada} alt=''></img>
              </div>

              <div>
                <img className='logo-versus' src={versus} alt=''></img>
              </div>

              <div className='container-team-two'>  
                <img className='logo-team' src={rayo} alt=''></img>
                <h6 className='team-two'>rayo</h6> 
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
                    <img className='bufanda' src={bebida} alt=''></img>
                  </div>         
              </button>
          </div>
          </div>


          {/* Athletic - Elche */}

          <div className='container'>
              <p className='date'>03/04/2022</p>
          <div className='container-matches'>
              <div className='container-team'>
                <h6 className='team-one'>athletic</h6>  
                <img className='logo-team' src={athletic} alt=''></img>
              </div>

              <div>
                <img className='logo-versus' src={versus} alt=''></img>
              </div>

              <div className='container-team-two'>  
                <img className='logo-team' src={elche} alt=''></img>
                <h6 className='team-two'>elche</h6> 
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


          {/* Barcelona - Sevilla */}

          <div className='container'>
              <p className='date'>03/04/2022</p>
          <div className='container-matches'>
              <div className='container-team'>
                <h6 className='team-one'>barcelona</h6>  
                <img className='logo-team' src={barcelona} alt=''></img>
              </div>

              <div>
                <img className='logo-versus' src={versus} alt=''></img>
              </div>

              <div className='container-team-two'>  
                <img className='logo-team' src={sevilla} alt=''></img>
                <h6 className='team-two'>sevilla fc</h6> 
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


          {/* Sevilla - Granada */}

          <div className='container'>
              <p className='date'>08/04/2022</p>
          <div className='container-matches'>
              <div className='container-team'>
                <h6 className='team-one'>sevilla fc</h6>  
                <img className='logo-team' src={sevilla} alt=''></img>
              </div>

              <div>
                <img className='logo-versus' src={versus} alt=''></img>
              </div>

              <div className='container-team-two'>  
                <img className='logo-team' src={granada} alt=''></img>
                <h6 className='team-two'>granada</h6> 
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


          {/* Madrid - Getafe */}

          <div className='container'>
              <p className='date'>09/04/2022</p>
          <div className='container-matches'>
              <div className='container-team'>
                <h6 className='team-one'>Real Madrid</h6>  
                <img className='logo-team' src={madrid} alt=''></img>
              </div>

              <div>
                <img className='logo-versus' src={versus} alt=''></img>
              </div>

              <div className='container-team-two'>  
                <img className='logo-team' src={getafe} alt=''></img>
                <h6 className='team-two'>getafe</h6> 
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


          {/* Osasuna - Alavés */}

          <div className='container'>
              <p className='date'>10/04/2022</p>
          <div className='container-matches'>
              <div className='container-team'>
                <h6 className='team-one'>osasuna</h6>  
                <img className='logo-team' src={osasuna} alt=''></img>
              </div>

              <div>
                <img className='logo-versus' src={versus} alt=''></img>
              </div>

              <div className='container-team-two'>  
                <img className='logo-team' src={alaves} alt=''></img>
                <h6 className='team-two'>alavés</h6> 
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
        </div>:null
        }


          {/* -----------PAGINA 2------------ */}
          {page === 2 ? 
          <div className='container-two'>

          {/* Levante - Barcelona */}

          <div className='container'>
              <p className='date'>10/04/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>levante</h6>  
                  <img className='logo-team' src={levante} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={barcelona} alt=''></img>
                  <h6 className='team-two'>barcelona</h6> 
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

            {/* Real Madrid - Chelsea */}
            <div className='container'>
              <p className='date'>12/04/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>real madrid</h6>  
                  <img className='logo-team' src={madrid} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={barcelona} alt=''></img>
                  <h6 className='team-two'>chelsea</h6> 
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

            {/* Atletico Madrid - Manchester City */}
            <div className='container'>
              <p className='date'>13/04/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>atletico</h6>  
                  <img className='logo-team' src={atletico} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={barcelona} alt=''></img>
                  <h6 className='team-two'>manchester city</h6> 
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
                            <img className='bufanda' src={bebida} alt=''></img>
                        </div>         
                    </button>
                </div>
            </div>


            {/* Barcelona - Eintracht */}
            <div className='container'>
              <p className='date'>14/04/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>barcelona</h6>  
                  <img className='logo-team' src={barcelona} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={barcelona} alt=''></img>
                  <h6 className='team-two'>eintracht</h6> 
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


            {/* Granada - Levante */}
            <div className='container'>
              <p className='date'>17/04/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>granada</h6>  
                  <img className='logo-team' src={granada} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={levante} alt=''></img>
                  <h6 className='team-two'>levante</h6> 
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
                            <img className='bufanda' src={bebida} alt=''></img>
                        </div>         
                    </button>
                </div>
            </div>


            {/* Valladolid - Almeria */}
            <div className='container'>
              <p className='date'>17/04/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>valladolid</h6>  
                  <img className='logo-team' src={valladolid} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={almeria} alt=''></img>
                  <h6 className='team-two'>almeria</h6> 
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


            {/* Athletic - Celta */}
            <div className='container'>
              <p className='date'>17/04/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>athletic</h6>  
                  <img className='logo-team' src={athletic} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={celta} alt=''></img>
                  <h6 className='team-two'>celta</h6> 
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


            {/* Atletico - Espanyol */}
            <div className='container'>
              <p className='date'>17/04/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>atlético</h6>  
                  <img className='logo-team' src={atletico} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={espanyol} alt=''></img>
                  <h6 className='team-two'>espanyol</h6> 
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
                            <img className='bufanda' src={bebida} alt=''></img>
                        </div>         
                    </button>
                </div>
            </div>


            {/* Sevilla - Madrid */}
            <div className='container'>
              <p className='date'>17/04/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>sevilla</h6>  
                  <img className='logo-team' src={sevilla} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={madrid} alt=''></img>
                  <h6 className='team-two'>real madrid</h6> 
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


            {/* Barcelona - Cadiz */}
            <div className='container'>
              <p className='date'>17/04/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>barcelona</h6>  
                  <img className='logo-team' src={barcelona} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={cadiz} alt=''></img>
                  <h6 className='team-two'>cadiz</h6> 
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

          </div>:null
        }







          {/* -----------PAGINA 3 ------------- */}
          {page === 3 ? 
          <div className='container-three'>

              {/* Celta - Getafe */}
            <div className='container'>
              <p className='date'>20/04/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>celta</h6>  
                  <img className='logo-team' src={celta} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={getafe} alt=''></img>
                  <h6 className='team-two'>getafe</h6> 
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


            {/* Atletico - Granada */}
            <div className='container'>
              <p className='date'>20/04/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>atlético</h6>  
                  <img className='logo-team' src={atletico} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={granada} alt=''></img>
                  <h6 className='team-two'>granada</h6> 
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
                            <img className='bufanda' src={bebida} alt=''></img>
                        </div>         
                    </button>
                </div>
            </div>


            {/* Osasuna - Madrid */}
            <div className='container'>
              <p className='date'>20/04/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>osasuna</h6>  
                  <img className='logo-team' src={osasuna} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={madrid} alt=''></img>
                  <h6 className='team-two'>real madrid</h6> 
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


            {/* Levante - Sevilla */}
            <div className='container'>
              <p className='date'>20/04/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>levante</h6>  
                  <img className='logo-team' src={levante} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={sevilla} alt=''></img>
                  <h6 className='team-two'>sevilla</h6> 
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


            {/* Sevilla - Cadiz */}
            <div className='container'>
              <p className='date'>01/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>sevilla</h6>  
                  <img className='logo-team' src={sevilla} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={cadiz} alt=''></img>
                  <h6 className='team-two'>cadiz</h6> 
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


            {/* athletic - atletico */}
            <div className='container'>
              <p className='date'>01/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>athletic</h6>  
                  <img className='logo-team' src={athletic} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={atletico} alt=''></img>
                  <h6 className='team-two'>atlético</h6> 
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


            {/* Valladolid - Real sociedad */}
            <div className='container'>
              <p className='date'>01/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>valladolid</h6>  
                  <img className='logo-team' src={valladolid} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={sociedad} alt=''></img>
                  <h6 className='team-two'>real sociedad b</h6> 
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


            {/* granada - celta */}
            <div className='container'>
              <p className='date'>01/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>granada</h6>  
                  <img className='logo-team' src={granada} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={celta} alt=''></img>
                  <h6 className='team-two'>celta</h6> 
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
                            <img className='bufanda' src={bebida} alt=''></img>
                        </div>         
                    </button>
                </div>
            </div>


            {/* madrid - espanyol */}
            <div className='container'>
              <p className='date'>01/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>real madrid</h6>  
                  <img className='logo-team' src={madrid} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={espanyol} alt=''></img>
                  <h6 className='team-two'>espanyol</h6> 
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


            {/* barcelona - mallorca */}
            <div className='container'>
              <p className='date'>01/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>barcelona</h6>  
                  <img className='logo-team' src={barcelona} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={mallorca} alt=''></img>
                  <h6 className='team-two'>mallorca</h6> 
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
          
          </div>:null
        }




        {/* -----------PAGINA 4 ------------- */}
        {page === 4 ? 
          <div className='container-three'>

              {/* Celta - alaves */}
            <div className='container'>
              <p className='date'>08/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>celta</h6>  
                  <img className='logo-team' src={celta} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={alaves} alt=''></img>
                  <h6 className='team-two'>alavés</h6> 
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


            {/* Atletico - madrid */}
            <div className='container'>
              <p className='date'>08/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>atlético</h6>  
                  <img className='logo-team' src={atletico} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={madrid} alt=''></img>
                  <h6 className='team-two'>real madrid</h6> 
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
                            <img className='bufanda' src={bebida} alt=''></img>
                        </div>         
                    </button>
                </div>
            </div>


            {/* athletic - valencia */}
            <div className='container'>
              <p className='date'>08/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>athletic</h6>  
                  <img className='logo-team' src={athletic} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={valencia} alt=''></img>
                  <h6 className='team-two'>valencia</h6> 
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


            {/* Levante - real sociedad */}
            <div className='container'>
              <p className='date'>08/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>levante</h6>  
                  <img className='logo-team' src={levante} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={sociedad} alt=''></img>
                  <h6 className='team-two'>sreal sociedad</h6> 
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


            {/* madrid - levante */}
            <div className='container'>
              <p className='date'>11/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>real madrid</h6>  
                  <img className='logo-team' src={madrid} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={levante} alt=''></img>
                  <h6 className='team-two'>levante</h6> 
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


            {/* granada - athletic */}
            <div className='container'>
              <p className='date'>11/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>granada</h6>  
                  <img className='logo-team' src={granada} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={athletic} alt=''></img>
                  <h6 className='team-two'>athletic</h6> 
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


            {/* osasuna - getafe */}
            <div className='container'>
              <p className='date'>01/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>osasuna</h6>  
                  <img className='logo-team' src={osasuna} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={getafe} alt=''></img>
                  <h6 className='team-two'>getafe</h6> 
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


            {/* sevilla - mallorca */}
            <div className='container'>
              <p className='date'>11/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>sevilla</h6>  
                  <img className='logo-team' src={sevilla} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={mallorca} alt=''></img>
                  <h6 className='team-two'>mallorca</h6> 
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
                            <img className='bufanda' src={bebida} alt=''></img>
                        </div>         
                    </button>
                </div>
            </div>


            {/* barcelona - celta */}
            <div className='container'>
              <p className='date'>11/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>barcelona</h6>  
                  <img className='logo-team' src={barcelona} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={celta} alt=''></img>
                  <h6 className='team-two'>celta</h6> 
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


            {/* celta - elche */}
            <div className='container'>
              <p className='date'>15/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>celta</h6>  
                  <img className='logo-team' src={celta} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={elche} alt=''></img>
                  <h6 className='team-two'>elche</h6> 
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
          
          </div>:null
        }




        {/* -----------PAGINA 5 ------------- */}
        {page === 5 ? 
          <div className='container-three'>

              {/* athletic - osasuna */}
            <div className='container'>
              <p className='date'>15/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>athletic</h6>  
                  <img className='logo-team' src={athletic} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={osasuna} alt=''></img>
                  <h6 className='team-two'>osasuna</h6> 
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


            {/* valladolid - ponferradina */}
            <div className='container'>
              <p className='date'>15/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>valladolid</h6>  
                  <img className='logo-team' src={valladolid} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={ponferradina} alt=''></img>
                  <h6 className='team-two'>ponferradina</h6> 
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


            {/* atletico - sevilla */}
            <div className='container'>
              <p className='date'>15/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>atlético</h6>  
                  <img className='logo-team' src={atletico} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={sevilla} alt=''></img>
                  <h6 className='team-two'>sevilla</h6> 
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


            {/* Levante - alaves */}
            <div className='container'>
              <p className='date'>15/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>levante</h6>  
                  <img className='logo-team' src={levante} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={alaves} alt=''></img>
                  <h6 className='team-two'>alavés</h6> 
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


            {/* barcelona - villarreal */}
            <div className='container'>
              <p className='date'>22/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>barcelona</h6>  
                  <img className='logo-team' src={barcelona} alt=''></img>
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


            {/* madrid - betis */}
            <div className='container'>
              <p className='date'>22/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>real madrid</h6>  
                  <img className='logo-team' src={madrid} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={betis} alt=''></img>
                  <h6 className='team-two'>betis</h6> 
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


            {/* sevilla - athletic */}
            <div className='container'>
              <p className='date'>22/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>sevilla</h6>  
                  <img className='logo-team' src={sevilla} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={athletic} alt=''></img>
                  <h6 className='team-two'>athletic</h6> 
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


            {/* granada - espanyol */}
            <div className='container'>
              <p className='date'>22/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>granada</h6>  
                  <img className='logo-team' src={granada} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={espanyol} alt=''></img>
                  <h6 className='team-two'>espanyol</h6> 
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
                            <img className='bufanda' src={bebida} alt=''></img>
                        </div>         
                    </button>
                </div>
            </div>


            {/* osasuna - mallorca */}
            <div className='container'>
              <p className='date'>22/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>osasuna</h6>  
                  <img className='logo-team' src={osasuna} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={mallorca} alt=''></img>
                  <h6 className='team-two'>mallorca</h6> 
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


            {/* valladolid - huesca */}
            <div className='container'>
              <p className='date'>29/05/2022</p>
              <div className='container-matches'>
                <div className='container-team'>
                  <h6 className='team-one'>valladolid</h6>  
                  <img className='logo-team' src={valladolid} alt=''></img>
                </div>
                <div>
                  <img className='logo-versus' src={versus} alt=''></img>
                </div>

                <div className='container-team-two'>  
                  <img className='logo-team' src={huesca} alt=''></img>
                  <h6 className='team-two'>huesca</h6> 
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
          
          </div>:null
        }
        

           <div className='buttons'>
               <button className='btn-style' onClick={prev}><FontAwesomeIcon icon={faAngleLeft} style={{color: "#838383"}}/></button>
               <button className='btn-style' onClick={pageOne}>1</button>
               <button className='btn-style' onClick={pageTwo}>2</button>
               <button className='btn-style' onClick={pageThree}>3</button>
               <button className='btn-style' onClick={pageFour}>4</button>
               <button className='btn-style' onClick={pageFive}>5</button>
               <button className='btn-style' onClick={next}><FontAwesomeIcon icon={faAngleRight} style={{color: "#838383"}}/></button>
           </div>
          
        </div>  
        <div>
          <img src={linea} alt=''></img>
        </div>
      </div>
    
  )
}

export default Matches