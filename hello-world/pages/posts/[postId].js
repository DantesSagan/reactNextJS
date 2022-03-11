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
    // 26 getStaticPaths
    // fallback: false
    //  1. The paths returned getStaticPaths will be rendered to HTML at build time by getStaticProps
    //  2. if fallback is set to false, them any paths not returned by getStaticPaths will result in a 404 page
    //  3. By following second option. If you have 3 recieved data and 3 getting paths data from server you can take only this data and not other
    //  When use fallback: false,
    //      The false value is most suitable if you have an application with a small nubmer of paths to pre-render
    //      When new pages are not added often.
    //      A blog site with a few articles is a good example for fallback set to false
    //      Each blog post with be statically generated at build time which helps with fast load times as a SEO
    // fallback: true;
    // fallback: 'blocking'
    fallback: false,
  };
}
