import React from 'react';

function NewsDetail({ article, onClose }) {
  const { title, urlToImage, content, author, publishedAt, source } = article;

  return (
    <div className="fixed inset-0 bg-white overflow-auto p-4">
      <button onClick={onClose} className="text-sm text-red-500 mb-4">Close</button>
      {urlToImage && <img src={urlToImage} alt={title} className="w-full h-64 object-cover rounded mb-4" />}
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-500 text-sm mb-2">{new Date(publishedAt).toLocaleDateString()} | {author}</p>
      <p className="mb-4">{content}</p>
      <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Read full article</a>
    </div>
  );
}

export default NewsDetail;
