import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../Common/NewsSummaryCart/NewsSummaryCart';

const Category = () => {
    const Allnews = useLoaderData();
    return (
        <div>
            <h4>This category has news : {Allnews.length}</h4>
            {
                Allnews.map(news => <NewsSummaryCart news={news} key={news._id}></NewsSummaryCart>)
            }
        </div>
    );
};

export default Category;