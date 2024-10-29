import React, { useState } from 'react';

function SearchBar({ setQuery, setCategory }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setQuery(input);
  };

  return (
    <div className="mb-4 flex items-center">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search news..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 mr-2 rounded-l"
      />
      
      {/* Category Dropdown */}
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 mr-2"
      >
        <option value="">All</option>
        <option value="technology">Technology</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
      </select>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-r"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
