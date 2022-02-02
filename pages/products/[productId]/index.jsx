import { useRouter } from 'next/router';
import React from 'react';

const Index = () => {
  const router = useRouter();
  const pdId = router.query.productId;

  return (
    <div>
      <h1>This is product Detail Page of product {pdId}</h1>
    </div>
  );
};

export default Index;
