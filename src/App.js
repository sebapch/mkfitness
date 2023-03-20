import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Testimonios from "./components/Testimonios/Testimonios";
import SobreMi from "./components/Sobre Mi/SobreMi";
import BodyLeft from "./components/BodyInfo/left/BodyLeft";

import BodyRight from "./components/BodyInfo/right/BodyRight";
import Services from "./components/Services/Services";
import SmallHero from "./components/SmallHero/SmallHero";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "black", color: "white" }}>
        <NavBar />
        <Main />
        <SobreMi />
        <BodyLeft />
        <SmallHero />
        <Testimonios />
        <BodyRight />
        <FAQ />
        <Services />
        <Contacto />
        <Footer />
      </div>
    </>
  );
}

export default App;
