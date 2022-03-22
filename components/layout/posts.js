import Link from 'next/link';
import React from 'react';

export default function Posts({ posts }) {
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
