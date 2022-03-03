import Link from 'next/link';
export default function Home() {
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
            <Link href='/blog'>Link to Blog</Link>
          </li>
          <li>
            <Link href='/blog/first'>Link to Blog first</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
