import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const ReviewId = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;

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
      <button onClick={() => router.back()}>Go Back</button>
      <h1>
        Product id is {productId} & Review {reviewId}
      </h1>
    </>
  );
};

export default ReviewId;
