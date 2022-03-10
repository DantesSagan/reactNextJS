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
// To summarize what we are done
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
  return {
    props: {
      post: data,
    },
  };
}
export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  // This is how to fecth list of paths for dymanic page
  // and displayed all id of posts for get individual page of data
  const paths = data.map((dataItem) => {
    return {
      params: {
        postId: `${dataItem.id}`,
      },
    };
  });

  return {
    //   Need to try implemented this "postId: assignment" to every possible id from 0 to 1000000
    // paths: [
    //   {
    //     params: {
    //       postId: '1',
    //     },
    //   },
    // ],
    paths,
    fallback: false,
  };
}
