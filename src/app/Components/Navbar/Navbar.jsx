import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="p-5 bg-red-800 text-center text-white ">
      <h1 className="text-2xl font-bold">Welcome here!</h1>
      <Link href="/">Home</Link>
      <Link href="/todos">Todos</Link>
      <Link href="/search">Search</Link>
    </header>
  );
};

export default Navbar;
