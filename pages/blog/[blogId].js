import Head from 'next/head';

import React from 'react';

export default function Blog({ title, description }) {
  return (
    <div>
      {/* This is local version HTML element of HEAD to Blog page 
        of blogId indexes 
        */}
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <h1 className='content'>Article</h1>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      title: 'Article Title',
      description: 'Article description',
    },
  };
}
