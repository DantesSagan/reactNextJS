import React from 'react';
import { getProviders, getSession, signIn } from 'next-auth/react';

export default function LoginPage({ providers }) {
    
  console.log(Object.values(providers).map((provider) => provider.name));
  return (
    <div>
      <h1 style={{ textAlign: 'center', minHeight: '100vh' }}>LoginPage</h1>
      <div className='mt-40'>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
