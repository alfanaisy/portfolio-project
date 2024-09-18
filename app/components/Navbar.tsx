import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 py-6 lg:py-10 w-full bg-transparent flex justify-between items-center text-black animation-slide-up">
      <Link href={'/'} className="lg:text-xl font-medium z-50">
        Alfan Aisy
      </Link>
      <Link href={'/about'} className="lg:text-xl font-medium">
        About
      </Link>
    </nav>
  );
};

export default Navbar;
