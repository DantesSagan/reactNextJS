import Link from 'next/link';
import React from 'react';

export default function ProductList({ productId = 100 }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <li>
        <Link href='/product/1'>
          <a>Link to product 1</a>
        </Link>
      </li>
      <li>
        <Link href='/product/2'>
          <a>Link to product 2</a>
        </Link>
      </li>
      <li>
        {/* Using a replace parameter on a Link component
        will be give you a replace current history state instead of adding new URL in the tag
        to a Home page instead of Product list page
        */}
        <Link href='/product/3' replace>
          <a>Link to product 3</a>
        </Link>
      </li>
      <li>
        <Link href={`/product/${productId}`}>
          <a>Link to product {productId} </a>
        </Link>
      </li>
    </div>
  );
}
