import axios from 'axios';

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function Products({ products }) {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter();

  const addSuperHero = (hero) => {
    return axios.post('http://localhost:4000/products', hero);
  };

  const handleAddHeroClick = () => {
    console.log({ id });
    const hero = { id, title, price, description };
    addSuperHero(hero);
  };

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
        <h1>List os Products</h1>
        <button onClick={() => router.back()}>Back</button>
        <button onClick={() => window.history.forward()}>Forward</button>
        <br />
        <input value={id} onChange={(e) => setId(e.target.value)} />
        <br />
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <input value={price} onChange={(e) => setPrice(e.target.value)} />
        <br />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button onClick={handleAddHeroClick}>AddId</button>
        {products.map((productsItem) => {
          return (
            <div key={productsItem.id} style={{ cursor: 'pointer' }}>
              <Link href={`products/${productsItem.id}`} passHref>
                <div>
                  <h2>
                    {productsItem.id} - {productsItem.title}
                  </h2>
                  <p>{productsItem.price}</p>
                </div>
              </Link>
              <hr />
            </div>
          );
        })}
      </section>
    </div>
  );
}
