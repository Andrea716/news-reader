import React from 'react';

function NewsList({ articles }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((article) => (
        <div key={article.url} className="border rounded p-4">
          <img 
            src={article.urlToImage} 
            alt={article.title} 
            className="w-32 h-32 object-cover mb-2" // Set fixed width and height
          />
          <h3 className="font-semibold">{article.title}</h3>
          <p className="text-sm text-gray-500">{article.publishedAt}</p>
          <p>{article.description}</p>
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 mt-2 inline-block"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
