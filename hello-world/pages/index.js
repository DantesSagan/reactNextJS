import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  // Link component to path with slash - link included in the component
  // With the anchor tag with the text and the href for the route to the component

  // 13 Routing summary
  //    1.Page based routing mechanism - Pages are associated with a route based on their file name
  //    2.Nested routes - Nested folder structure, files will be automatically routed in the same way in the URL
  //    3.Dynamic routes - Can be created by adding square brackets to a page name
  //    4.Catch all routes - Add three dots inside square brackets to create a catch all route.
  //    Helpful when you want different URLs for the same page layout or even when you're working with pages where some of the route parameters are optional for emxaple - [[...params]].js
  //    5. Link component to navigate on click of an element
  //    6.useRouter hook's router.push method to navigate programmatically
  //    7.How to create a custom 404 page not found

  // 14 Pre-rendering & Data fetching intro
  //  Types of pre-rendering
  //  1.Static generation
  //  -without data
  //  -with data
  //  -incremental static generation
  //  -dymanic parameters when fetching data
  // 2.Server-side rendering
  //  -data fetching
  //  Client-side data fetching
  //  Combining pre-rendering with client-side data fetching

  // 15 Pre-rendering
  //  1.Pre-rendering improve performance
  //      In a React app, you need to wait for the JavaScript to be exectued
  //      Perhaps fetch data from an external API and the render the UI
  //      There is a wait time for the user
  //      With a pre-rendered page, the HTML is already generated and loads faster
  //  2.Pre-rendering helps with SEO
  //      If you're building a blog or an e-commerce site, SEO is a concern
  //      With a React app, if the search engine hits your page, it only sees a div tag with id equal to root
  //      If serach engine hits a pre-rendered page though, all the content is present
  //      in the source code which will help index that page
  //      if SEO is of concern for your app, pre-rendering is definitely what you want
  const router = useRouter();

  const handleClick = () => {
    console.log('Placing you order');
    router.replace('/product');
  };
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h1>Home page</h1>
      <nav
        style={{
          justifyItems: 'center',
          display: 'inline-block',
          border: '5px solid red',
          borderRadius: '15px',
          padding: '15px',
        }}
      >
        <ul>
          <li>
            <Link href='/blog'>
              <a>Link to Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/blog/first'>
              <a>Link to Blog first</a>
            </Link>
          </li>

          <li>
            <Link href='/product'>
              <a>Link to product</a>
            </Link>
          </li>
        </ul>{' '}
        And the same thing as <i>Link to Product</i> like example below <br />
        {/* Navigate Programmatically */}
        <button className='' onClick={handleClick}>
          Place Order
        </button>
      </nav>
    </div>
  );
}
