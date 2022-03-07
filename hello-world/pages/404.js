import Link from 'next/link';
import React from 'react';

export default function PageNotFound() {
  return (
    <h1 style={{ textAlign: 'center' }}>
      <span style={{ fontSize: '68px', textDecoration: 'underline' }}>404</span>
      <br /> page not found <br />
      <Link href='/'>
        <h4
          style={{
            marginTop: '25px',
            padding: '5px',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            width: '350px',
            height: '100px',
            margin: 'auto',
            borderRadius: '15px',
            border: '5px solid red',
          }}
          className='rHome'
        >
          Return home
        </h4>
      </Link>
    </h1>
  );
}
