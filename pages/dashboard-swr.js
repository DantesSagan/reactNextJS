import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

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
  const { data, error } = useSWR('dashboard', fetcher);
  const router = useRouter();
  if (error) {
    return <h2>An error has occured</h2>;
  }
  if (!data) {
    return <h2>Loading...</h2>;
  }
  return (
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      <h2>Dashboard</h2>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
      <button onClick={() => router.back()}>Back</button>{' '}
    </div>
  );
}
