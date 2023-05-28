import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Alert from "react-bootstrap/Alert";

function Login({ onLogin }) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState('');
    const [loginAttempts, setLoginAttempts] = useState(0);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Simulating login logic
        const userExists = onLogin(email, password);
        if (loginAttempts >= 3) {
            showErrorMessageAlert('You have been blocked. Please contact support.');
            return;
        }
        if (userExists) {
            showSuccessAlert(true);
            setLoginAttempts(0);
        } else {
            setLoginAttempts(loginAttempts + 1);
            showErrorMessageAlert('Credentials Invalid!');
            handleClear();
        }
       
    };
    const showSuccessAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          navigate('/dashboard');
        }, 2000);
      };
    
      const showErrorMessageAlert = (message) => {
        setShowErrorAlert(message);
        setTimeout(() => {
          setShowErrorAlert('');
        }, 3000);
      };
    
      const handleClear = (e) => {
        setEmail("");
        setPassword("");
      };

  return (
    <Form className="form-container mt-5" onSubmit={handleLoginSubmit}>
        <h1>Log in</h1>
        {showAlert && (
          <Alert
            variant="success"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            User Logged in Successfully!
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
         {loginAttempts >= 3 && (
          <Alert variant="danger" className="mt-3">
            You have been blocked. Please contact support.
          </Alert>
        )}
        <Form.Group className="form-group" controlId="formBasicEmail">
            <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        </Form.Group>

        <Form.Group className="form-group" controlId="formBasicPassword">
            <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        </Form.Group>
        <Button variant="primary" type="submit">
            Log in
        </Button>
    </Form>
  );
};

export default Login;
