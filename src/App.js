import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from 'react';
import Register from './Components/register';
import Login from './Components/login';
import Header from './Components/header';
import Footer from './Components/footer';
import Users from './Components/users';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import CoinsComponent from './Components/my-coins';
import TransferCoinForm from './Components/transfer-coin-form';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedInUser } from './redux/actions/user-actions';
import { addUser } from './redux/actions/user-actions';
import Blog from './Components/blogs';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const defaultUsers = useSelector((state) => state.usersReducer.users);
  const loggedInUserInState = useSelector((state) => state.usersReducer.loggedInUser);
  const dispatch = useDispatch();


  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    setLoggedIn(isLoggedIn);
  }, []);
  
  const handleLogin = (email, password) => {
    const userExists = defaultUsers.find((user) => user.email === email && user.password === password);
    if (userExists) {
      setLoggedIn(true);
      // setloggedInUser(userExists);
      // localStorage.setItem('loggedIn', 'true');
      
      // CODE TO SET STATE OF USERS ON LOGIN
      dispatch(setLoggedInUser(userExists));

      return true;
    } 
  };

  const handleLogout = () => {
    setLoggedIn(false);
    // localStorage.setItem('loggedIn', 'false');
  };

  const handleSignUp = (newUser) => {
    dispatch(addUser(newUser));
    // setloggedInUser(newUser);
    // setLoggedIn(true); // Automatically log in the user after sign up
    // localStorage.setItem('loggedIn', 'true');
    // sendUsersToState(newUser)
  };


  return (
    <div className="App">
      <Router>
        <Header loggedIn={loggedIn} onLogout={handleLogout} />
        <Routes> 
          <Route exact path="/" element={loggedIn ? <Users user={loggedInUserInState} /> : <Login onLogin={handleLogin} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/dashboard" element={loggedIn ? <Users user={loggedInUserInState} /> : <Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register users={defaultUsers} onSignUp={handleSignUp} />} />
          <Route path="/my-coins" element={loggedIn ? <CoinsComponent user={loggedInUserInState} /> : <Login onLogin={handleLogin} />} />
          <Route path="/transfer" element={loggedIn ? <TransferCoinForm /> : <Login onLogin={handleLogin} />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  ); 
}

export default App;
