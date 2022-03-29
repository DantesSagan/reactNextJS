import NextAuth from 'next-auth/next';
import GitHubProvider from 'next-auth/providers/github';
import VkProvider from 'next-auth/providers/vk';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    VkProvider({
      clientId: process.env.VK_CLIENT_ID,
      clientSecret: process.env.VK_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  database: process.env.DB_URL,
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: 'sadfsadfadferge',
  },
  callbacks: {
    // when you athenticated will be created token that equal to user.id
    // and if you don't displayed this there is no be id from auth
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
});
