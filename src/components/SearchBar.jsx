import React from 'react';

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search-bar p-4">
      <input
        type="search"
        placeholder="Search by products..."
        className="w-full p-2 border rounded"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;