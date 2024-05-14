import Nav from 'react-bootstrap/Nav';
import './App.css';
function Navbar() {
  return (
    <>
      <Nav  className="justify-content-end">
        {/* className='nav' */}
        <Nav.Item className="navbar">
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navbar">
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navbar">
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navbar">
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navbar;
