import { useRouter } from 'next/router';
import React from 'react';

export default function Post({ post }) {
  const router = useRouter();

  //  2. The paths that have not been generated at build time will not result in a 404 page.
  //      Instead, Next,js will serve a "fallback" version of the page on the first request to such a path.
  //      Is that means you can see Loading text only if there is no pre-rendered page
  //      In another words when you created at build time static pages, site, and navigate to page that doesn't exist yet
  //      You will be see Loading text and if that page that doesn't exist will be created by create method. And you will see
  //      Loading text and after that current created page with next updated data

  //      Or in can be implemented like this. If you at build time write to displayed 3 paths ID,
  //       it will be builded but if you navigate in URL input to not builded path ID
  //      you will see Loading text and then 4 ID page that currently builded
  //      and loaded while loading text exist.
  //      And this is work only if data that taken from server contains information from 0 to 100
  //      and if you write 101 and data doesn't exist you will be see Loading text and then NOTHING.

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  //  4. When that's done, the browser receives the JSON for the generated path. This will be used
  //      to automatically render the page with the required props.
  //      From the user's perspective, the page will be swapped from the fallback page to the full page.
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
  console.log(`Generating page for /posts/${params.postId}`);

  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

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

    // 27 getStaticPaths fallback true
    //  1. The paths returned from getStaticPaths will be rendered to HTML at build tim by getStaticProps
    //  2. The paths that have not been generated at build time will not result in a 404 page.
    //      Instead, Next,js will serve a "fallback" version of the page on the first request to such a path.
    //  3. In the background, Next.js will statically generate the requested path HTML and JSON.
    //       This includes running getStaticProps.
    //  4. When that's done, the browser receives the JSON for the generated path. This will be used
    //      to automatically render the page with the required props.
    //      From the user's perspective, the page will be swapped from the fallback page to the full page.
    //  5. At the same time, Next.js keeps track of the new list of pre-rendered pages.
    //       Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.
    fallback: true,
    // getStaticPaths fallback: true
    // When it might be used?
    //  The true value is most suitable if your app has a very large number of static pages that depend on data.
    //  A large e-commerce site.
    //  You want all the product pages to be pre-rendered but if you have a few thousand products,builds can take a relly long time.
    //  You may statically generate a small subset of products that are popular and use fallback: true for the rest.
    //  When someone request a page that's not generated yet, the user will see the page with a loading indicator.
    //  Shortly after, getStaticProps finishes and the page will be
    //  rendered with requested data. From the onwards, everyone whoe requests the same page will get the statically pre-rendered page.
    //  This ensures that users always have a fast experience while preserving fast builds and the benefits of Static Generation
  };
}
