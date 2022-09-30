import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <header>
    <Navbar expand="lg" className="CorNav">
      <Container>
        <Navbar.Brand >
         <Link className="nav-link d-flex flex-column align-items-center" to="/">
            <img width="40"
              height="40"
              src={LogomarcaIco} />
              <h1 style={{ fontSize: '13px'}}>King Lion</h1>
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
       {/* <Link className="nav-link" to="/pg_categories">
              Categories
            </Link> */}
          </Nav>
          <Link className="nav-link" to="/pg_carrinho">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            {state.length}
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  )
}