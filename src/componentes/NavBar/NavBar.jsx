import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">StayFit</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Mujer</Nav.Link>
        <Nav.Link href="#features">Hombre</Nav.Link>
        <Nav.Link href="#pricing">Suplementos</Nav.Link>
      </Nav>
      <CartWidget/>
    </Container>
  </Navbar>
  )
}

export default NavBar

