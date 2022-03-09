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
// To summarys what we are done
// In getStaticProps we extracted params from context object that getStaticProps automatically recieves
// and from this params object we get hold off the postId route parameter
// We made the API call, fetch the data and pass it into the page component as props
// Also we made getStaticPaths function to inform Next.js of the possible
// values that postId.js page should the statically generated for
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  console.log(data);
  return {
    props: {
      post: data,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [{ params: { postId: '1' } }],
    fallback: false,
  };
}
