import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from 'react';
import Register from './Components/register';
import Login from './Components/login';
import Header from './Components/header';
import Footer from './Components/footer';
import Users from './Components/users';
import Blogs from './Components/blogs';
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

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    setLoggedIn(isLoggedIn);
  }, []);
  
  const handleLogin = (email, password) => {
    const userExists = users.some((user) => user.email === email && user.password === password);
    if (userExists) {
      setLoggedIn(true);
      localStorage.setItem('loggedIn', 'true');
      return true;
    } 
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.setItem('loggedIn', 'false');
  };

  const handleSignUp = (newUser) => {
    setUsers([...users, newUser]);
    setLoggedIn(true); // Automatically log in the user after sign up
    localStorage.setItem('loggedIn', 'true');
  };

  return (
    <div className="App">
      <Router>
        <Header loggedIn={loggedIn} onLogout={handleLogout} />
        <Routes> 
          <Route exact path="/" element={loggedIn ? <Users users={users} /> : <Register users={users} onSignUp={handleSignUp} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/dashboard" element={loggedIn ? <Users users={users} /> : <Login onLogin={handleLogin} />} />
          <Route exact path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  ); 
}

export default App;
