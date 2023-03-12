import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo.jpg';
import './NavBar.css'


const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" >
          <img src={Logo} alt='logo' style={{maxHeight: '8vh'}}/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className='navbar-flex-end'>
         
          <Nav>
            <Nav.Link href="#deets">Inicio</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sobre mi
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Servicios
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Asesoria
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar