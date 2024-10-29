import React from 'react';

function NewsCard({ article }) {
  const { title, urlToImage, description, publishedAt, author, source, url } = article;

  return (
    <div className="border p-4 rounded-lg">
      {urlToImage && <img src={urlToImage} alt={title} className="w-full h-48 object-cover rounded-md" />}
      <h2 className="text-xl font-semibold mt-2">{title}</h2>
      <p className="text-sm text-gray-500 mt-1">{new Date(publishedAt).toLocaleDateString()}</p>
      <p className="mt-2">{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 block">Read more</a>
    </div>
  );
}

export default NewsCard;
