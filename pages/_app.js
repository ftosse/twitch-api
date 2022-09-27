import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
//import axios rom 'axios';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return ( 
    <SessionProvider
      session={session}
    >
    <Navbar />
    <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
