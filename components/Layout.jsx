import Link from 'next/link';
import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/blogs'>Blogs</Link>
        </li>
        <li>
          <Link href='/products'>Products</Link>
        </li>
      </ul>

      {children}

      <footer>&copy; All right reserved</footer>
    </>
  );
}
