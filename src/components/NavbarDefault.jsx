import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LogomarcaIco from '../assets/icons/logo-cmp.png'
import "./NavbarDefault.css"
export default function NavbarDefault() {
  return (
    <header>
    <Navbar expand="lg" className="NavStyle">
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
              Início
            </Link>
            <Link className="mx-auto nav-link" to="/">
              Como Funciona
            </Link>
            <Link className="mx-auto nav-link" to="/">
              Objetivos
            </Link>
            <Link className="mx-auto nav-link" to="/">
              Desafios
            </Link>
            <Link className="mx-auto nav-link" to="/">
              Blog
            </Link>
            <Link className="mx-auto nav-link p-1 m-1" to="/">
              Vamos Conversar ?
            </Link>
     
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  )
}