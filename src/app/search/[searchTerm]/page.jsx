import SearchList from '../../Components/Search/SearchList';
import React from 'react';

const search = async (searchTerm) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  // throw new Error('error');
  const data = await res.json();
  return data;
};

const SearchResult = async ({ params }) => {
  const { searchTerm } = params;
  const searchResults = await search(searchTerm);

  return <SearchList searchTerm={searchTerm} searchResults={searchResults} />;
};

export default SearchResult;
