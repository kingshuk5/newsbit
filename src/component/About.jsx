import "../css/About.css";
import template from "../assets/news_template.jpeg";

const About = () => {
    return (
        <div className="about-container" id="home">
        <div className="news-section">
            <h1><span>Breaking News </span>From Around The World</h1>
            <p>
            Get real-time updates on global events with our comprehensive news
            coverage powered by NewsAPI.
            </p>
            <a href="https://www.thehittimes.com/">
                <button  className="read-more">Read Full Story</button>
            </a>
        </div>
        <div className="news-placeholder">
            <h3>Get the recent updates...</h3>
        </div>
        </div>
    );
};

export default About;