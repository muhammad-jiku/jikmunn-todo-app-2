import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-auto p-5 bg-gradient-to-tr from-red-500 via-red-700 to-red-900">
      <p className="text-center text-white">
        &copy; {year} time to code - todos app built with Next.js by Muhammad
        Azizul Hoque Jiku{' '}
      </p>
    </div>
  );
};

export default Footer;
