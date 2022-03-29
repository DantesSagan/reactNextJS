import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { signIn, signOut, useSession } from 'next-auth/react';
import { seedDatabse } from '../firebaseLib/seedDatabase';
import { firebaseLib } from '../firebaseLib/firebase';

export default function Navbar() {
  // const seed = seedDatabse(firebaseLib);
  // console.log(seed);
  const router = useRouter();
  const { status, data: session } = useSession();

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
        <div
          className='dropdown-content'
          style={{
            background: 'black',
            color: 'white',
            textAlign: 'center',
            padding: '10px',
          }}
        >
          Signed in as {session.user.email}
          <br />
          <button
            className='button'
            style={{ background: 'black', color: 'white', textAlign: 'center' }}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </button>
        </div>
      );
    }
    // If you current session is offline you will see this signIn elements with button
    // to signIn with GitHub or whatever you want to currently authenticated
    return (
      <div
        className='dropdown-content'
        style={{
          background: 'black',
          color: 'white',
          textAlign: 'center',
          padding: '10px',
        }}
      >
        Not signted in <br />
        <button
          className='button'
          style={{ background: 'black', color: 'white' }}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
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
          marginBottom: '200px',
        }}
      >
        <div id='navbar'>
          {' '}
          <div className='' style={{ display: 'inline-block' }}>
            <hr className='' />
            <section
              className='buttonM '
              style={{
                color: 'black',
                marginTop: '-5px',
              }}
            >
              {' '}
              <li
                className='button'
                style={{
                  color: 'black',
                }}
              >
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
            </section>{' '}
          </div>
          <div className='' style={{ display: 'inline-block' }}>
            <hr className='' />
            <section
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
                <button
                  style={{ color: 'white', background: 'black' }}
                  className='button'
                  onClick={handleClick}
                >
                  <a>Place Order</a>
                </button>
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
                <li className='button'>
                  <Link href='/qrpage'>
                    <a>Link to QRpage</a>
                  </Link>
                </li>
              </div>
            </section>{' '}
          </div>
          <div className='' style={{ display: 'inline-block' }}>
            <hr className='' />
            <section
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
                <li className='button'>
                  <Link href='/api/text-session'>
                    <a>Api text-session</a>
                  </Link>
                </li>
                <li className='button'>
                  <Link href='/text-session'>
                    <a>Text-session</a>
                  </Link>
                </li>
                <li className='button'>
                  <Link href='/firebase-data'>
                    <a>Link to FirebaseData</a>
                  </Link>
                </li>
              </div>
            </section>{' '}
          </div>
          <div className='' style={{ display: 'inline-block' }}>
            <hr className='' />
            <section
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
            </section>{' '}
          </div>
          <div className='' style={{ display: 'inline-block' }}>
            <hr className='' />
            <section
              className='buttonM '
              style={{
                color: 'black',
                marginTop: '-5px',
              }}
            >
              {' '}
              <li
                className='button'
                style={{
                  color: 'black',
                }}
              >
                {status === 'authenticated' ? (
                  session.user.name
                ) : (
                  <div>Not sign in</div>
                )}
              </li>
            </section>{' '}
          </div>
        </div>
      </nav>
    </div>
  );
}
