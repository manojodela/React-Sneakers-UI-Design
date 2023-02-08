import React, { useState } from "react";
import productImg1 from '../assets/images/image-product-1.jpg';
import productImg2 from '../assets/images/image-product-2.jpg';
import productImg3 from '../assets/images/image-product-3.jpg';
import productImg4 from '../assets/images/image-product-4.jpg';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const ProductModal = (props) => {
    const {  setIsOpen } = props;
    const [photoIndex, setPhotoIndex] = useState(0);

    const images = [productImg1, productImg2, productImg3, productImg4];

    return (
        <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setPhotoIndex(photoIndex + images.length - 1) % images.length}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
            enableZoom={false}
        />
    );
}

export default ProductModal;