import Header from './Componentes/Core/Header';
import Landing from './Componentes/Landing/Landing';
import Footer from './Componentes/Core/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect} from 'react';
import './App.css';
import Popup from './Componentes/Popup/Popup';

var logoBstadium = require('./Assets/Icons/bstadium.png');
var bufanda = require('./Assets/Icons/bufanda.png');
var bebida = require('./Assets/Icons/bebida.png');


function App() {
  const [popup, setPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);
  

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 5000);
  },[])

  return (
    <Router>
      <Header />
      <Landing />

      <Popup trigger={popup} setTrigger={setPopup}>
        <div className='container'>
        <div className='container-popup'>
      <img className='logo-bstadium'src={logoBstadium} alt=''></img>
        <div>
        <h3>¡No te lo pierdas!</h3>
        <p>Sólo quedan 14 entradas con regalo:</p>
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
        <button className='btn-popup'>¡Quiero la mía!</button>
        </div>
      </Popup>



      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
      <div className='container'>
      <div className='container-popup'>
      <img className='logo-bstadium'src={logoBstadium} alt=''></img>
        <div>
        <h3>¡No te lo pierdas!</h3>
        <p>Sólo quedan 14 entradas con regalo:</p>
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
        <button className='btn-popup'>¡Quiero la mía!</button>
    
      </div>
      
      </Popup>
      <Footer />
    </Router>
    
  );
}

export default App;
