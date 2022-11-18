import '../styles/globals.css';
import '../styles/components.css';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
