import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCart = ({ news }) => {
    const { title, details, _id, author, image_url, total_view, rating } = news;
    const { img, name, published_date } = author;
    return (
        <div>

            <Card className='mb-5'>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex gap-3'>
                        <Image roundedCircle src={img} style={{ height: "60px" }}></Image>
                        <div>
                            <h5>{name}</h5>
                            <p>{published_date}</p>
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <FaShareAlt />
                        <FaRegBookmark />
                    </div>
                </Card.Header>

                <Card.Body>
                    <Card.Title>{title} </Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <p>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>Read more</Link></p>
                                : <p>{details}</p>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between align-items-center pb-0'>
                    <p><FaStar className='text-warning me-2' /> {rating.number}</p>
                    <p><FaEye className=' me-2' /> {total_view}</p>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default NewsSummaryCart;