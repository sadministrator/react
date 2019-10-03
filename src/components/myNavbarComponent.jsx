import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Clock from './clockComponent'

function MyNavbar(props) {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Website.com</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#tweets">Tweets</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Clock />
            </Navbar>
        )
}

export default MyNavbar