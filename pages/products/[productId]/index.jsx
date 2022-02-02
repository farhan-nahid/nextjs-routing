import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Index = () => {
  const router = useRouter();
  const [singlePd, setSinglePd] = useState({});
  const pdId = router.query.productId;
  const review = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handelClick = (pdId, id) => router.push(`/products/${pdId}/review/${id}`);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${pdId}`)
      .then((res) => res.json())
      .then((data) => setSinglePd(data))
      .catch((err) => console.log(err));
  }, [pdId]);
  console.log(singlePd);
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
      <div className='single__pd'>
        <h1>This is product Detail Page of {singlePd.name}</h1>
        <h2>Order Email : {singlePd.email}</h2>
        <h3>Order UserName : {singlePd.username}</h3>
      </div>
      {review.map((r) => {
        return (
          <button key={r} onClick={() => handelClick(pdId, r)}>
            Review {r}
          </button>
        );
      })}
    </>
  );
};

export default Index;
