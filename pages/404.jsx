import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, [router]);

  return (
    <div className='not-found'>
      <h1>Ooops...</h1>
      <h2>That page cannot be found</h2>
      <h5>After 5 sec we will redirect you in the home page</h5>
      <p>
        Go back to the{' '}
        <Link href='/'>
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
