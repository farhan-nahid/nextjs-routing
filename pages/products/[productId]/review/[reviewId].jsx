import { useRouter } from 'next/router';
import React from 'react';

const ReviewId = () => {
  const router = useRouter();
  const rId = router.query.reviewId;

  return (
    <div>
      <h1>This is Review {rId}</h1>
    </div>
  );
};

export default ReviewId;
