import '../styles/globals.css';
import '../styles/components.css';
import '../styles/output.css';
import Header from '../components/Header';
import Navbar from '../components/NavBar';
import { ContextFunctionality } from '../src/context';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      id='main-container'
      className='bg-blue-400 text-white box-border'
    >
      <ContextFunctionality>
        <Header />
        <Navbar />
        <Component {...pageProps} />
      </ContextFunctionality>
    </div>
  );
}

export default MyApp;
