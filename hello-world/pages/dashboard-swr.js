import useSwr from 'swr';
import React from 'react';
import { useRouter } from 'next/router';

// ADDITIONAL: if you use SWR  - stale while revalidate library
// You can use shorter code with fetched data from the server
// And plus overall when data changed from the server no need to refresh the page or reload
// Data automatically received the fresh data and displayed it on returned JSX 
const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard');
  const data = await response.json();
  return data;
};
export default function DashboardSWR() {
  const { data, error } = useSwr('dashboard', fetcher);
  const router = useRouter();
  if (error) {
    return 'An error has occured';
  }
  if (!data) {
    return 'Loading...';
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
      <button onClick={() => router.back()}>Back</button>{' '}
    </div>
  );
}
