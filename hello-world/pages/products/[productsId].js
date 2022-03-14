import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';

export default function Products({ products }) {
  const router = useRouter();

  const deleteSuperHero = () => {
    return axios.delete(`http://localhost:4000/products/${products.id}`);
  };

  const handleDeleteHeroClick = () => {

    const deleteID = products.id;
   
    deleteSuperHero(deleteID);
    
  };

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <section
        style={{
          textAlign: 'center',
          justifyItems: 'center',
          display: 'inline-block',
          border: '5px solid red',
          borderRadius: '15px',
          padding: '15px',
        }}
      >
        <h2>
          {products.id} - {products.title} - {products.price}{' '}
        </h2>
        <p>{products.description}</p>
        <button onClick={() => router.back()}>Back</button>{' '}
        <button onClick={handleDeleteHeroClick}>Delete</button>
      </section>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(`Regenerating product ${params.productsId}`);
  const response = await fetch(
    `http://localhost:4000/products/${params.productsId}`
  );
  console.log(`Generating page for /products/${params.productsId}`);

  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }
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
export async function getStaticPaths() {
  const response = await fetch('http://localhost:4000/products');
  const data = await response.json();

  // This is how to fecth list of paths for dymanic page
  // and displayed all id of posts for get individual page of data
  const paths = data.map((dataItem) => {
    return {
      params: {
        productsId: `${dataItem.id}`,
      },
    };
  });

  return {
    // paths: [{ params: { productsId: '1' } }],
    paths,
    fallback: true,
  };
}
