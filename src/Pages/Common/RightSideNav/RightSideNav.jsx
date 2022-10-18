import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import AddCarousel from '../AddCarousel/AddCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical className='w-100'>
                <Button className='outline-lg-light' variant="outline-primary p-2 "><FaGoogle /> Login with google</Button>
                <Button className='outline-light' variant="outline-success mt-2 p-2"><FaGithub /> Login with github</Button>
            </ButtonGroup>
            <div>
                <h4 className='mt-4'>Find us on</h4>
                <ListGroup className="cursor-pointer">
                    <ListGroup.Item className='mb-3'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaYoutube /> Youtrbe </ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp /> Whats App </ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter /> Twitter </ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaInstagram /> Instagram </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <AddCarousel />
            </div>
        </div>
    );
};

export default RightSideNav;