import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Signup({onSignUp}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    // const [showAlert, setShowAlert] = useState(false);
    // const [showErrorAlert, setShowErrorAlert] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle signup logic here

        // if(title.length < 10) {
        //     showErrorMessageAlert('Title should be atleast 10 characters.');
        //     return;
        // }
        // if(details.length < 10) {
        //     showErrorMessageAlert('Detail should be atleast 50 characters.');
        //     return;
        // }
        // addUser({ title, description: details });
        // handleClear();
        // showSuccessAlert(true);
         
   
        // Perform sign-up logic
        const newUser = { name, email, password, address };
        onSignUp(newUser);
        setName('');
        setEmail('');
        setPassword('');
        setAddress('');

        // Redirect to a different page after successful login
        navigate('/dashboard');
  };
   

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <div className="mt-5 form-container">
            <h1>Signup</h1>
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicDocument">
                    <Form.Label>Upload Document (CNIC)</Form.Label>
                    <Form.Control 
                        type="file" 
                        placeholder="Uplaod CNIC"
                        
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
