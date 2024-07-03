import React, {Component} from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from './logo192.png'
import { Route, Routes } from "react-router-dom"

import {Home} from '../Pages/Home'
import {History} from '../Pages/History'
import {Contacts} from '../Pages/Contacts'


export function Header() { 
        return (
            <>
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
                            <Nav.Link href="/history">History</Nav.Link>
                            <Nav.Link href="/contacts">Contacts</Nav.Link>
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
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/history" element={<History/>}/>
                        <Route exact path="/contacts" element={<Contacts/>}/>
                    </Routes>
            </>
        );
    }

 
