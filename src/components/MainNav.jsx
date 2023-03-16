import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Cart from '../assets/images/icon-cart.svg';
import Logo from '../assets/images/logo.svg';
import avatar from '../assets/images/image-avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Button } from 'react-bootstrap';
import { counterActions } from '../Store/Counter';


const MainNav = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.counter.cart);

    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="dark" >
            <Container className='p-0'>
                <Link to="/"> <img src={Logo} className="logo" alt='logo' /></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='text-black'>
                    <Nav className="me-auto">
                        <Link to="/" className="nav-item">Collections</Link>
                        <Link to="/" className="nav-item">Men</Link>
                        <Link to="/" className="nav-item">Women</Link>
                        <Link to="/" className="nav-item">About</Link>
                        <Link to="/" className="nav-item">Contact</Link>
                        <Link to="/UIDesigns"  className="nav-item">UI Designs</Link>
                    </Nav>
                    <Nav>
                        <Button variant="primary" className='position-relative ' onClick={() =>{dispatch(counterActions.showCart()); console.log("btn ");}}>
                        <img src={Cart} alt="cart" className=' cart' height="25px" />
                             <Badge bg="success" className='position-absolute text-black'>{cart}</Badge>
                            <span className="visually-hidden">unread messages</span>
                        </Button>
                        <img src={avatar} alt="avatar" className='img-fluid avatar' width="35px" height="35px" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default MainNav;