import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/logo.png'
const NavbarComponent = () => {
    return (
        <div>
            <Navbar expand="lg" className="font shadow">
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="">الرئيسية</Nav.Link>
                        <Nav.Link href="">الحجوزات</Nav.Link>
                        <Nav.Link href="">الرحلات الجوية</Nav.Link>
                        <Nav.Link href="">الفنادق </Nav.Link>
                        <Nav.Link href="">المطاعم</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComponent
