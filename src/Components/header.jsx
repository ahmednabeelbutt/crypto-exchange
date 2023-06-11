import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';


function Header({ loggedIn, onLogout }) {

    const handleLogout = () => {
        onLogout();
    };
    
    return (
    <div className="custom-header">
    <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand>Crypto Exchange</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
                >
                
                <Nav.Link href="#action2">About Us</Nav.Link>
                <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                {loggedIn ? (
                <>
                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link as={Link}  to="/my-coins">My Coins</Nav.Link>
                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </>
                ) : (
                <>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                </>
                )}
                
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
);
}

export default Header;
