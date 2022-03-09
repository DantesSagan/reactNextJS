import React from 'react';

export default function Post({ post }) {
  return (
    <div>
      <h2>
        {post.id} - {post.title}{' '}
      </h2>
      <p>{post.body}</p>
    </div>
  );
}
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.postId}`
  );
  const data = await response.json();
  console.log(data);
  return {
    props: {
      post: data,
    },
  };
}
