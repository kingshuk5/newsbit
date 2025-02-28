
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from './api.js';
import './App.css';
import Navbar from './component/Navbar.jsx';
import MovieCard from './component/NewsCard.jsx';
import NewsPage from './pages/NewsPage.jsx';

function App() {

  return (
    <div>
      <Navbar />
      <NewsPage />
    </div>
  )
}

export default App
