import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo.jpg';
import './NavBar.css'


const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="#home" >
          <img src={Logo} alt='logo' style={{maxHeight: '8vh'}}/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className='navbar-flex-end'>
         
          <Nav>
            <Nav.Link href="#deets">Inicio</Nav.Link>
            <Nav.Link eventKey={2} href="#sobremi">
              Sobre mi
            </Nav.Link>
            <Nav.Link eventKey={2} href="#testimonios">
              Testimonios
            </Nav.Link>
            <Nav.Link eventKey={2} href="#cambios">
              Cambios
            </Nav.Link>
            <Nav.Link eventKey={2} href="#asesorias">
              Asesorias
            </Nav.Link>
            <Nav.Link eventKey={2} href="#faq">
              Preguntas Frecuentes
            </Nav.Link>
            <Nav.Link eventKey={2} href="#contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar