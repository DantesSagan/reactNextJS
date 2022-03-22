import React from 'react';
import Products from '@layout/products';

export default function ProductsList({ products }) {
  return <Products products={products} />;
}

export async function getStaticProps() {
  console.log('Generating / Regenerating ProductsList');

  const response = await fetch('http://localhost:4000/products');
  const data = await response.json();
  if (!response.ok) {
    // If there is a server error, you might want to
    // throw an error instead of returning so that the cache is not updated
    // until the next successful request.
    throw new Error(`Failed to fetch posts, received status ${res.status}`);
  }
  return {
    props: {
      products: data,
    },
    revalidate: 5,
  };
}
