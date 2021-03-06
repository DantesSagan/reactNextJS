import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Products({ products }) {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [check, setCheck] = useState(false);
  const router = useRouter();

  const deleteSuperHero = () => {
    return axios.delete(`http://localhost:4000/products/${products.id}`);
  };

  const handleDeleteHeroClick = () => {
    const deleteID = products.id;

    deleteSuperHero(deleteID);
  };

  const updateSuperHero = async (hero) => {
    return await axios.patch(`http://localhost:4000/products/${products.id}`, hero);
  };

  const handleUpdateHeroClick = () => {
    const hero = { id, title, price, description };

    updateSuperHero(hero);
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
          <h1>Change List os Products</h1>
          <br />

          {check ? (
            <div
              style={{
                border: '2px solid black',
                borderRadius: '15px',
                padding: '5px',
                margin: '5px',
              }}
            >
              <h1>ID</h1>
              <input value={id} onChange={(e) => setId(e.target.value)} />
              <br />
              <h1>Title</h1>
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
              <br />
              <h1>Price</h1>
              <input value={price} onChange={(e) => setPrice(e.target.value)} />
              <br />
              <h1>Description</h1>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <br />
              <button onClick={handleUpdateHeroClick}>AddId</button>
              <br />
              <button onClick={() => setCheck(!check)}>Cancel</button>
            </div>
          ) : (
            <button onClick={() => setCheck(!check)}>Add ID form</button>
          )}
        </section>
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
