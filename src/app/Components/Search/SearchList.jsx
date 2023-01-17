'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SearchList = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearch('');
    router.push(`/search/${search}`);
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          placeholder="Search Here"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchList;
