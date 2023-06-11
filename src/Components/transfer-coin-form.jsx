import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { trasnferCoins } from '../redux/actions/user-actions';
import { useNavigate } from 'react-router-dom';
import Alert from "react-bootstrap/Alert";

const TransferCoinForm = () => {
  
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState('');
  const selectedCoin = useSelector((state) => state.usersReducer.selectedCoin);
  const loggedInUser = useSelector((state) => state.usersReducer.loggedInUser);
  const allUsersInState = useSelector((state) => state.usersReducer.users);
  const [receiverEmail, setEmail] = useState('');
  const [coinQuantity, setCoinQuantity] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  
  const handleTransfer = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    
    const userExists = allUsersInState.some((user) => user.email === receiverEmail);
    // console.log(userExists);
    if (loggedInUser.email === receiverEmail) {
      showErrorMessageAlert('Cannot Transfer to own account!');

    } else if (userExists) {
      
      if (coinQuantity <= selectedCoin.coin.coinQuantity) {
        
        setShowAlert(true);
        const transfer_details = {
          sender: loggedInUser.email,
          receiver: receiverEmail,
          coinID: selectedCoin.coin.coinID,
          coinQuantity: Number(coinQuantity)
        };
        //console.log(transfer_details);
        dispatch(trasnferCoins(transfer_details));
        setTimeout(() => {
          setShowAlert(false);
          navigate('/my-coins');
        }, 1000);

      } else {
        
        showErrorMessageAlert('You have insufficient Coins!');
        // setCoinQuantity('');
      }

    } else {
      showErrorMessageAlert('User does not exists!');
      // setEmail('');
    }
    
  };
  
  const showErrorMessageAlert = (message) => {
    setShowErrorAlert(message);
    setTimeout(() => {
      setShowErrorAlert('');
    }, 2000);
  };

  return (
    <Form className="form-container mt-5" onSubmit={handleTransfer}>
        <h1>Transfer Coins ({selectedCoin.coin.coinName})</h1>
        {showAlert && (
          <Alert
            variant="success"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            Coins Transferred!
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
        <Form.Group className="form-group" controlId="formBasicEmail">
            <Form.Control
            type="email"
            placeholder="Enter email address"
            value={receiverEmail}
            onChange={(e) => setEmail(e.target.value)}
        />
        </Form.Group>

        <Form.Group className="form-group" controlId="formBasicQuantity">
            <Form.Control
            type="text"
            placeholder="Enter Quantity"
            value={coinQuantity}
            onChange={(e) => setCoinQuantity(e.target.value)}
        />
        </Form.Group>
        <Button variant="primary" type="submit">
            Transfer
        </Button>
    </Form>
  );
};

export default TransferCoinForm;
