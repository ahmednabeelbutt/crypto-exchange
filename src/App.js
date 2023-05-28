import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from 'react';
import Register from './Components/register';
import Login from './Components/login';
import Header from './Components/header';
import Footer from './Components/footer';
import Users from './Components/users';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const defaultUsers = [
    {
      name: "Ahmad",
      email: "ahmad@gmail.com",
      password: "ahmad",
      address:
        "101-B Punjab Society",
    },
    {
      name: "Ali",
      email: "ali@gmail.com",
      password: "ali",
      address:
        "111-B Punjab Society",
    },
    {
      name: "Waqas",
      email: "waqas@gmail.com",
      password: "waqas",
      address:
        "121-B Punjab Society",
    },
    
    
  ];
  const [users, setUsers] = useState(defaultUsers);
  
  const handleLogin = (email, password) => {
    const userExists = users.some((user) => user.email === email && user.password === password);
    if (userExists) {
      setLoggedIn(true);
      return true;
    } 
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleSignUp = (newUser) => {
    setUsers([...users, newUser]);
    setLoggedIn(true); // Automatically log in the user after sign up
  };

  return (
    <div className="App">
      <Router>
        <Header loggedIn={loggedIn} onLogout={handleLogout} />
        <Routes>
          <Route exact path="/" element={<Register onSignUp={handleSignUp} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/dashboard" element={<Users users={users}/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  ); 
}

export default App;
