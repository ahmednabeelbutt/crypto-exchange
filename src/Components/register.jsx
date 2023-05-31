import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Alert from "react-bootstrap/Alert";

function Signup({users, onSignUp}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState('');
  
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();         
   
        // Perform sign-up logic

        const newUser = { name, email, password, address };

        // Check if the email already exists in the users list
        const existingUser = users.find(user => user.email === email);
    
        if (existingUser) {
          showErrorMessageAlert('User Already Exists!');
          return;
        }

        onSignUp(newUser);
        setName('');
        setEmail('');
        setPassword('');
        setAddress('');

        showSuccessAlert(true);
       
  };
  const showSuccessAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
       // Redirect to a different page after successful login
       navigate('/dashboard');
    }, 2000);
  };

  const showErrorMessageAlert = (message) => {
    setShowErrorAlert(message);
    setTimeout(() => {
      setShowErrorAlert('');
    }, 2000);
  };
   

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <div className="mt-5 form-container">
            <h1>Signup</h1>
            {showAlert && (
            <Alert
                variant="success"
                onClose={() => setShowAlert(false)}
                dismissible
            >
                User Registered Successfully!
            </Alert>
            )}
            {showErrorAlert && (
            <Alert
                variant="danger"
                onClose={() => setShowAlert(false)}
                dismissible
            >
                {showErrorAlert}
            </Alert>
            )}
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Group>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicDocument">
                    <Form.Label>Upload Document (CNIC)</Form.Label>
                    <Form.Control 
                        type="file" 
                        placeholder="Uplaod CNIC"
                        required
                    />
                </Form.Group>

                <Button className="mt-3" variant="primary" type="submit">
                    Sign up
                </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
