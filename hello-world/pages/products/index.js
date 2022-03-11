import React from 'react';
import Products from '../../components/products';

export default function ProductsList({ products }) {
  return <Products products={products} />;
}

export async function getStaticProps() {
  const response = await fetch(
    'https://gist.githubusercontent.com/DantesSagan/bd028cfe5d18f3e5985877aa6d868f3a/raw/b8d40068b6d8db56f0ad3eda8349629ef5e0b48c/products'
  );
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}
