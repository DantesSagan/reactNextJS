import React from 'react';
import { getSession } from 'next-auth/react';

export default function LoginPage({ session }) {
  return (
    <div>
      <h1 style={{ textAlign: 'center', minHeight: '100vh' }}>
        LoginPage - {session.user}
      </h1>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}
