import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Products({ products }) {
  const router = useRouter();
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
