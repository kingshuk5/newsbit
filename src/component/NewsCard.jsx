import "../css/NewsCard.css";
import template from "../assets/news_template.jpeg";

const NewsCard = ({ news }) => {
    return (
        <div className="news-card">
        <a href={news.url} target="_blank" rel="noopener noreferrer">
            <img src={news.urlToImage} alt={news.title} className="news-image" />
            <div className="news-details">
            <h2 className="news-title">{news.title}</h2>
            <p className="news-author">By: {news.author || "Unknown"}</p>
            <p className="news-date">Published: {news.publishedAt.slice(0, 10)}</p>
            <p className="news-description">{news.description}</p>
            </div>
        </a>
        </div>
    );
};

export default NewsCard;
