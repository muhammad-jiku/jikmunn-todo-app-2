import React from 'react';
import Link from 'next/link';

const SearchList = ({ searchTerm, searchResults }) => {
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

export default SearchList;
