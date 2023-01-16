import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto p-5 bg-gradient-to-tr from-red-500 via-red-700 to-red-900">
      <p className="text-center text-white">
        &copy; {year} time to code - todos app built with Next.js by{' '}
        <Link
          href={
            'https://www.linkedin.com/in/muhammad-azizul-hoque-jiku-775057211/'
          }
          className="font-bold font-mono"
        >
          Muhammad Azizul Hoque Jiku{' '}
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
