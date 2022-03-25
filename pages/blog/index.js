import { getSession, useSession } from 'next-auth/react';
import React from 'react';
// If you created a nested folder structure
// files will be automatically routed
// in the same way in the URL
export default function Blog({ data }) {
  const { data: session, status } = useSession();
  console.log({ session, status });
  return (
    <h1 style={{ marginTop: '200px', minHeight: '100vh', textAlign: 'center' }}>
      Blog Page - {data}
    </h1>
  );
}
// get props from server side rendering especially
// when you in sign in session you will be text displayed - ? 'List 100 blog posts(online)'
// otherwise you will see : 'List of free blog posts(offline)', if you are offline
export function getServerSideProps(context) {
  const session = getSession(context);
  return {
    props: {
      data: session
        ? 'List 100 blog posts(online)'
        : 'List of free blog posts(offline)',
    },
  };
}
