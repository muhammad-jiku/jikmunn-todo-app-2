import Link from 'next/link';
import React from 'react';

const search = async (searchTerm) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  return data;
};

const SearchResult = async ({ params }) => {
  const { searchTerm } = params;
  const searchResults = await search(searchTerm);
  console.log(searchResults);
  return (
    <div>
      <p className="text-gray-500 text-sm">You searched for: {searchTerm} </p>
      <ol className="space-y-5 p-5">
        {searchResults?.organic_results.map((result, idx) => (
          <li key={idx} className="list-decimal">
            <p className="font-bold">{result.title} </p>
            <p> {result.snippet}</p>
            <Link href={`${result.link}`} target="_blank">
              {result.link}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchResult;
