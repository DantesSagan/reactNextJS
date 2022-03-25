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
export async function getServerSideProps(context) {
  const session = await getSession(context);

  // Redirection to auth page even if you don't authenticated in this app
  // By serverSideProps
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
      data: session
        ? 'List 100 blog posts(online)'
        : 'List of free blog posts(offline)',
    },
  };
}
