import logo from '../assets/logo.png'
import React from "react";
//import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Container }  from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import axios from "axios";
//import { Link } from "react-router-dom";

//call function instead of using const
//function give Navbar a unique name like "BasicNavbar"
function BasicNavbar(){ 
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
        <Navbar.Brand href="#">
        <img src= { logo}
            alt=""
            width="140"
            height="85"
            className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
                    <Nav className="me-auto"> 
                <Nav.Link href="/">Landing</Nav.Link>
                <Nav.Link href="/compare">Compare</Nav.Link>
                <Nav.Link href="/time">Time</Nav.Link>
                </Nav>
            </Nav>
            <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )

}

export default BasicNavbar;