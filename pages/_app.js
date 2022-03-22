import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/layout.css';

import Head from 'next/dist/shared/lib/head';
import { ThemeProvider } from 'styled-components';
import Header from '../components/header';
import Footer from '../components/Footer';

// Wrapping the Component and _app.js with ThemeProvider
const theme = {
  colors: {
    primary: '#355C7D',
  },
};

export default function MyApp({ Component, pageProps }) {
  // And in this case we define
  // If Component.getLayout it is so return
  //  Component get Layout Component with no Header like in a about page
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Codevolution</title>
          <meta
            name='description'
            content='Awesome y/t channel'
          />
        </Head>
        <Header />
        <Component {...pageProps} />;
        <Footer />
      </>
    </ThemeProvider>
  );
}
