import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Clock from './clockComponent'
import { Router, Link } from '@reach/router'

export default function MyNavbar(props) {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Website.com</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/">Home</Link>
                        <pre>  </pre>
                        <Link to="the_Donald">The Donald</Link>
                    </Nav>
                </Navbar.Collapse>
                <Clock />
            </Navbar>
        )
}