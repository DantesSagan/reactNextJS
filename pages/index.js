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

  //  31 Server-side rendering
  //  1.Static generation
  //  2.Server-side Rendering

  // Static generation
  // The HTML is statically generated at build time. The built page is then cached and reused for eacht request.
  // For a dynamic page with getStaticPaths and fallback set to true the page is not generated at build time but is generated on the initial request.
  // With incremental static regeneration, a page can be regenerated for a request after the revalidation time has elapsed.
  // For the most part, the pages are generated using getStaticProps when you build the project.

  // Problems with static generation
  // We cannot fetch data at request time
  // With not being able to fetch data per request, we run into the problem of stale data.
  // Let's say we are building a news website
  // The content is very dymanic in the in the sense that new articles can be published almost every second.
  // getStaticProps will fetch the news at build time which is not suitable at all
  // getStaticPaths will help fetch the data on the initial request but it is then cached for subsequent requests
  // Incremental static regeneration (ISR) can help but if revalidate is 1 second,
  //        we still might not always see the most up to date news when the regeneration is happening in the background
  // Rather fetch the data on the client side by making a get request from the component. But no SEO.

  // We don't access to the incoming request
  // Problem when the data that needs to be fetched is specific to a user
  // Let's say we are building a website similar to twitter
  // As as user, i should be able to see tweets that are personalized based on my interests
  // The tweets that i see alsno need to be SEO friendly as it is public content that amyone in the world can see
  // To fetch tweets specific to the user, we need the userId. And that can be obtained only if have we access to the incoming request.
  // You could do it client side in useEffect for example but that means you again miss out on SEO

  // Server-side Rendering
  // Next.js allows you to pre-render a page not at build time but at request time
  // The HTML is generated for every incoming request
  // SSR is a form of pre-rendering where the HTML is generated at request time
  // SSR is required when you need to fetch data per request and also when you need to fetch personalized data keeping in mind SEO

  // 36 Client-side Data fetching
  // Two forms of pre-rendering
  //          Static generation & server-side rendering
  //  How to fetch data
  //           getStaticProps & getServerSideProps

  // You might not always need to pre-render the data
  // Ex: User dashboard page
  // It is private, that is behind a login screen
  // Highly user-specific and SEO is not relevant
  // No need to pre-render the data
  // You can rely on client side data fetching

  // 38 Pre rendering + Client side Data fetching
  //  Event listing page
  //  A page that shows a list of events happening around you
  //  SEO + Request time data fetching => Server side rendering with getServerSideProps
  //  (ideally, botn pagination and filtering would takep place client but, for this example, we're only going to focus on filtering)

  // 39 Pre-rendering & data fetching summary
  // Pre-rendering refers to the process of generating HTML is advance which results in better performance and SEO
  // Next js supports two forms of pre-rendering: -Static generation and Server-side rendering

  // Static generation
  // A method of pre-rendering where the HTML pages are generated at build time
  // Pages can be built once, cached by a CDN and served to clietns almost instanlty
  // Example: Marketing or Bloggin site
  //  For a normal page, use getStaticPages function to fetch the data ahead of time
  //  For a dynamic page, you also need the getStaticPaths function
  // Fallback: false | true | 'blocking'
  // Pages cannot be updated without a full re-build

  // Incremental Static Regeneration

  //  Server-side renedering
  //      Fetch data at request time
  //      Personalize data based on a user information in the incoming request
  //      getServerSideProps function helps with SSR data fetching
  //      Combining pre-rendering with clietn-side data fetching
  //      Shallow routing - Routing without calling getStaticProps/getServerSideProps

  // 40 API
  // API router feature & how to create a basic API in Next.js
  // Handle Get requests
  // Handle POST request
  // Dynamic API router
  // Handle DELETE request
  // Catch all API routes

  // 41 API ROUTES
  // Next.js is a full stack framework
  // You can write the FE code in React and also write APIs that can be called by the front end code
  // API routes allow you to create RESTful endpoints as part of you Next.js application folder structure
  // Within the pages folder, you need to create a folder call 'api'
  // Within that 'api' folder, you can define all the APIs for your application
  // You can add business logic without needing to write any additional custom server code and without having to configure any API routes
  // Next JS give you everything you need to write full-stack React + NODE applications

  // 48 API Summary
  // API routing mechanism is similar to page based routing mechanism
  // APIs are associated with a route based on their file name
  // Every API route exports a default function typically named as handler function
  // The handler function receives that request and response as parameters
  // Cater to different request types like GET and POST using req.method
  // Dynamic API routes
  // Catch all API routes
  // How to handle a DELETE request
  // We should not call our own API routes for pre-rendering content for example it should be: Dashboard, pages where no need to pre-rendering some data otherwise just HTML elements with some JS code

  // 49 Styling intro 
  // Styling is essential to building any web application
  // Global styles 
  // Component styles
  // SASS or SCSS
  // Css-in-JS solution

  // 54 Styling summary
  // Global - in our application, we need to import the CSS file within page/_app.js
  // Component Level - Next.js supports CSS modules using a [name].module.css naming convention
  // SASS support - install the sass package 
  // CSS-in-JS solutions - Inline styles and Styled Components

  // 55 Miscellaneous(разнообразный) section intro

  // App layout 
  // Head Component
  // Image Component
  // Absolute imports and Module Paths
  // Configure TypeScript supports
  // Preview 
  // Next Config file 
  // Redirects 
  // Environment Variables
  
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
          <li>
            <Link href='/news'>
              <a>Link to list of news</a>
            </Link>
          </li>
          <li>
            <Link href='/dashboard'>
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href='/dashboard-swr'>
              <a>DashboardSWR</a>
            </Link>
          </li>
          <li>
            <Link href='/event'>
              <a>Event</a>
            </Link>
          </li>
          <li>
            <Link href='/api'>
              <a>API routes</a>
            </Link>
          </li>
          <li>
            <Link href='/comments'>
              <a>Example with comments get request</a>
            </Link>
          </li>
        </ol>{' '}
        <button onClick={() => window.history.forward()}>Forward</button>
      </nav>
    </div>
  );
}
