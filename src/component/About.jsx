import "../css/About.css";

const About = () => {
    return (
        <div className="about-container">
        <div className="news-section">
            <h1>Breaking News From Around The World</h1>
            <p>
            Get real-time updates on global events with our comprehensive news
            coverage powered by NewsAPI.
            </p>
            <button className="read-more">Read Full Story</button>
        </div>
        <div className="news-placeholder">
            <div className="news-card">
            <h3>Loading headline...</h3>
            </div>
        </div>
        </div>
    );
};

export default About;