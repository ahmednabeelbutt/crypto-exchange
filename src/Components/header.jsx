import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';


function Header({ loggedIn, onLogout }) {


    return (
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
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#action2">About Us</Nav.Link>
                {loggedIn ? (
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                ) : (
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                )}
                
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}

export default Header;
