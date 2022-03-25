import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

// export default function Admin() {
//   const router = useRouter();
//   const { status, data: session } = useSession({
//     required: true,
//     onUnauthenticated() {
//       // The user is not authenticated, handle it here.
//       router.push('http://localhost:3000/api/auth/signin');
//     },
//   });

//   if (status === 'loading') {
//     return 'Loading or not authenticated...';
//   }
//   if (status === 'authenticated') {
//     console.log(`Sign-in ${session.user.email} `);
//     return null;
//   }

//   return router.push('http://localhost:3000');
// }

export default function Auth({ children }) {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push('http://localhost:3000/api/auth/signin');
    },
  });
  const isUser = session?.user;
  if (isUser) {
    return children;
  }

  if (status === 'loading') {
    return (
      <h1 style={{ textAlign: 'center', minHeight: '100vh' }}>
        Loading or not authenticated... <br />
        {/* <button
          onClick={() => router.push('http://localhost:3000/api/auth/signin')}
        >
          Sign in{' '}
        </button> */}
      </h1>
    );
  }
  if (status === 'authenticated') {
    console.log(`Sign-in ${session.user.email} `);
    return null;
  }

  return router.push('http://localhost:3000');
}
