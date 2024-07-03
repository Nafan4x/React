import React, {Component} from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import logo from './logo192.png'
import { Route, Routes } from "react-router-dom"

import {Home} from '../Pages/Home'
import {History} from '../Pages/History'
import {Contacts} from '../Pages/Contacts'
import {Registration} from '../Pages/Registration'
import {Login} from '../Pages/Login'


export function Header() { 
        return (
            <>
            <Navbar collapseOnSelect expand="md" bg="secondary">
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
                <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: "space-between", paddingRight: "20px"}} >
                    <Nav className="mr-auto">
                        <Nav.Link href="/history">History</Nav.Link>
                        <Nav.Link href="/contacts">Contacts</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Item >
                            <Nav.Link href="/login">
                                <Button variant="outline-light">Вход</Button>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link href="/registration">
                                <Button variant="outline-light">Регистрация</Button>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/history" element={<History/>}/>
                        <Route exact path="/contacts" element={<Contacts/>}/>
                        <Route exact path="/login" element={<Login/>}/>
                        <Route exact path="/registration" element={<Registration/>}/>
                    </Routes>
            </>
        );
    }

 
