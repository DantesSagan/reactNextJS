import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Navbar() {
  const router = useRouter();

  const handleClick = () => {
    console.log('Placing you order');
    router.replace('/product');
  };

  // This component need for auth in this example by GitHub
  const AuthComponent = () => {
    const { data: session } = useSession();
    // If you current session is online you will see this signOut elements with button
    if (session) {
      return (
        <div className='dropdown-content'>
          Signed in as {session.user.email}
          <br />
          <button className='button' onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      );
    }
    // If you current session is offline you will see this signIn elements with button
    // to signIn with GitHub or whatever you want to currently authenticated
    return (
      <div className='dropdown-content'>
        Not signted in <br />
        <button className='button' onClick={() => signIn()}>
          Sign In
        </button>
      </div>
    );
  };
  return (
    <div style={{ position: 'relative' }}>
      <nav
        style={{
          display: 'flex',
          top: 0,
        }}
      >
        <div id='navbar'>
          {' '}
          <div className='' style={{ display: 'inline-block' }}>
            <hr className='' />
            <button
              className='buttonM dropdown'
              style={{ display: 'inline-block', backgroundColor: 'white' }}
            >
              First section
              <div className='dropdown-content'>
                {' '}
                <li className='button'>
                  <Link href='/blog'>
                    <a>Link to Blog</a>
                  </Link>
                </li>
                <li className='button'>
                  <Link href='/blog/first'>
                    <a>Link to Blog first</a>
                  </Link>
                </li>
                <li className='button'>
                  <Link href='/product'>
                    <a>Link to product</a>
                  </Link>
                </li>
                {/* Navigate Programmatically */}
                <div>
                  <button
                    style={{ color: 'black' }}
                    className='button'
                    onClick={handleClick}
                  >
                    <a>Place Order</a>
                  </button>
                </div>
                <li className='button'>
                  <Link href='/users'>
                    <a>Link to list of users</a>
                  </Link>
                </li>
                <li className='button'>
                  <Link href='/posts'>
                    <a>Link to list of posts</a>
                  </Link>
                </li>
              </div>
            </button>{' '}
          </div>
          <div className='' style={{ display: 'inline-block' }}>
            <hr className='' />
            <button
              className='buttonM dropdown'
              style={{ display: 'inline-block', backgroundColor: 'white' }}
            >
              First section
              <div className='dropdown-content'>
                <li className='button'>
                  <Link href='/products'>
                    <a>Link to list of products</a>
                  </Link>
                </li>
                <li className='button'>
                  <Link href='/news'>
                    <a>Link to list of news</a>
                  </Link>
                </li>
                <li className='button'>
                  <Link href='/dashboard'>
                    <a>Dashboard</a>
                  </Link>
                </li>
                <li className='button'>
                  <Link href='/dashboard-swr'>
                    <a>DashboardSWR</a>
                  </Link>
                </li>
                <li className='button'>
                  <Link href='/event'>
                    <a>Event</a>
                  </Link>
                </li>
                <li className='button'>
                  <Link href='/api'>
                    <a>API routes</a>
                  </Link>
                </li>
                <li className='button'>
                  <Link href='/comments'>
                    <a>Example with comments get request</a>
                  </Link>
                </li>
              </div>
            </button>{' '}
          </div>
          <div className='' style={{ display: 'inline-block' }}>
            <hr className='' />
            <button
              className='buttonM dropdown'
              style={{ display: 'inline-block', backgroundColor: 'white' }}
            >
              Auth
              <AuthComponent />
              {/* <button
                  className='button'
                  onClick={() => window.history.forward()}
                  style={{ padding: '5px', color: 'black' }}
                >
                  Forward
                </button> */}
            </button>{' '}
          </div>
        </div>
      </nav>
    </div>
  );
}
