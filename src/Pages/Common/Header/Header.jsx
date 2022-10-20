import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../Contex/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';


const Header = () => {
    const { user, logOut } = useContext(AuthContex)

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mb-4' >
            <Container>
                <Navbar.Brand href="#home" className="fs-4 fw-bold"><Link to="/">Daily Headline</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav className="me-left text-light fs-5 ">
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href="#pricing">News</Nav.Link>
                        {
                            user ?
                                <NavDropdown title={user?.displayName} id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">{user?.name}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => logOut()} href="#action/3.1">Log Out</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">Log Out</NavDropdown.Item>

                                </NavDropdown> :
                                <Nav.Link href="asd">Log In</Nav.Link>
                        }</Nav>
                    <div className='text-secondary d-lg-none d-block'>
                        <LeftSideNav />
                        <RightSideNav />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;