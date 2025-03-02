// const API_KEY = "a885b175578c4d5386452982023dafd3";
// const BASE_URL = "https://newsapi.org/v2";

export const fetchTrendingMovies = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2025-02-02&sortBy=publishedAt&apiKey=a885b175578c4d5386452982023dafd3`);
    const data = await response.json();
    return data.articles;
}


// https://newsapi.org/v2/everything?q=tesla&from=2025-02-02&sortBy=publishedAt&apiKey=a885b175578c4d5386452982023dafd3