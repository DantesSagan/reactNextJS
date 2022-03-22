import React from 'react';

export default function User({ userItem }) {
  return (
    <div>
      <div key={userItem.id}>
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
    </div>
  );
}
