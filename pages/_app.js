import '../styles/globals.css';
import Header from '../components/test';
// import 'codemirror/lib/codemirror.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
