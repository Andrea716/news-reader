import axios from 'axios';

export const fetchNews = async (query, category) => {
  const response = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=Le3pm3l6zuVsYMfbQd4D5oJvvwI3YSneTBn7uY5N&search=usd', {
    params: {
      q: query,
      category: category,
      apiKey: 'Le3pm3l6zuVsYMfbQd4D5oJvvwI3YSneTBn7uY5N',
    },
  });
  return response.data; // Return the data you need
};
