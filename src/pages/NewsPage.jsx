import React from 'react'
import { useEffect, useState } from 'react';
import { fetchTrendingNews } from '../api.js';
import NewsCard from '../component/NewsCard.jsx';
import '../css/NewsPage.css';

const NewsPage = () => {

    const [data, setData] = useState(null);
    useEffect(() => {
        fetchTrendingNews().then((data) => {
        console.log(data);
        setData(data);
        }
        )
    }, [])
        
  return (
    <div className='news-container' id='news'>
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