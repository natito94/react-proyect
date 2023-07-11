import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <Navbar >
    <Container>
      <Nav className="me-auto">
        <ul>
        <li>
          <Link to = "/"><h1>Tienda Hogwarts</h1></Link>
        </li>
       <li>
       <NavLink to = "/categoria/1">Gryffindor</NavLink>
       </li>
       <li>
       <NavLink to = "/categoria/2">Slytherin</NavLink>
       </li>
       <li>
       <NavLink to = "/categoria/3">Hufflepuff</NavLink>
       </li>
       <li>
       <NavLink to = "/categoria/4">Ravenclaw</NavLink>
       </li>
       </ul>
      </Nav>
      <CartWidget/>
    </Container>
  </Navbar>
  )
}

export default NavBar

