import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import './App.css';
//import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.reload();
  };
  return (
    <>
        {/* <fieldset className='table'>
          <legend>email</legend>
      <p>login with email and password</p>
      <p>login with email and password</p>
      <p>login with email and password</p>
      <p>login with email and password</p>
      </fieldset> */}

      <p>login with email and password</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
          {/* <Form.Label column sm={3} style={{textAlign: ''}}>
            Email
          </Form.Label> */}
          <Col >
            <Form.Control
              type="email"
              placeholder="email"
              required
              onChange={(e) => setFormData(e.target.value)}
              
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-2"
          controlId="formHorizontalPassword"
          >
          {/* <Form.Label column sm={3} style={{textAlign: ''}} >
            Password
          </Form.Label> */}
          <Col security='password'>
            <Form.Control
              type="password"
              placeholder="password"
              required
              onChange={(e) => setFormData(e.target.value)}
              />
          </Col>
        </Form.Group>
      </Form>
            
    </>
  );
}

export default UserForm;
