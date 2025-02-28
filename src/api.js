const API_KEY = "a885b175578c4d5386452982023dafd3";
const BASE_URL = "https://newsapi.org/v2";

export const fetchTrendingMovies = async () => {
    const response = await fetch(`${BASE_URL}/everything?q=tesla&from=2025-01-28&sortBy=publishedAt&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.articles;
}