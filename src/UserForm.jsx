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
      <div>Login</div>
      <br />

      <Form onSubmit={handleSubmit}>
        {/* <Form.Group className="mb-" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) => setFormData(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setFormData(e.target.value)}
          />
        </Form.Group> */}

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2} >
            Email
          </Form.Label>
          <Col sm={10} >
            <Form.Control
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setFormData(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="Password"
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
