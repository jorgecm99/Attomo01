import Header from './Componentes/Core/Header';
import Landing from './Componentes/Landing/Landing';
import Footer from './Componentes/Core/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect} from 'react';
import './App.css';
import Popup from './Componentes/Popup/Popup';
import 'bootstrap/dist/css/bootstrap.min.css'

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
        <h3>¡No te lo pierdas!</h3>
        <p>Sólo quedan 14 entradas con regalo:</p>
        <p>Bebida<span></span>o Bufanda<span></span></p>
        <button>¡Quiero la mía!</button>
      </Popup>

      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h3>¡No te lo pierdas!</h3>
        <p>Sólo quedan 14 entradas con regalo:</p>
        <p className='paragraph'>Bebida <span></span>o Bufanda<span></span></p>
        <button className='btn-paragraph'>¡Quiero la mía!</button>
      </Popup>
      <Footer />
    </Router>
    
  );
}

export default App;
