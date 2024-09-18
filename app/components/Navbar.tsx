import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 py-10 w-full bg-transparent flex justify-between items-center text-black">
      <Link href={'/'} className="text-xl font-medium">
        Alfan Aisy
      </Link>
      <Link href={'/about'} className="text-xl font-medium">
        About
      </Link>
    </nav>
  );
};

export default Navbar;
