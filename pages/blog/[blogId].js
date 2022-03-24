import Head from 'next/head';

import React from 'react';

export default function Blog({ title, description }) {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* This is local version HTML element of HEAD to Blog page 
        of blogId indexes 
        */}
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <h1 className='content'>Article</h1>
      <h2 style={{ textAlign: 'center' }}>{description}</h2>
      <p style={{ textAlign: 'center' }}>
        {/* {process.env.DB_USER} - {process.env.DB_PASSWORD} */}
        <br />
        {process.env.NEXT_PUBLIC_ANALYTICS_ID}
      </p>
    </div>
  );
}

export async function getServerSideProps() {
  // 64 ENV variable
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  console.log(`Connected user with name = ${user} and password = ${password}`);

  return {
    props: {
      title: 'Article Title',
      description: 'Article description',
    },
  };
}
