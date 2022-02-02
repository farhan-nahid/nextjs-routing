import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

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

      {products.length ? (
        <div className='container'>
          {products.map((pd) => {
            const { id, name } = pd;
            return (
              <div key={id} className='item'>
                <h1>{name}</h1>
                <Link href={`/products/${id}`}>See Details</Link>
              </div>
            );
          })}
        </div>
      ) : (
        'Loading'
      )}
    </>
  );
};

export default Index;
