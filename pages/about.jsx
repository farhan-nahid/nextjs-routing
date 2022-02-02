import Link from 'next/link';
import React from 'react';

const About = () => {
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
      <h1>This is About page</h1>
    </>
  );
};

export default About;
