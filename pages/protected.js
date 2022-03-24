import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Admin() {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push('http://localhost:3000/api/auth/signin');
    },
  });

  if (status === 'loading') {
    return 'Loading or not authenticated...';
  }
  if (status === 'authenticated') {
    console.log(`Sign-in ${session.user.email} `);
    return null;
  }

  return router.push('http://localhost:3000');
}
