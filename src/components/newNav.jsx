import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function CollapsibleExample() {
    const [expanded, setExpanded] = useState(false);
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white px-0" expanded={expanded} onSelect={() => setExpanded(false)}>
      <Container className="d-flex justify-content-between items-center ml-4 sm:ml-12 px-0">
      <Navbar.Brand><img src="images/Logo.png" alt="Logo" className="h-7 sm:h-16"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav navbar-toggler" onClick={() => setExpanded(expanded ? false : true)} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto flex gap-8 poppins-medium justify-content-end relative lg:left-20">
          <NavLink to="/" onClick={() => setExpanded(false)}>Home
    </NavLink>
    <NavLink to="/about" onClick={() => setExpanded(false)}>About
    </NavLink>
    <NavLink to="/services" onClick={() => setExpanded(false)}>Services
    </NavLink>
    <NavLink to="/clients" onClick={() => setExpanded(false)}>Clients
    </NavLink>
    <NavLink to="/contacts" onClick={() => setExpanded(false)}>Contact
    </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default CollapsibleExample;