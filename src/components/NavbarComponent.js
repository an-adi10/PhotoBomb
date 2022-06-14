import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
const NavbarComponent=()=> {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to='/'>PhotoBomb</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to='/photos' className={({isActive})=>(isActive?"active":"")}>Photos</Nav.Link> 
                            {/* first isActive is a prop of NavLink second is the value(true/false) and "active" is classname of  react-bootstrap*/}
                            <Nav.Link as={NavLink} to='/features' className={({isActive})=>(isActive?"active":"")}>Features</Nav.Link>
                            {/* <Nav.Link as={NavLink} to='/pricing' className={({isActive})=>(isActive?"active":"")}>Pricing</Nav.Link> */}
                            <Nav.Link as={NavLink} to='/about' className={({isActive})=>(isActive?"active":"")}>About Us</Nav.Link>
                            <Nav.Link as={NavLink} to='/contact' className={({isActive})=>(isActive?"active":"")}>Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={NavLink} to='/login' className={({isActive})=>(isActive?"active":"")}>Login</Nav.Link>
                            <Nav.Link as={NavLink} to='/signup' className={({isActive})=>(isActive?"active":"")}>Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavbarComponent