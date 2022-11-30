import '../styles/globals.css';
import '../styles/components.css';
import '../styles/output.css';
import Header from '../components/Header';
import { ContextProvider } from '../src/context';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Header />
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
