import { useRouter } from 'next/router';

import React from 'react';

export default function ProductDetail() {
  // We 1st created file a filename productId.js
  // this is contains any map url /product/productId (any of them 1,2,3,sweater etc)
  // next.js always tryes to match in the pages folder nested or not before trying to match to dynemic routes
  //
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <h1>
      Detail about product -
      <span
        style={{ color: 'red', padding: '5px', textDecoration: 'underline' }}
      >
        {productId}{' '}
      </span>
    </h1>
  );
}
