import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LogomarcaIco from '../assets/icons/logo-cmp.png'
export default function NavbarDefault() {
  return (
    <header>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand >
         <Link className="nav-link" to="/">
            <img width="135"
              height="auto"
              src={LogomarcaIco} />
              
          </Link>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ms-auto gap-2">
            <Link className="mx-auto nav-link" to="/">
              Home
            </Link>
            <Link className="mx-auto nav-link" to="/">
              Quem somos
            </Link>
            <Link className="mx-auto nav-link" to="/">
              Para você
            </Link>
            <Link className="mx-auto nav-link" to="/">
              Para sua empresa
            </Link>
            <Link className="mx-auto nav-link" to="/">
              Assistência 24h
            </Link>
            <Link className="mx-auto nav-link p-1 m-1" to="/">
              Fale Conosco
            </Link>
     
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  )
}