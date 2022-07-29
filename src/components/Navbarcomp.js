import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useNavigate,Link } from 'react-router-dom'

const Navbarcomp = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand >
            <img
                src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
                height='30'
                alt=''
                loading='lazy'
                />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" >
        
            <Nav.Link as={Link} to="/" >Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/Requests">Requests</Nav.Link>
            <Nav.Link  as={Link} to="Complaints">Complaints and Reviews</Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav className='="me-auto'>
                <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default Navbarcomp