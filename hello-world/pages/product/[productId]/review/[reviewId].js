import React from 'react';
import { useRouter } from 'next/router';

export default function Review() {
  // In this case with nested dynamic router we can created folder url nested path to element's
  // http://localhost:3000/product/1/review/1 to needed segment of productId
  // with nested folder/nested dynamic router
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <h1>
      Review - {reviewId} for product - {productId}{' '}
    </h1>
  );
}
