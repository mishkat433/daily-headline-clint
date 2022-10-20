import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../../Assest/Brand/Brand_Dev-1.webp";
import img2 from "../../../Assest/Brand/img1.jpg"

const AddCarousel = () => {
    return (
        <Carousel className='w-100'>
            <Carousel.Item>
                <img className="d-block w-100" src={img1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={img2} alt="Second slide" />
            </Carousel.Item>
        </Carousel>
    );
};

export default AddCarousel;