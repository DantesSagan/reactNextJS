import Link from 'next/link';
import React from 'react';

export default function PostList({ posts }) {
  return (
    <div>
      <h1>List os Posts</h1>
      {posts.map((postItem) => {
        return (
          <div key={postItem.id} style={{ cursor: 'pointer' }}>
            <Link href={`posts/${postItem.id}`} passHref>
              <h2>
                {postItem.id} - {postItem.title}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
