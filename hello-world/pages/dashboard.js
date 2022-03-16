import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // ADDITIONAL: if you use just react-hooks and data changed from server
    // data will not changed automatically because need to refresh page to received fresh data from the server

    // Create async function
    async function fetchDashboardData() {
      // Create res await fetch data from current localhost by this URL parent path
      const response = await fetch('http://localhost:4000/dashboard');
      //    Convert response fetched data to json format
      const data = await response.json();
      //    Set fetched data to setDashboardData function that holds converted data
      //    Where "dashboardData" statement will take converted "data" from above
      setDashboardData(data);
      //    This function loading says to client
      //    By default function setIsLoading set to false statement
      setIsLoading(!isLoading);
    }
    fetchDashboardData();
  }, []);
  // Otherwise if data didnt't fetched yet display Loading text
  // And then display received parsing data from the server
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {dashboardData.posts}</h2>
      <h2>Likes - {dashboardData.likes}</h2>
      <h2>Followers - {dashboardData.followers}</h2>
      <h2>Following - {dashboardData.following}</h2>
      <button onClick={() => router.back()}>Back</button>{' '}
    </div>
  );
}
