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
