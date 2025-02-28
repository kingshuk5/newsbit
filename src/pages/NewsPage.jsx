import React from 'react'
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../api.js';
import NewsCard from '../component/NewsCard.jsx';
import '../css/NewsPage.css';

const NewsPage = () => {

    const [data, setData] = useState(null);
    useEffect(() => {
        fetchTrendingMovies().then((data) => {
        console.log(data);
        setData(data);
        }
        )
    }, [])
        
  return (
    <div className='news-container'>
    {data &&
        data.map((news, index) => {
        return (
            <div key={index}>
            <NewsCard news={news} />
            </div>
        )
        }
        )
    }
    </div>
  )
}

export default NewsPage