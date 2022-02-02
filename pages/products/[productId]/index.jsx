import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Index = () => {
  const router = useRouter();
  const pdId = router.query.productId;

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
      <h1>This is product Detail Page of product {pdId}</h1>
    </>
  );
};

export default Index;
