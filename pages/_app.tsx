import '../styles/globals.css';
import '../styles/components.css';
import '../styles/output.css';
import Header from '../components/Header';
import { ContextProvider } from '../src/context';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      id='main-container'
      className='bg-blue-400 text-white box-border'
    >
      <ContextProvider>
        <Header />
        <Component {...pageProps} />
      </ContextProvider>
    </div>
  );
}

export default MyApp;
