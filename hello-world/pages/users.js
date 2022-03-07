import Link from 'next/link';
import React from 'react';

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
        return (
          <div
            key={userItem.id}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <ul className='usersUl'>
              <li className='usersLi'>{userItem.id}</li>
            </ul>
            <ul className='usersUl'>
              <li className='usersLi'>{userItem.name}</li>
            </ul>
            <ul className='usersUl'>
              <li className='usersLi'>{userItem.username}</li>
            </ul>
            <ul className='usersUl'>
              <li className='usersLi'>{userItem.address.street}</li>
            </ul>
            <ul className='usersUl'>
              <li className='usersLi'>{userItem.phone}</li>
            </ul>
            <ul className='usersUl'>
              <li className='usersLi'>{userItem.website}</li>
            </ul>
            <hr />
          </div>
        );
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
