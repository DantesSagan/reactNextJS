import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useSWR from 'swr';

export default function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);

  const fetchSportsEvents = async () => {
    const response = await fetch(`http://localhost:4000/event?category=sports`);
    const data = await response.json();
    setEvents(data);
    // In this case we are pushing to URL path router that equal to category=sports
    // Where in URL inpur will be displayed pushed URL path without running data fetching methods agains, that includes 'getServerSideProps
    //
    router.push('/event?category=sports', undefined, { shallow: true });
  };

  //   const { data, error } = useSWR('event', fetcher);

  const router = useRouter();

  return (
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>EventList</h1>
      {events.map((eventItem) => {
        return (
          <div key={eventItem.id}>
            {' '}
            <h2>
              {eventItem.id} - {eventItem.title} - {eventItem.category}{' '}
            </h2>
            <p>
              {eventItem.description} - {eventItem.date}
            </p>
            <hr />
          </div>
        );
      })}

      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  // When we reload the page getServerSideProps is run and now i seems the category query parameter is present
  // If it is present the URL fetched the filter events and passes it in the component as data
  // And data is used as state variable which is used like list of events
  const queryString = category ? 'category=sports' : '';
  const response = await fetch(`http://localhost:4000/event?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
