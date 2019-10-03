import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Clock from './clockComponent'

export default function MyNavbar(props) {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Website.com</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#the_Donald">The Donald</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Clock />
            </Navbar>
        )
}