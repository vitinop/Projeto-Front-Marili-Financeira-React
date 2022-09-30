import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LogomarcaIco from '../assets/icons/logomarcacompleta.png'
export default function NavbarDefault() {
  return (
    <header>
    <Navbar expand="lg" className="CorNav">
      <Container>
        <Navbar.Brand >
         <Link className="nav-link d-flex flex-column align-items-center" to="/">
            <img width="40"
              height="40"
              src={LogomarcaIco} />
              <h1 style={{ fontSize: '1rem'}}>Marili Réquia Corretora de Seguros</h1>
          </Link>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto ">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/pg_admin">
              Admin
            </Link>
            <Link className="nav-link" to="/pg_products">
              Products
            </Link>
            <Link className="nav-link" to="/pg_sobre">
              About Us
            </Link>
     
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  )
}