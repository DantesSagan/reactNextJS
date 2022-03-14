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

  // 16 Static generation
  //      A method of pre-rendering where the HTML pages are generated at build time
  //      The HTML with all the data that makes up the content of the web page are negerated in advance
  //        when you build your application
  //      Recommended method to pre-render pages whenever possible
  //      Page can be built once, cached by a CDN(contain delivery network)and served to the client almost instantly
  //      Ex: Blog pages, e-commerce Product pages, documentation and marketing pages

  //      Next JS, by default will pre-render every page in our app
  //      The HTML for every page will automatically be statically generated whne we build our application
  //      "Throughout this video, you've been mentioning that pages are generated at build time.
  //      But there is no build for application yet, is there? Aren't we running application in development mode?"
  //        Prod Server - An optimized build is created once and you deploy that build.
  //      You don't make code changes on the go once it is deployed.
  //        Dev Server - we should be able to make changes in our code and we want that code to immediately
  //      reflect in the browser.
  //      For production builds, a page will be pre-rendered once when we run the build command.
  //      In development mode, the page is pre-rendered for every request you make.

  // Static generation contd.
  //       Next JS, by default, without any configuration,
  //       statically generates every page in our app when we build it for production.
  //      This allows the page to be cached by a CDN and indexed by a search engine.

  // Static generation & DataAl
  //    Static generation without data
  //      Static generation without data can be used with and without data
  //          For pages that can be generated without fetching external data at buld time.
  //          Builds the app for production => The HTML is generated - no need to fetch external data
  //    Static generation with data
  //      For pages can only be generated after fetching external data at build time.
  //      The HTML can only be generated after fetching data
  // 20 Inspecting Static Generation Builds with creating .next

  //  21 Running static generation builds
  //  Link Pre-fetching
  //  Any <Link /> component in the viewport (initially or through scroll) will be prefetched by default
  //  (including the corresponding data for pages using Static generation)

  // Link pre-fetching contd.
  // When a page with getStatciProps is pre=rendered at build time, in addition
  // to the page HTML file, Next.js generates a JSON file holding the result of running getStaticProps
  // The JSON file will be used in client-side routing through next/link, or next/router
  //  When you navigate to a page that's pre-rendered using getStaticProps, Next.js
  // fetches the JSON file (pre-computed at build time) and uses it as the props to create the page component client-side
  // Client-side page transitions will not call getStaticProps as only the exported JSON is used

  // Static generation summary so far

  //  Static generation is method of pre-rendering where the HTML pages are generated at build time
  // With and without external data
  // Export getStaticProps function for external data
  // HTML, JavaScript and JSON file are generated
  //  if you navigate directly to the page route, the HTML file is served
  // if you navigate to the page route from a different route, the page is created client side using the
  // JavaScript and JSON prefetched from the server

  // 23 Inspecting getStaticPaths builds

  //  When we are uses command like npm run build we generate static build of site with
  //  fetched data before it will be in UI and this is helps a lot to more flexible and faster when you using site

  // 29 ICR
  // Incremental static regeneration (ISR)
  //  Therese was a need to update only these pages which needed a change without having to rebuild the entire app

  //  With ISR, Next.js allows you to update static pages after you've built your application
  //  You can statically generate individual pages without needing rebuld the entire site, effectively solving the issue of dealing with stale data

  //  How?
  //  In the getStaticProps function, apart from the props key, revalidate key
  //  The value for revalidate is the number of seconds after which a page re-generation can occur

  // 30 Inspecting ISR builds
  // Stale while revalidate
  // Data fetching and refetching data from /products between Browser and HTML
  // For any request and after Browser withing 30 seconds   the same cached HTML page was served even there is a change in the data by that page
  // After 30 sec have elapsed if a user makes request to /products Next.js is still going to send cached version of the page.
  // This page is a Stale page because not contain fresh data. But meanwhile when data is changed Page regeneration is triggered.
  // Once page was successfully regenerated Next.js will invalidate the cached and for any new requests it serves the updated products page.
  // If new data has not regenerated the old data continue the serve
  // Basically Next.js the serve Stale page while revalidation is happening in the background

  // Re-generation
  // A re-generation is initiated only if a user makes a request after the revalidate time
  // If a user visits our product details page but there is no other user hitting that page the entire day, the re-generation does not happen
  //  Revalidate doesn not mean the page automatically re-generated every 10 seconds
  //  it simply denotes the time after which, if a user makes a request, a re-generation has to be initiated
  //  The re-generation can also fail and the previously cached HTML could be served till the subsequent re-generations succeed

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
        <ol>
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
          And the same thing as <i>Link to Product</i> like example below <br />
          {/* Navigate Programmatically */}
          <button className='' onClick={handleClick}>
            Place Order
          </button>
          <li>
            <Link href='/users'>
              <a>Link to list of users</a>
            </Link>
          </li>
          <li>
            <Link href='/posts'>
              <a>Link to list of posts</a>
            </Link>
          </li>
          <li>
            <Link href='/products'>
              <a>Link to list of products</a>
            </Link>
          </li>
        </ol>{' '}
        <button onClick={() => window.history.forward()}>Forward</button>
      </nav>
    </div>
  );
}
