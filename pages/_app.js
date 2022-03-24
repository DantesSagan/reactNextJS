import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/globals.css';
import 'styles/layout.css';
import 'styles/navbar.css';

import Head from 'next/dist/shared/lib/head';
import { SessionProvider } from 'next-auth/react';

import { ThemeProvider } from 'styled-components';
import Footer from '@layout/Footer';
import Navbar from '@layout/Navbar';
import Admin from './protected';

// Wrapping the Component and _app.js with ThemeProvider
const theme = {
  colors: {
    primary: '#355C7D',
  },
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // And in this case we define
  // If Component.getLayout it is so return
  //  Component get Layout Component with no Header like in a about page
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    // And for this authenticated we are using SessionProvider like a component
    // Which allow us/you to authenticated with some methods to get access to this site
    // Provider to wrap the app in to make session data available globally. Can also be used to throttle the number of requests to the endpoint
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <>
          <Head>
            <title>Codevolution</title>
            <meta name='description' content='Awesome y/t channel' />
          </Head>
          <Navbar />
          <Admin />
          <Component {...pageProps} />;
          <Footer />
        </>
      </ThemeProvider>
    </SessionProvider>
  );
}
