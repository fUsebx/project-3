import axios from 'axios'; 

function getNews() {
  let results = axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7941c058b4d14a3cbe7fedf92e45c6f0")
  .then(response => response.json());   
 
  return results.articles;
}

export default getNews; 