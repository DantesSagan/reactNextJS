import Link from 'next/link';
import React from 'react';
import Posts from '../../components/posts';

export default function PostList({ posts }) {
  return <Posts posts={posts} />;
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return {
    props: {
      posts: data.slice(0, 10),
    },
  };
}
