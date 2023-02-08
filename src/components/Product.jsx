import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import productImg1 from '../assets/images/image-product-1.jpg';
import productImg2 from '../assets/images/image-product-2.jpg';
import productImg3 from '../assets/images/image-product-3.jpg';
import productImg4 from '../assets/images/image-product-4.jpg';

import Cart from './Cart';
import ProductModal from './productModal';
import { useSelector } from 'react-redux';
import CartModal from './CartModal';
import Success from './Success';

const Product = () => {
    const [image, setImage] = useState(productImg1);
    const [selected, setSelected] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const showCart = useSelector(state => state.counter.showCart);
    const success = useSelector(state => state.counter.success);
    const images = [productImg1, productImg2, productImg3, productImg4];

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [isMobile])

    const imageHandler = (img, index) => {
        setImage(img);
        setSelected(index)
    }

    return <Container className=''>
        <Row className='align-items-center'>
            <Col xs={12} lg={6}>
                <div className='pad-5'>
                    <img src={image} alt="product" className='img-fluid rounded-4' onClick={() => setIsOpen(true)} />
                    <Row>
                        {images.map((image, index) => (
                            <Col lg={3} xs={3} className="p-3" key={index} id="myDIV">
                                <img src={image} alt="product" className={`img-fluid rounded-3 ${selected === index ? "border-org" : "" }`} 
                                    onClick={() => imageHandler(image, index)} /> 
                            </Col>
                        ))}

                    </Row>
                    {isOpen && <ProductModal isOpen={isOpen} setIsOpen={setIsOpen} />}
                    {/* {isMobile && <ProductModal isOpen={true} setIsOpen={setIsOpen} />} */}
                </div>

            </Col>
            <Col xs={12} lg={6}>
                <div className='p-4'>
                    <h5 className='pb-3 hero-txt'>SNEAKER COMPANY</h5>
                    <h1 className='hero'>Fall Limited Edition Sneakers</h1>
                    <p className='text-grey'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                    <Row className='align-items-center'>
                        <Col lg={3} md={3} xs={5}>
                            <div className='position-relative'>
                                <p className='price'>$125.00</p>
                                <p className='position-absolute top-50 pt-4 del'><del>$250.00</del></p>
                            </div>
                        </Col>
                        <Col lg={2} xs={4}>
                            <div className='bg-org rounded-2'>
                                <p className='discount'>50%</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Cart />
            </Col >
        </Row >

        {success && <Success />}
        {showCart && <CartModal />}
    </Container >
};

export default Product;