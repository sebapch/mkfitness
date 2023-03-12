import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonios from './components/Testimonios/Testimonios';
import SobreMi from './components/Sobre Mi/SobreMi';
import BodyLeft from './components/BodyInfo/left/BodyLeft';

import BodyRight from './components/BodyInfo/right/BodyRight';
import Services from './components/Services/Services';
import SmallHero from './components/SmallHero/SmallHero';
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <>
    <div style={{backgroundColor: '#1E1E27', color: 'white'}}>
      <NavBar />
      <Main />
      <Testimonios />
      <SobreMi />
      <BodyLeft />
      <BodyRight />
      <Services />
      <SmallHero />
      <Contacto />
      </div>
    </>
  );
}

export default App;
