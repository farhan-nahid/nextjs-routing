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
