import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import productImg1 from '../assets/images/image-product-1.jpg';
import { counterActions } from '../Store/Counter';

function CartModal() {
    const dispatch = useDispatch();
    const showCart = useSelector(state => state.counter.showCart);
    const cart = useSelector(state => state.counter.cart);
    const [lgShow, setLgShow] = useState(showCart);
    const navigate = useNavigate();

    return (
        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => {setLgShow(false); dispatch(counterActions.showCart())}}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {cart === 0 && <h5 >Your cart is empty</h5>}
                        {cart !== 0 && <h5 > <i className="bi bi-check-circle-fill text-success"></i> Added to cart</h5>}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* {cart === 0 && <h4 className='text-center'>No products are added to cart</h4>} */}
                    {cart !== 0 && (
                        <Row className='justify-content-center'>
                            <Col lg={4}>
                                <img src={productImg1} className="img-fluid" width="250px" height="250px" alt="product"/>
                            </Col>
                            <Col lg={6}>
                                <h5>Fall Limited Edtion Sneakers</h5>
                                <h5>color: white</h5>
                                <h5>$125.00 x {cart} &nbsp; <strong>${125.00 * cart}.00</strong></h5> <br />
                                <button className='font-weight-bold rounded px-5'
                                    onClick={() => { dispatch(counterActions.successModal()); dispatch(counterActions.showCart()); navigate('/success')}}
                                >checkout</button>
                            </Col>
                        </Row>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CartModal;