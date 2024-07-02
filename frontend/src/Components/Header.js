import React, {Component} from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from './logo192.png'

export default class Header extends Component { 
    render() { 
        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/">
                    <img
                        src={logo}
                        height="40"
                        width="40"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About us</Nav.Link>
                            <Nav.Link href="/contacts">Contacts</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav>
                    {/* <Nav>
                        <label htmlFor="profileImageInput" className="nav-link">
                        <img
                            src={profileImage}
                            alt="Profile"
                            width="30"
                            height="30"
                            className="rounded-circle"
                        />
                        </label>
                        <input
                        type="file"
                        id="profileImageInput"
                        accept="image/*"

                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                        />
                    </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
 
