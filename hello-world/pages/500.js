import React from 'react';

export default function Custom500() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ textDecoration: 'underline' }}>
        500 - Server-side error occurred
      </h1>
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
    </div>
  );
}
