import Link from 'next/link';
import React from 'react';
import User from '../components/user';

export default function UsersList({ users }) {
  return (
    <div
      style={{
        textAlign: 'center',
        justifyItems: 'center',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>
        UsersList <br />{' '}
      </h1>
      {users.map((userItem) => {
        // If you want to organized you code
        // use folder components to structure you code in file what called with component name
        // and copy paste jsx what you needed
        return <User userItem={userItem} />;
      })}
      <Link href='/'>Home</Link>
    </div>
  );
}
// 1
//  getStaticProps runs only on the server side
//  the function will never run client-side
//  the code you write inside getStaticProps won't even be included in the JS bundle that is sent to the browser
// 2
//  You can write server-side code directly in getStaticProps
//  Accessing the file system using the fs module
//  or querying a databse can be done inside getStaticProps
//  You also don't have to worry about including API keys in getStaticProps as what won't make it to the browser
// 3 getStaticProps contd.
//  getStaticProps is allowed only in a page and cannot be run from a regular component file
//  it is used for pre-rendering and not client-side data fetching
// 4
//  getStaticProps should return an object and
//  object should contain a props key which is an object
// In our example, we returned an object & the object contained a props key which was an object as well.
// 5
//    getStaticProps will run at build time
//    During development, getStaticProps runs on every request
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
