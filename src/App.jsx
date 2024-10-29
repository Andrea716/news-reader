import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar'; // Corrected import casing
import NewsList from './components/NewsList';

const API_KEY = 'c9e21bebfacf454eb28b98b89e864f97';
const API_URL = 'https://newsapi.org/v2/everything';

function App() {
  const [query, setQuery] = useState('technology'); // Optional default query
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setError(null);
        const url = `${API_URL}?q=${query}&apiKey=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log('API Response:', data);

        if (data.status === 'ok') {
          setArticles(data.articles);
        } else {
          setError('Failed to fetch news. Please try again.');
        }
      } catch (error) {
        setError('An error occurred. Please try again.');
      }
    };

    if (query) fetchNews();
  }, [query]);

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">News Reader</h1>
      <SearchBar setQuery={setQuery} /> {/* Ensure casing matches the import */}
      
      {error && <p className="text-red-500">{error}</p>}
      
      <NewsList articles={articles} />
    </div>
  );
}

export default App;
