import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../Common/NewsSummaryCart/NewsSummaryCart';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            {
                allNews.map(news => <NewsSummaryCart news={news} key={news._id} ></NewsSummaryCart>)
            }
        </div>
    );
};

export default Home;