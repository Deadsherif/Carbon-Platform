import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdown from 'react-bootstrap/NavDropdown'
function NavScroll() {
 
  return (
    <Navbar expand="lg" bg='dark' data-bs-theme="dark" fixed='top'>
      <Container>
        <Navbar.Brand href="#">Carbon FootPrint</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  href="/Home">Home</Nav.Link>
            <Nav.Link href="/ProjectsInformation">Project Information</Nav.Link>
            <NavDropdown title="Scopes Calculations" id="basic-nav-dropdown" >
              <NavDropdown.Item href="/ScopesDefinition">Definition</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Scope01">
               Scope 01
              </NavDropdown.Item>
              <NavDropdown.Item href="/Scope02"> Scope 02</NavDropdown.Item>
              <NavDropdown.Item href="/Scope03">
              Scope 03
              </NavDropdown.Item>
             
          
            </NavDropdown>
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
            {/* <Nav.Link href="/Co2Emissions">Co2 Emissions</Nav.Link> */}
            <Nav.Link href="/Ghg">What Is GHG?</Nav.Link>
            <Nav.Link href="/About">About Us</Nav.Link>
            <Nav.Link href="/Report">Report</Nav.Link>

          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;