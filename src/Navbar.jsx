// import Nav from 'react-bootstrap/Nav';
// import './App.css';
// function Navbar() {
//   return (
//     <>
//       <Nav  className="justify-content-end">
//         {/* className='nav' */}
//         <Nav.Item className="navbar">
//           <Nav.Link href="/home">Active</Nav.Link>
//         </Nav.Item>
//         <Nav.Item className="navbar">
//           <Nav.Link eventKey="link-1">Link</Nav.Link>
//         </Nav.Item>
//         <Nav.Item className="navbar">
//           <Nav.Link eventKey="link-2">Link</Nav.Link>
//         </Nav.Item>
//         <Nav.Item className="navbar">
//           <Nav.Link eventKey="link-2">Link</Nav.Link>
//         </Nav.Item>
//         <Nav.Item className="navbar">
//           <Nav.Link eventKey="link-2">Link</Nav.Link>
//         </Nav.Item>
//       </Nav>
//     </>
//   );
// }

// export default Navbar;

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ backgroundColor: 'rgb(248 231 233) !important' }}
    >
      <Container fluid>
        <Navbar.Brand href="#" className="logo"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/">&nbsp;Home&nbsp;</Nav.Link>
            <Nav.Link href="#action2">&nbsp;Link&nbsp;</Nav.Link>
            <Nav.Link href="#action2">&nbsp;Link&nbsp;</Nav.Link>
            <NavDropdown
              title="&nbsp;NavDropdown&nbsp;"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
