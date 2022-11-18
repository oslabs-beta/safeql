import '../styles/globals.css';
import '../styles/components.css';
import Header from '../components/test';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
