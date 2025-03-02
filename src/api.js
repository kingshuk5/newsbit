// const API_KEY = "a885b175578c4d5386452982023dafd3";
// const BASE_URL = "https://newsapi.org/v2";

export const fetchTrendingNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2025-03-01&to=2025-03-01&sortBy=popularity&pagesize=21&apiKey=a885b175578c4d5386452982023dafd3`);
    const data = await response.json();
    return data.articles;
}

