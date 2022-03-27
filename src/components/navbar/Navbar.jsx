import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../images/logo.png";
import Search from "../../images/search.png";
import Hero from "../hero/Hero";
const Navbarr = () => {
  return (
    <div className='bg'>
      <Navbar expand='lg'>
        <Container>
          <Navbar.Brand href='#'>
            <img src={Logo} width={100} alt='logo' />
          </Navbar.Brand>
          <div className='toggle'>
            <Navbar.Toggle aria-controls='navbarScroll' />
          </div>
          <Navbar.Collapse id='navbarScroll'>
            <Nav className=' px-4 ms-auto n' navbarScroll>
              <Nav.Link className='nav' as={Link} to={"/about"}>
                About Us
              </Nav.Link>
              <Nav.Link className='nav' as={Link} to={"/ourwork"}>
                Our Work
              </Nav.Link>
              <Nav.Link className='nav' as={Link} to={"/services"}>
                Services
              </Nav.Link>
              <Nav.Link className='nav' as={Link} to={"/Contact"}>
                Contact
              </Nav.Link>
              <Nav.Link className='nav' as={Link} to={"/Contact"}>
                <img src={Search} width={25} alt='search' />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Hero />
    </div>
  );
};

export default Navbarr;
