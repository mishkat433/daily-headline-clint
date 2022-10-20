import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/news-categories")
            .then(res => {
                setCategories(res.data)
            })
    }, [])
    return (
        <div>
            <h4 className=''>All news category</h4>
            {categories.map(category => <p key={category.id} className=""><Link to={`/category/${category.id}`} className='text-bg-'>{category.name}</Link> </p>)}
        </div>
    );
};

export default LeftSideNav;