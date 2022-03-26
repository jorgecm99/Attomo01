import Header from './Componentes/Core/Header';
import Landing from './Componentes/Landing/Landing';
import Footer from './Componentes/Core/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Landing />
      <Footer />
    </Router>
    
  );
}

export default App;
