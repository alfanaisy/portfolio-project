'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="sticky top-0 py-6 lg:py-10 w-full bg-transparent flex justify-between items-center text-black animation-slide-up">
      <Link href={'/'} className="lg:text-xl font-medium z-50">
        Alfan Aisy
      </Link>
      {path === '/' ? (
        <Link
          href={'/about'}
          className="lg:text-xl font-medium hover:underline"
        >
          About
        </Link>
      ) : (
        <Link href={'/'} className="lg:text-xl font-medium hover:underline">
          Work
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
