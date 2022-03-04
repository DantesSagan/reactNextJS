import Link from 'next/link';
export default function Home() {
  // Link component to path with slash - link included in the component
  // With the anchor tag with the text and the href for the route to the component
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Home page</h1>
      <nav
        style={{
          justifyItems: 'center',
          display: 'inline-block',
          border: '5px solid red',
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
        </ul>
      </nav>
    </div>
  );
}
